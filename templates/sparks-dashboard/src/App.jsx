import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- D3 CHARTS ---
        const tooltip = d3.select("#tooltip");

        // 1. Revenue Bar Chart
        (function() {
            const container = document.getElementById('revenue-chart');
            const width = container.clientWidth;
            const height = container.clientHeight;
            const margin = {top: 10, right: 0, bottom: 20, left: 0};

            const svg = d3.select("#revenue-chart")
                .append("svg")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("viewBox", `0 0 ${width} ${height}`);

            const data = [
                {day: 'Mon', val: 12, target: 15}, {day: 'Tue', val: 18, target: 20}, 
                {day: 'Wed', val: 42, target: 35}, {day: 'Thu', val: 25, target: 30}, 
                {day: 'Fri', val: 32, target: 40}, {day: 'Sat', val: 10, target: 15}, 
                {day: 'Sun', val: 8, target: 10}
            ];

            const x = d3.scaleBand()
                .range([margin.left, width - margin.right])
                .padding(0.4)
                .domain(data.map(d => d.day));

            const y = d3.scaleLinear()
                .range([height - margin.bottom, margin.top])
                .domain([0, 50]);

            // Background Bars (Target)
            svg.selectAll(".bar-bg")
                .data(data)
                .enter().append("rect")
                .attr("x", d => x(d.day))
                .attr("width", x.bandwidth())
                .attr("y", d => y(d.target))
                .attr("height", d => height - margin.bottom - y(d.target))
                .attr("fill", "#27272a") // Zinc 800
                .attr("rx", 2);

            // Foreground Bars (Actual)
            svg.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("x", d => x(d.day))
                .attr("width", x.bandwidth())
                .attr("y", d => y(d.val))
                .attr("height", d => height - margin.bottom - y(d.val))
                .attr("fill", d => d.val > 30 ? "#38bdf8" : "#3f3f46") // Sky 400 for high, Zinc 700 for low
                .attr("rx", 2)
                .on("mouseover", function(event, d) {
                    d3.select(this).attr("opacity", 0.8);
                    tooltip.style("opacity", 1)
                           .html(`$${d.val}k`)
                           .style("left", (event.pageX + 10) + "px")
                           .style("top", (event.pageY - 20) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this).attr("opacity", 1);
                    tooltip.style("opacity", 0);
                });

            // X Axis Labels
            svg.append("g")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).tickSize(0).tickPadding(10))
                .select(".domain").remove();
            
            svg.selectAll(".tick text")
                .attr("fill", "#52525b") // Zinc 600
                .attr("font-size", "10px")
                .attr("font-family", "Inter");
        })();

        // 2. Donut Chart
        (function() {
            const container = document.getElementById('donut-chart');
            const width = container.clientWidth;
            const height = container.clientHeight;
            const radius = Math.min(width, height) / 2 - 10;

            const svg = d3.select("#donut-chart")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            const data = {a: 45, b: 30, c: 25};
            const color = d3.scaleOrdinal()
                .domain(["a", "b", "c"])
                .range(["#38bdf8", "#e879f9", "#E8E2B5"]); // Sky, Fuchsia, custom Yellow

            const pie = d3.pie().value(d => d[1]).sort(null);
            const data_ready = pie(Object.entries(data));

            const arc = d3.arc().innerRadius(radius * 0.6).outerRadius(radius);

            svg.selectAll('allSlices')
                .data(data_ready)
                .join('path')
                .attr('d', arc)
                .attr('fill', d => color(d.data[0]))
                .attr("stroke", "#1A1D21")
                .style("stroke-width", "2px")
                .on("mouseover", function(event, d) {
                    d3.select(this).attr("opacity", 0.8);
                })
                .on("mouseout", function() {
                    d3.select(this).attr("opacity", 1);
                });
                
            // Center Text
            svg.append("text")
                .text("Total")
                .attr("text-anchor", "middle")
                .style("font-size", "10px")
                .style("fill", "#71717a")
                .attr("dy", "-0.5em");
            svg.append("text")
                .text("412")
                .attr("text-anchor", "middle")
                .style("font-size", "18px")
                .style("font-weight", "bold")
                .style("fill", "white")
                .attr("dy", "0.8em");
        })();

        // 3. Radar Chart
        (function() {
            const container = document.getElementById('radar-chart');
            const width = container.clientWidth;
            const height = container.clientHeight;
            const margin = 30;
            const radius = Math.min(width, height) / 2 - margin;

            const svg = d3.select("#radar-chart")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width/2},${height/2})`);

            const data = {"Speed": 80, "Quality": 90, "Volume": 65, "Close Rate": 75, "Retention": 85};
            const features = Object.keys(data);
            
            const angleSlice = Math.PI * 2 / features.length;
            const rScale = d3.scaleLinear().range([0, radius]).domain([0, 100]);

            // Draw Grid
            [25, 50, 75, 100].forEach(level => {
                svg.append("circle")
                    .attr("r", rScale(level))
                    .attr("fill", "none")
                    .attr("stroke", "#27272a") // Zinc 800
                    .attr("stroke-dasharray", "4 4");
            });

            // Draw Axes
            features.forEach((f, i) => {
                const angle = i * angleSlice - Math.PI/2; // start at top
                const x = rScale(100) * Math.cos(angle);
                const y = rScale(100) * Math.sin(angle);
                
                svg.append("line")
                    .attr("x1", 0).attr("y1", 0)
                    .attr("x2", x).attr("y2", y)
                    .attr("stroke", "#27272a")
                    .attr("stroke-width", "1px");

                // Labels
                const labelX = (rScale(100) + 15) * Math.cos(angle);
                const labelY = (rScale(100) + 15) * Math.sin(angle);
                
                svg.append("text")
                    .attr("x", labelX)
                    .attr("y", labelY)
                    .text(f)
                    .style("text-anchor", "middle")
                    .style("alignment-baseline", "middle")
                    .style("font-size", "9px")
                    .style("fill", "#71717a") // Zinc 500
                    .style("font-family", "Inter");
            });

            // Draw Shape
            const line = d3.lineRadial()
                .angle((d, i) => i * angleSlice)
                .radius(d => rScale(d[1]))
                .curve(d3.curveLinearClosed);

            const dataEntries = Object.entries(data);

            // Background Area
            svg.append("path")
                .datum(dataEntries)
                .attr("d", line)
                .attr("fill", "rgba(56, 189, 248, 0.2)") // Sky 400 alpha
                .attr("stroke", "#38bdf8")
                .attr("stroke-width", 1.5);

            // Dots
            svg.selectAll(".dot")
                .data(dataEntries)
                .enter().append("circle")
                .attr("cx", (d, i) => rScale(d[1]) * Math.cos(i * angleSlice - Math.PI/2))
                .attr("cy", (d, i) => rScale(d[1]) * Math.sin(i * angleSlice - Math.PI/2))
                .attr("r", 3)
                .attr("fill", "#09090b")
                .attr("stroke", "#38bdf8")
                .attr("stroke-width", 1.5)
                 .on("mouseover", function(event, d) {
                    d3.select(this).attr("r", 5);
                    tooltip.style("opacity", 1)
                           .html(`${d[0]}: ${d[1]}%`)
                           .style("left", (event.pageX + 10) + "px")
                           .style("top", (event.pageY - 20) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this).attr("r", 3);
                    tooltip.style("opacity", 0);
                });

        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 flex-shrink-0 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#0c0c0e] z-20 hidden sm:flex">
<div className="mb-2 text-white hover:text-sky-400 transition-colors cursor-pointer">
<span className="iconify w-7 h-7" data-icon="solar:command-bold-duotone"></span>
</div>
<nav className="flex flex-col gap-4 w-full items-center">
<button className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300">
<span className="iconify w-6 h-6" data-icon="solar:magnifer-bold-duotone"></span>
</button>
<button className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300">
<span className="iconify w-6 h-6" data-icon="solar:inbox-bold-duotone"></span>
</button>
<div className="h-px w-6 bg-white/5 my-1"></div>
<button className="p-2.5 rounded-lg text-white bg-white/10 ring-1 ring-white/10 transition-all duration-300">
<span className="iconify w-6 h-6" data-icon="solar:widget-2-bold-duotone"></span>
</button>
<button className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300">
<span className="iconify w-6 h-6" data-icon="solar:chart-2-bold-duotone"></span>
</button>
<button className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300">
<span className="iconify w-6 h-6" data-icon="solar:users-group-rounded-bold-duotone"></span>
</button>
</nav>
<div className="mt-auto">
<button className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300">
<span className="iconify w-6 h-6" data-icon="solar:settings-bold-duotone"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#09090b]">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-white">
<span className="iconify w-6 h-6 text-sky-400" data-icon="solar:bolt-bold-duotone"></span>
<span className="text-base font-semibold tracking-tight">Sparks</span>
</div>
<nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-gray-500">
<a className="hover:text-white transition-colors" href="#">Overview</a>
<a className="text-white bg-white/5 px-3 py-1 rounded-full" href="#">Pipeline</a>
<a className="hover:text-white transition-colors" href="#">Finance</a>
<a className="hover:text-white transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4">
<div className="text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-sm font-semibold text-white tracking-tight">$2.4M</span>
<span className="text-emerald-400 text-[10px] font-semibold bg-emerald-400/10 px-1.5 py-0.5 rounded">+14%</span>
</div>
<p className="text-xs text-gray-600">Monthly Revenue</p>
</div>
<div className="h-8 w-px bg-white/5"></div>
</div>
<button className="bg-white text-black pl-3 pr-4 py-1.5 rounded-full font-medium text-xs hover:bg-gray-200 transition-colors flex items-center gap-2">
<span className="iconify w-5 h-5" data-icon="solar:add-circle-bold-duotone"></span>
                    New Deal
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 no-scrollbar relative">

<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-[#1A1D21] flex items-center justify-center hover:bg-[#25292F] transition-colors border border-white/5 text-gray-400 hover:text-white">
<span className="iconify w-5 h-5" data-icon="solar:arrow-left-bold-duotone"></span>
</button>
<div>
<h1 className="text-lg font-semibold text-white tracking-tight">Active Pipeline</h1>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-500 hover:text-white transition-colors"><span className="iconify w-5 h-5" data-icon="solar:filter-bold-duotone"></span></button>
<button className="p-2 text-gray-500 hover:text-white transition-colors"><span className="iconify w-5 h-5" data-icon="solar:sort-vertical-bold-duotone"></span></button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-6">

<div className="bg-sky-400 rounded-2xl p-5 text-black relative group cursor-pointer hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-44">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 opacity-70">
<span className="iconify w-4 h-4" data-icon="simple-icons:microsoft"></span>
<span className="text-[10px] font-bold uppercase tracking-wider">Enterprise</span>
</div>
<span className="iconify w-5 h-5 opacity-60" data-icon="solar:menu-dots-bold-duotone"></span>
</div>
<div>
<h3 className="text-xl font-semibold leading-tight mb-1 tracking-tight">License Expansion</h3>
<p className="text-xs font-medium opacity-70">Oct 24 • High Priority</p>
</div>
<div className="flex items-end justify-between mt-4">
<span className="text-2xl font-bold tracking-tight">$18,500</span>
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border border-sky-400" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border border-sky-400" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</div>
</div>

<div className="bg-[#E8E2B5] rounded-2xl p-5 text-black relative group cursor-pointer hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-44">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 opacity-70">
<span className="iconify w-4 h-4" data-icon="simple-icons:hubspot"></span>
<span className="text-[10px] font-bold uppercase tracking-wider">Marketing</span>
</div>
<span className="iconify w-5 h-5 opacity-60" data-icon="solar:menu-dots-bold-duotone"></span>
</div>
<div>
<h3 className="text-xl font-semibold leading-tight mb-1 tracking-tight">Q4 Strategy</h3>
<p className="text-xs font-medium opacity-70">Nov 02 • Review Phase</p>
</div>
<div className="flex items-end justify-between mt-4">
<span className="text-2xl font-bold tracking-tight">$5,200</span>
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border border-[#E8E2B5]" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"/>
</div>
</div>
</div>

<div className="bg-red-500 rounded-2xl p-5 text-black relative group cursor-pointer hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-44">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 opacity-70">
<span className="iconify w-5 h-5" data-icon="simple-icons:amazonaws"></span>
<span className="text-[10px] font-bold uppercase tracking-wider">Cloud Ops</span>
</div>
<span className="iconify w-5 h-5 opacity-60" data-icon="solar:menu-dots-bold-duotone"></span>
</div>
<div>
<h3 className="text-xl font-semibold leading-tight mb-1 tracking-tight">AWS Migration</h3>
<p className="text-xs font-medium opacity-70">Oct 30 • Technical</p>
</div>
<div className="flex items-end justify-between mt-4">
<span className="text-2xl font-bold tracking-tight">$24,900</span>
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border border-fuchsia-400" src="https://i.pravatar.cc/150?u=2042581f4e29026704d"/>
<div className="w-7 h-7 rounded-full border border-fuchsia-400 bg-black/20 flex items-center justify-center text-[10px] font-bold">+2</div>
</div>
</div>
</div>

<div className="bg-[#1A1D21] border border-white/5 rounded-2xl p-5 text-white relative group cursor-pointer hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-44 shadow-xl">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-gray-500">
<span className="iconify w-4 h-4" data-icon="simple-icons:vercel"></span>
<span className="text-[10px] font-bold uppercase tracking-wider">Retainer</span>
</div>
<span className="iconify w-5 h-5 text-gray-500" data-icon="solar:menu-dots-bold-duotone"></span>
</div>
<div>
<h3 className="text-xl font-semibold leading-tight mb-1 tracking-tight text-gray-100">Global Success</h3>
<p className="text-xs font-medium text-gray-500">Nov 15 • Renewal</p>
</div>
<div className="flex items-end justify-between mt-4">
<span className="text-2xl font-bold tracking-tight text-gray-300">$3,800</span>
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border border-[#1A1D21]" src="https://i.pravatar.cc/150?u=7042581f4e29026704d"/>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

<div className="lg:col-span-2 bg-[#1A1D21] border border-white/5 rounded-2xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Revenue Forecast</h3>
<p className="text-xs text-gray-500 mt-0.5">Projected earnings via D3.js</p>
</div>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1.5 text-[10px] text-gray-400 border border-white/5 px-2 py-1 rounded-md bg-white/5"><div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>Forecast</span>
<span className="flex items-center gap-1.5 text-[10px] text-gray-400 border border-white/5 px-2 py-1 rounded-md bg-white/5"><div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>Actual</span>
</div>
</div>
<div className="w-full h-48 flex-1" id="revenue-chart"></div>
</div>

<div className="bg-[#1A1D21] border border-white/5 rounded-2xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Lead Source</h3>
<p className="text-xs text-gray-500 mt-0.5">Acquisition channels</p>
</div>
</div>
<div className="w-full h-48 flex items-center justify-center relative" id="donut-chart"></div>
<div className="flex justify-center gap-4 mt-2">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-sky-400"></div>
<span className="text-[10px] text-gray-500">Organic</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
<span className="text-[10px] text-gray-500">Referral</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#E8E2B5]"></div>
<span className="text-[10px] text-gray-500">Social</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="bg-[#1A1D21] border border-white/5 rounded-2xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Team Health</h3>
<p className="text-xs text-gray-500 mt-0.5">Performance metrics</p>
</div>
</div>
<div className="w-full h-56 flex items-center justify-center" id="radar-chart"></div>
</div>

<div className="lg:col-span-2 bg-[#1A1D21] border border-white/5 rounded-2xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-semibold text-white tracking-tight">Priority Tasks</h3>
<button className="text-[10px] text-gray-500 hover:text-white transition-colors">View All</button>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
<div className="w-8 h-8 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-gray-500 group-hover:border-sky-400 group-hover:text-sky-400 transition-colors">
<span className="iconify w-5 h-5" data-icon="solar:check-circle-bold-duotone"></span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<p className="text-xs font-medium text-white group-hover:text-sky-400 transition-colors">Review Q4 Budget Proposal</p>
<span className="iconify w-3 h-3 text-gray-600" data-icon="simple-icons:notion"></span>
</div>
<p className="text-[10px] text-gray-600 mt-0.5">Assigned by Sarah • Today, 2:00 PM</p>
</div>
<span className="text-[10px] bg-sky-400/10 text-sky-400 px-2 py-1 rounded font-medium">Finance</span>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
<div className="w-8 h-8 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-gray-500 group-hover:border-fuchsia-400 group-hover:text-fuchsia-400 transition-colors">
<span className="iconify w-5 h-5" data-icon="solar:check-circle-bold-duotone"></span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<p className="text-xs font-medium text-white group-hover:text-fuchsia-400 transition-colors">Client Onboarding Session</p>
<span className="iconify w-3 h-3 text-gray-600" data-icon="simple-icons:zoom"></span>
</div>
<p className="text-[10px] text-gray-600 mt-0.5">Tech Team • Tomorrow, 10:00 AM</p>
</div>
<span className="text-[10px] bg-fuchsia-400/10 text-fuchsia-400 px-2 py-1 rounded font-medium">Meeting</span>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
<div className="w-8 h-8 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-gray-500 group-hover:border-yellow-200 group-hover:text-yellow-200 transition-colors">
<span className="iconify w-5 h-5" data-icon="solar:check-circle-bold-duotone"></span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<p className="text-xs font-medium text-white group-hover:text-yellow-200 transition-colors">Sign Contract - Vertex Inc</p>
<span className="iconify w-3 h-3 text-gray-600" data-icon="simple-icons:docusign"></span>
</div>
<p className="text-[10px] text-gray-600 mt-0.5">Legal • Nov 12</p>
</div>
<span className="text-[10px] bg-yellow-200/10 text-yellow-200 px-2 py-1 rounded font-medium">Urgent</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="tooltip" id="tooltip"></div>


    </>
  );
}
