import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const aptSlider = document.getElementById('apt-slider');
            const aptFill = document.getElementById('apt-fill');
            const aptThumb = document.getElementById('apt-thumb');
            const aptDisplay = document.getElementById('apt-display');

            const tktSlider = document.getElementById('tkt-slider');
            const tktFill = document.getElementById('tkt-fill');
            const tktThumb = document.getElementById('tkt-thumb');
            const tktDisplay = document.getElementById('tkt-display');

            const closedJobsDisplay = document.getElementById('closed-jobs');
            const monthlyRevDisplay = document.getElementById('monthly-rev');

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            });

            function updateCalculator() {
                const aptVal = parseInt(aptSlider.value);
                const tktVal = parseInt(tktSlider.value);

                // Appointments UI
                const aptMin = parseInt(aptSlider.min);
                const aptMax = parseInt(aptSlider.max);
                const aptPercent = ((aptVal - aptMin) / (aptMax - aptMin)) * 100;
                aptFill.style.width = `${aptPercent}%`;
                aptThumb.style.left = `${aptPercent}%`;
                aptDisplay.textContent = `${aptVal} appointments`;

                // Ticket UI
                const tktMin = parseInt(tktSlider.min);
                const tktMax = parseInt(tktSlider.max);
                const tktPercent = ((tktVal - tktMin) / (tktMax - tktMin)) * 100;
                tktFill.style.width = `${tktPercent}%`;
                tktThumb.style.left = `${tktPercent}%`;
                tktDisplay.textContent = formatter.format(tktVal);

                // Math Logic
                const closedJobs = Math.round(aptVal * 0.4);
                const monthlyRev = closedJobs * tktVal;

                // Update Results
                closedJobsDisplay.textContent = closedJobs;
                monthlyRevDisplay.textContent = formatter.format(monthlyRev);
            }

            aptSlider.addEventListener('input', updateCalculator);
            tktSlider.addEventListener('input', updateCalculator);

            // Init
            updateCalculator();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="flex z-50 w-full border-neutral-800 border-b pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 left-0 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex text-sm font-medium text-neutral-100 w-8 h-8 border-neutral-700 border rounded items-center justify-center">FC</div>
<span className="text-base font-medium text-neutral-200">Foundcommon Ltd</span>
</div>
<div className="text-base text-neutral-400 hidden sm:block">For Home Service Contractors</div>
</header>
<main className="flex flex-col overflow-hidden w-full items-center">
<section className="min-h-screen flex flex-col text-center w-full border-neutral-800 border-b pt-20 pr-6 pb-12 pl-6 relative items-center justify-center">
<div className="animate-slide-up seq-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 text-sm mb-8">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
                Performance-Based Booking
            </div>
<h1 className="animate-slide-up seq-2 font-['IBM_Plex_Serif'] text-4xl md:text-5xl font-normal tracking-tight text-neutral-100 leading-tight mb-6 max-w-3xl">
                Stop Chasing Leads. We Book Appointments directly on your calendar.
            </h1>
<p className="animate-slide-up seq-3 text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-normal">
                You only pay when a qualified homeowner shows up. No retainers, no shared leads, no chasing.
            </p>
<div className="animate-slide-up seq-4 w-full flex justify-center">
<button className="bg-neutral-100 hover:bg-white text-neutral-900 px-8 py-4 rounded-md text-base md:text-lg font-medium transition-all flex items-center justify-center gap-2 w-full max-w-sm">
                    Start Getting Appointments <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="animate-slide-up seq-5 mt-6 text-base text-neutral-500">
                30-day money-back guarantee if it doesn't pay for itself
            </p>
</section>
<section className="flex flex-col w-full max-w-6xl border-neutral-800 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 items-center">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="font-['IBM_Plex_Serif'] text-4xl md:text-5xl font-normal tracking-tight text-neutral-100 mb-4">How We Fill Your Calendar</h2>
<p className="text-lg md:text-xl text-neutral-400">The precise sequence we use to generate highly-qualified appointments.</p>
</div>
<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-4 w-full max-w-md ml-auto">
<div className="p-5 rounded-lg border border-neutral-600 bg-neutral-800/30 cursor-pointer transition-all">
<h3 className="font-['IBM_Plex_Serif'] font-normal tracking-tight text-neutral-100 text-2xl mb-1">1. Target</h3>
<p className="text-base text-neutral-400">Specific zip codes in your service area</p>
</div>
<div className="hover:border-neutral-700 cursor-pointer transition-all bg-transparent border-neutral-800 border rounded-lg pt-5 pr-5 pb-5 pl-5">
<h3 className="font-['IBM_Plex_Serif'] font-normal tracking-tight text-neutral-300 text-2xl mb-1">2. Attract</h3>
<p className="text-base text-neutral-500">Scroll-stopping ads built for your trade</p>
</div>
<div className="p-5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-transparent cursor-pointer transition-all">
<h3 className="font-['IBM_Plex_Serif'] font-normal tracking-tight text-neutral-300 text-2xl mb-1">3. Engage</h3>
<p className="text-base text-neutral-500">Intelligent copy to stand out</p>
</div>
<div className="p-5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-transparent cursor-pointer transition-all">
<h3 className="font-['IBM_Plex_Serif'] font-normal tracking-tight text-neutral-300 text-2xl mb-1">4. Qualify</h3>
<p className="text-base text-neutral-500">Only serious homeowners get through</p>
</div>
<div className="p-5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-transparent cursor-pointer transition-all">
<h3 className="font-['IBM_Plex_Serif'] font-normal tracking-tight text-neutral-300 text-2xl mb-1">5. Book</h3>
<p className="text-base text-neutral-500">They pick a time that works for both of you</p>
</div>
</div>
<div className="flex justify-start">
<div className="w-[320px] h-[650px] bg-neutral-900 rounded-[3rem] border border-neutral-800 relative overflow-hidden flex flex-col">
<div className="absolute top-0 w-full h-6 bg-neutral-900 z-10 flex justify-center rounded-t-3xl">
<div className="w-1/3 h-4 bg-neutral-800 rounded-b-xl"></div>
</div>
<div className="p-6 pt-12 flex-1 flex flex-col bg-neutral-900/50">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">System View</div>
<h4 className="font-['IBM_Plex_Serif'] text-2xl font-normal text-neutral-100 tracking-tight mb-4">Target Service Area</h4>
<div className="flex-1 bg-neutral-800/30 rounded-lg overflow-hidden relative border border-neutral-800">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#525252 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neutral-500/20 rounded-full blur-2xl"></div>
<div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-neutral-600/20 rounded-full blur-2xl"></div>
<div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur rounded border border-neutral-800 p-3 flex flex-col gap-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-400"></div>
<span className="text-base text-neutral-300">Qualified Zones</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-base text-neutral-500">Out of Area</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-4xl border-neutral-800 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-16 md:mb-20">
<h2 className="font-['IBM_Plex_Serif'] text-5xl font-medium tracking-tight text-neutral-100 mb-4 md:text-4xl">Quick Math</h2>
<p className="text-lg md:text-xl text-neutral-400">Know your numbers before we talk</p>
</div>
<div className="w-full bg-neutral-900/30 border border-neutral-800 p-8 md:p-12 rounded-2xl flex flex-col gap-12">

<div className="flex flex-col">
<div className="flex justify-between items-end mb-6">
<label className="text-base md:text-lg font-medium text-neutral-200">Booked appointments per month</label>
</div>
<div className="relative w-full h-3 bg-neutral-800 rounded-full flex items-center mb-8">
<div className="absolute left-0 h-full bg-blue-500 rounded-full w-[25%] pointer-events-none transition-all duration-75" id="apt-fill" style={{width: '21.0526%'}}></div>
<div className="absolute left-[25%] w-6 h-6 md:w-8 md:h-8 bg-neutral-100 border-4 border-blue-500 rounded-full -translate-x-1/2 pointer-events-none shadow-lg transition-all duration-75" id="apt-thumb" style={{left: '21.0526%'}}></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="apt-slider" max="100" min="5" step="1" type="range" value="25"/>
</div>
<div className="text-center">
<span className="md:text-3xl text-4xl font-medium text-blue-50 tracking-tight font-['IBM_Plex_Serif']" id="apt-display">25 appointments</span>
</div>
</div>

<div className="flex flex-col">
<div className="flex justify-between items-end mb-6">
<label className="text-base md:text-lg font-medium text-neutral-200">Your average job ticket</label>
</div>
<div className="relative w-full h-3 bg-neutral-800 rounded-full flex items-center mb-8">
<div className="absolute left-0 h-full bg-blue-500 rounded-full w-[30%] pointer-events-none transition-all duration-75" id="tkt-fill" style={{width: '29.1667%'}}></div>
<div className="absolute left-[30%] w-6 h-6 md:w-8 md:h-8 bg-neutral-100 border-4 border-blue-500 rounded-full -translate-x-1/2 pointer-events-none shadow-lg transition-all duration-75" id="tkt-thumb" style={{left: '29.1667%'}}></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="tkt-slider" max="25000" min="1000" step="500" type="range" value="8000"/>
</div>
<div className="text-center">
<span className="md:text-3xl text-4xl font-medium text-blue-50 tracking-tight font-['IBM_Plex_Serif']" id="tkt-display">$8,000</span>
</div>
</div>
<hr className="border-neutral-800 my-4 w-full"/>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
<div className="border border-neutral-800 bg-neutral-900/50 rounded-xl p-8 flex flex-col items-center justify-center">
<div className="md:text-7xl text-6xl font-medium text-blue-50 tracking-tight font-['IBM_Plex_Serif'] mb-4" id="closed-jobs">10</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium text-center">Closed Jobs (40% Close Rate)</div>
</div>
<div className="flex flex-col bg-neutral-900/50 border-neutral-800 border rounded-xl pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="md:text-7xl text-6xl font-medium text-blue-50 tracking-tight font-['IBM_Plex_Serif'] mb-4" id="monthly-rev">$80,000</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium text-center">Monthly Revenue</div>
</div>
</div>
</div>
</section>


</main>


    </>
  );
}
