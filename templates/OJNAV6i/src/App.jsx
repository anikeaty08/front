import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            // Animation sequence timing
            const elements = [
                { id: 'card', delay: 0 },
                { id: 'header-title', delay: 200 },
                { id: 'header-menu', delay: 300 },
                { id: 'header-subtitle', delay: 400 },
                { id: 'income-section', delay: 500 },
                { id: 'divider-1', delay: 550 },
                { id: 'spending-section', delay: 600 },
                { id: 'chart-container', delay: 700 },
                { id: 'total-label', delay: 800 },
                { id: 'total-value', delay: 900 },
                { id: 'legend-design', delay: 1000 },
                { id: 'divider-2', delay: 1050 },
                { id: 'legend-angle', delay: 1100 },
                { id: 'divider-3', delay: 1150 },
                { id: 'legend-youtube', delay: 1200 }
            ];
            
            elements.forEach(item => {
                setTimeout(() => {
                    const el = document.getElementById(item.id);
                    el.classList.add('fade-in');
                    el.style.opacity = 1;
                }, item.delay);
            });

            // Set up tooltips with improved microinteractions
            function setupTooltip(segmentId, tooltipId) {
                const segment = document.getElementById(segmentId);
                const tooltip = document.getElementById(tooltipId);
                
                segment.addEventListener('mouseenter', (e) => {
                    const chartContainer = document.getElementById('chart-container');
                    const containerRect = chartContainer.getBoundingClientRect();
                    
                    let posX, posY;
                    
                    // Position tooltips based on segment
                    if (segmentId === 'youtube-segment') {
                        posX = containerRect.width * 0.75;
                        posY = containerRect.height * 0.25;
                    } else if (segmentId === 'design-segment') {
                        posX = containerRect.width * 0.25;
                        posY = containerRect.height * 0.75;
                    } else { // angle-segment
                        posX = containerRect.width * 0.25;
                        posY = containerRect.height * 0.25;
                    }
                    
                    tooltip.style.left = `${posX}px`;
                    tooltip.style.top = `${posY}px`;
                    tooltip.classList.add('visible');
                });
                
                segment.addEventListener('mouseleave', () => {
                    tooltip.classList.remove('visible');
                });
            }
            
            // Counter animations
            const animateValue = (id, start, end, duration, formatter) => {
                const obj = document.getElementById(id);
                let startTimestamp = null;
                
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const value = progress * (end - start) + start;
                    obj.innerHTML = formatter(value);
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                
                window.requestAnimationFrame(step);
            };
            
            const dollarFormatter = value => '$' + value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            
            const commaFormatter = value => value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).replace('.', ',');
            
            // Start animations after delay
            setTimeout(() => {
                // Initialize tooltips
                setupTooltip('youtube-segment', 'youtube-tooltip');
                setupTooltip('design-segment', 'design-tooltip');
                setupTooltip('angle-segment', 'angle-tooltip');
                
                // Start counter animations
                animateValue('income-value', 0, 88886.98, 1500, dollarFormatter);
                animateValue('spending-value', 0, 16786.90, 1500, dollarFormatter);
                animateValue('counter', 0, 295.29, 1500, commaFormatter);
                animateValue('design-amount', 0, 16786.90, 1500, dollarFormatter);
                animateValue('angle-amount', 0, 8282.10, 1500, dollarFormatter);
                animateValue('youtube-amount', 0, 1706.60, 1500, dollarFormatter);
                
                // Animate chart segments
                const youtubeSegment = document.getElementById('youtube-segment');
                const designSegment = document.getElementById('design-segment');
                const angleSegment = document.getElementById('angle-segment');
                
                const circumference = 2 * Math.PI * 40;
                const youtubePercentage = 0.45;
                const designPercentage = 0.35;
                const anglePercentage = 0.20;
                
                designSegment.style.strokeDashoffset = -(youtubePercentage * circumference);
                angleSegment.style.strokeDashoffset = -((youtubePercentage + designPercentage) * circumference);
                
                youtubeSegment.style.strokeDasharray = `${youtubePercentage * circumference} ${circumference}`;
                designSegment.style.strokeDasharray = `${designPercentage * circumference} ${circumference}`;
                angleSegment.style.strokeDasharray = `${anglePercentage * circumference} ${circumference}`;
            }, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md bg-white/90 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg overflow-hidden opacity-0" id="card">

<div className="p-5 space-y-4">
<div className="flex justify-between items-center">
<div className="flex items-center space-x-2 opacity-0" id="header-title">
<div className="opacity-70">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22H22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M12 2L21 8V10H3V8L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M5 10V18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M9 10V18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M15 10V18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M19 10V18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M3 22V19H21V22" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h1 className="text-base font-medium">Financial Statements</h1>
</div>
<div className="opacity-0" id="header-menu">
<button className="focus:outline-none" id="menu-button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<circle cx="12" cy="8" fill="currentColor" r="1"></circle>
<circle cx="12" cy="12" fill="currentColor" r="1"></circle>
<circle cx="12" cy="16" fill="currentColor" r="1"></circle>
</svg>
</button>
</div>
</div>
<p className="text-sm font-semibold text-black/50 opacity-0" id="header-subtitle">Optimize to get your best score</p>
</div>

<div className="px-5">
<div className="flex justify-between items-center py-6">
<div className="space-y-2 opacity-0" id="income-section">
<p className="text-xs font-semibold text-black/70">Income</p>
<p className="text-base font-semibold" id="income-value">$0</p>
</div>
<div className="h-8 w-px bg-black/10 opacity-0" id="divider-1"></div>
<div className="space-y-2 opacity-0" id="spending-section">
<p className="text-xs font-semibold text-black/70">Spending</p>
<p className="text-base font-semibold text-black/50" id="spending-value">$0</p>
</div>
</div>
</div>

<div className="relative px-5 h-[300px] flex items-center justify-center">
<div className="relative w-[300px] h-[300px] opacity-0" id="chart-container">

<div className="tooltip text-xs" id="youtube-tooltip">
<p className="font-semibold">YouTube</p>
<p className="text-black/70">$1,706.60</p>
<p className="text-black/50">45% of total</p>
</div>
<div className="tooltip text-xs" id="design-tooltip">
<p className="font-semibold">Design</p>
<p className="text-black/70">$16,786.90</p>
<p className="text-black/50">35% of total</p>
</div>
<div className="tooltip text-xs" id="angle-tooltip">
<p className="font-semibold">Angle</p>
<p className="text-black/70">$8,282.10</p>
<p className="text-black/50">20% of total</p>
</div>

<svg className="absolute inset-0 transform -rotate-90" viewbox="0 0 100 100">
<circle className="segment-hover" cx="50" cy="50" fill="none" id="youtube-segment" r="40" stroke="#F87171" stroke-dasharray="0 251.2" stroke-dashoffset="0" strokeWidth="20">
</circle>
</svg>

<svg className="absolute inset-0 transform -rotate-90" viewbox="0 0 100 100">
<circle className="segment-hover" cx="50" cy="50" fill="none" id="design-segment" r="40" stroke="#3B82F6" stroke-dasharray="0 251.2" stroke-dashoffset="0" strokeWidth="20">
</circle>
</svg>

<svg className="absolute inset-0 transform -rotate-90" viewbox="0 0 100 100">
<circle className="segment-hover" cx="50" cy="50" fill="none" id="angle-segment" r="40" stroke="#A855F7" stroke-dasharray="0 251.2" stroke-dashoffset="0" strokeWidth="20">
</circle>
</svg>

<div className="absolute rounded-full bg-white w-[200px] h-[200px] top-[50px] left-[50px]"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<p className="text-sm font-semibold text-black/50 opacity-0" id="total-label">Total</p>
<div className="flex items-end opacity-0" id="total-value">
<span className="text-xl font-bold">$</span>
<span className="text-3xl font-bold" id="counter">0</span>
</div>
</div>
</div>
</div>

<div className="px-5 py-4 flex justify-between">
<div className="space-y-1 opacity-0" id="legend-design">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded bg-blue-500"></div>
<p className="text-xs font-semibold text-black/70">Design</p>
</div>
<p className="text-xs" id="design-amount">$0</p>
</div>
<div className="h-8 w-px bg-black/10 opacity-0" id="divider-2"></div>
<div className="space-y-1 opacity-0" id="legend-angle">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded bg-purple-500"></div>
<p className="text-xs font-semibold text-black/70">Angle</p>
</div>
<p className="text-xs" id="angle-amount">$0</p>
</div>
<div className="h-8 w-px bg-black/10 opacity-0" id="divider-3"></div>
<div className="space-y-1 opacity-0" id="legend-youtube">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded bg-red-400"></div>
<p className="text-xs font-semibold text-black/70">Youtube</p>
</div>
<p className="text-xs" id="youtube-amount">$0</p>
</div>
</div>
</div>


    </>
  );
}
