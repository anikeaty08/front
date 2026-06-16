import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple logic for the ROI calculator
        const slider = document.getElementById('spendSlider');
        const output = document.getElementById('spendValue');
        const revenue = document.getElementById('revenueOutput');

        function formatCurrency(num) {
            return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        function calculate() {
            const spend = parseInt(slider.value);
            output.textContent = formatCurrency(spend);
            
            // Logic: Spend * 60% (Lost data) * 3 (ROAS)
            const recovered = Math.round((spend * 0.6) * 3);
            revenue.textContent = formatCurrency(recovered);
        }

        slider.addEventListener('input', calculate);
        // Initialize
        calculate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 bg-neutral-950/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-violet-500 iconify--lucide" data-icon="lucide:radar" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"></path><path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59l5.66-5.66"></path></g></svg>
<span className="font-medium tracking-tight text-white text-lg">WeTracked</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors" href="#">Start Free Trial</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-48 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                New: Server-side tracking API v2.0
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Losing 60% of Ad Spend?<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Get Every Conversion Back.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The only solution pushing 100% accurate data to your ads manager. Raise ROAS by 50% in 1 week without complex setups.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                    Start 14-Day Free Trial
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Book a Demo
                </button>
</div>
</div>

<div className="mt-24 border-t border-white/5 pt-10">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by 7,000+ Merchants</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 px-6">

<div className="flex items-center gap-2 text-xl font-bold font-serif">NYX</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-widest">AMIRI</div>
<div className="flex items-center gap-2 text-xl font-semibold italic">Polarwise</div>
<div className="flex items-center gap-2 text-xl font-bold">FEASTABLES</div>
<div className="flex items-center gap-2 text-xl font-bold font-mono">OBEY</div>
</div>
</div>
</section>

<section className="bg-neutral-900/30 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mr-auto ml-auto space-y-24">

<div className="flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 space-y-6">
<div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:target" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Go from 40% to <span className="text-violet-400">100% Accuracy</span>.</h2>
<p className="text-neutral-400 leading-relaxed text-lg">iOS14 killed your pixel. WeTracked bypasses ad blockers and browser restrictions using server-side API matching to recover lost sales data instantly.</p>
<ul className="space-y-3 text-neutral-300">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-violet-500 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Matches email, IP, and ClickID
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-violet-500 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> 1st party data ownership
                        </li>
</ul>
</div>
<div className="md:w-1/2 w-full">
<div className="glass-card rounded-2xl p-8 relative overflow-hidden">
<h4 className="text-sm font-medium text-neutral-400 mb-6">Tracking Accuracy Comparison</h4>
<div className="relative w-full h-64 flex flex-col justify-end select-none group/chart">
<style>
        @keyframes chart-grow-up {
            from { transform: scaleY(0); opacity: 0; }
            to { transform: scaleY(1); opacity: 1; }
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(139,92,246,0.2); border-color: rgba(139,92,246,0.4); }
            50% { box-shadow: 0 0 50px rgba(139,92,246,0.5); border-color: rgba(139,92,246,0.6); }
        }
    </style>

<div className="absolute inset-x-0 bottom-8 top-10 flex flex-col justify-between pointer-events-none z-0 px-2">
<div className="w-full border-t border-dashed border-neutral-800/60"></div>
<div className="w-full border-t border-dashed border-neutral-800/60"></div>
<div className="w-full border-t border-dashed border-neutral-800/60"></div>
<div className="w-full border-t border-dashed border-neutral-800/60"></div>
<div className="w-full border-b border-neutral-700"></div>
</div>

<div className="relative z-10 w-full h-full pt-10 pb-8 px-6 flex items-end gap-12 justify-center">

<div className="w-1/2 h-full flex flex-col justify-end relative group">

<div className="absolute w-full text-center -top-8 mb-3 opacity-0" style={{bottom: '40%', animation: 'fade-in-up 0.6s ease-out 0.8s forwards'}}>
<span className="inline-flex items-center justify-center px-2.5 py-1 bg-neutral-900/90 border border-neutral-800 rounded text-xs font-mono text-neutral-400 font-medium shadow-lg backdrop-blur-sm">40%</span>
</div>

<div className="w-full bg-neutral-800 rounded-t-md relative overflow-hidden group-hover:bg-neutral-750 transition-colors duration-500 origin-bottom border-x border-t border-neutral-700/50" style={{height: '40%', transform: 'scaleY(0)', animation: 'chart-grow-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards'}}>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #000 5px, #000 10px)'}}></div>
<div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>

<div className="absolute -bottom-8 left-0 right-0 text-center opacity-0" style={{animation: 'fade-in-up 0.6s ease-out 0.3s forwards'}}>
<span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">Native Pixel</span>
</div>
</div>

<div className="w-1/2 h-full flex flex-col justify-end relative group">

<div className="absolute w-full text-center -top-10 mb-3 opacity-0" style={{bottom: '100%', animation: 'fade-in-up 0.6s ease-out 1s forwards'}}>
<span className="inline-flex items-center justify-center px-3 py-1.5 bg-violet-500/10 border border-violet-500/40 rounded-lg text-sm font-mono text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md">100%</span>
</div>

<div className="w-full bg-gradient-to-t from-violet-900 via-violet-600 to-violet-500 rounded-t-md relative origin-bottom border-x border-t border-violet-400/30 transition-all duration-500" style={{height: '100%', transform: 'scaleY(0)', animation: 'chart-grow-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards, pulse-glow 3s infinite 2s'}}>

<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-px bg-white/70 shadow-[0_0_15px_white]"></div>
<div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-violet-950/80 to-transparent"></div>
</div>

<div className="absolute -bottom-8 left-0 right-0 text-center opacity-0" style={{animation: 'fade-in-up 0.6s ease-out 0.5s forwards'}}>
<div className="flex items-center justify-center gap-1.5">
<div className="rounded-full bg-violet-500/20 p-0.5">
<svg className="lucide lucide-check text-violet-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-[10px] font-bold text-violet-300 uppercase tracking-widest">WeTracked</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-16">
<div className="md:w-1/2 space-y-6">
<div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Know exactly which ads to scale.</h2>
<p className="text-neutral-400 leading-relaxed text-lg">Stop flying blind. See the true ROAS of every campaign, ad set, and creative. Cut the losers and double down on winners with confidence.</p>
</div>
<div className="md:w-1/2 w-full">
<div className="glass-card rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">

<div className="border-b border-neutral-800 bg-neutral-900/50 p-4 flex items-center justify-between">
<div className="text-xs font-medium text-neutral-400">Campaign Performance</div>
<div className="flex gap-2">
<div className="h-2 w-2 rounded-full bg-red-500"></div>
<div className="h-2 w-2 rounded-full bg-yellow-500"></div>
<div className="h-2 w-2 rounded-full bg-green-500"></div>
</div>
</div>

<div className="p-4">
<table className="w-full text-left text-sm">
<thead className="text-xs text-neutral-500 uppercase">
<tr className="">
<th className="pb-4 font-medium">Ad Name</th>
<th className="pb-4 font-medium text-right">Revenue</th>
<th className="pb-4 font-medium text-right">ROAS</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800 text-neutral-300">
<tr className="">
<td className="py-3 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            Prospecting_Vid_01
                                        </td>
<td className="py-3 text-right font-mono">$4,230</td>
<td className="py-3 text-right text-green-400 font-mono font-bold">4.2x</td>
</tr>
<tr className="">
<td className="py-3 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            Retargeting_Img_03
                                        </td>
<td className="py-3 text-right font-mono">$1,850</td>
<td className="py-3 text-right text-green-400 font-mono font-bold">3.8x</td>
</tr>
<tr className="opacity-50">
<td className="py-3 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                                            Broad_Angle_Test
                                        </td>
<td className="py-3 text-right font-mono">$120</td>
<td className="py-3 text-right text-red-400 font-mono">0.6x</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 space-y-6">
<div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">No Coding Required.</h2>
<p className="text-neutral-400 leading-relaxed text-lg">One-click integration with your store. We handle the server configuration, DNS settings, and API handshakes automatically.</p>
</div>
<div className="md:w-1/2 w-full flex justify-center">
<div className="relative">

<div className="relative z-10 bg-neutral-900 border border-neutral-700 h-24 w-24 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)]">
<svg aria-hidden="true" className="iconify text-violet-500 iconify--lucide" data-icon="lucide:radar" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"></path><path className="" d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"></path><circle cx="12" cy="12" r="2"></circle><path className="" d="m13.41 10.59l5.66-5.66"></path></g></svg>
<div className="absolute -bottom-8 text-xs font-medium text-white">WeTracked</div>
</div>

<div className="-translate-x-1/2 -translate-y-1/2 border-dashed flex bg-neutral-900/30 w-[280px] h-[280px] -z-0 border-neutral-700/50 border rounded-full absolute top-1/2 left-1/2 shadow-[0_0_40px_rgba(139,92,246,0.05)] backdrop-blur-sm items-center justify-center">
<div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-20 pointer-events-none"></div>
<div className="w-[200px] h-[200px] rounded-full border border-neutral-800/80 opacity-60"></div>
<div className="absolute w-[140px] h-[140px] rounded-full border border-neutral-800/40 opacity-40"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
<svg aria-hidden="true" className="iconify text-white iconify--simple-icons" data-icon="simple-icons:shopify" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136s-1.275-1.274-1.439-1.411a.4.4 0 0 0-.121-.074l-.914 21.104zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141c0 1.232 3.24 1.715 3.24 4.629c0 2.295-1.44 3.76-3.406 3.76c-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066a.944.944 0 0 0 .975-.932c0-1.619-2.654-1.694-2.654-4.359c-.034-2.237 1.571-4.416 4.827-4.416c1.257 0 1.875.361 1.875.361l-.945 2.715zM11.17.83c.136 0 .271.038.405.135c-.984.465-2.064 1.639-2.508 3.992a63 63 0 0 1-1.889.578C7.697 3.75 8.951.84 11.17.84zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736c.466-1.777 1.333-2.645 2.085-2.971c.193.501.309 1.176.309 2.1m.539-2.234c.694.074 1.141.867 1.429 1.755c-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0C8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674c-.675.213-.694.232-.772.87c-.075.462-1.83 14.063-1.83 14.063L15.009 24z" fill="currentColor"></path></svg>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
<svg aria-hidden="true" className="iconify text-white iconify--simple-icons" data-icon="simple-icons:woocommerce" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M.754 9.58a.754.754 0 0 0-.754.758v2.525c0 .42.339.758.758.758h3.135l1.431.799l-.326-.799h2.373a.757.757 0 0 0 .758-.758v-2.525a.757.757 0 0 0-.758-.758zm2.709.445h.03a.3.3 0 0 1 .179.067a.26.26 0 0 1 .103.19a.3.3 0 0 1-.033.16q-.194.36-.322 1.199q-.124.813-.094 1.267a.4.4 0 0 1-.039.219a.21.21 0 0 1-.176.12c-.086.006-.177-.034-.263-.124q-.465-.474-.735-1.416q-.324.638-.478.957q-.294.563-.502.578q-.134.01-.233-.228q-.254-.654-.548-2.524a.3.3 0 0 1 .054-.222c.047-.064.116-.095.21-.102q.253-.02.288.238q.156 1.043.336 1.766l.727-1.387q.1-.189.25-.199q.219-.015.273.28q.125.66.315 1.136q.13-1.266.44-1.828a.26.26 0 0 1 .218-.147m1.293.36a1 1 0 0 1 .18.02q.35.074.53.386c.107.18.161.395.161.654q0 .513-.26.94q-.299.499-.781.5a1 1 0 0 1-.18-.022a.76.76 0 0 1-.531-.384a1.3 1.3 0 0 1-.158-.659q0-.514.258-.937q.303-.499.78-.498zm2.084 0a1 1 0 0 1 .18.02q.353.074.53.386c.107.18.16.395.16.654q0 .513-.259.94q-.299.499-.781.5a1 1 0 0 1-.18-.022a.76.76 0 0 1-.531-.384a1.3 1.3 0 0 1-.16-.659q0-.514.26-.937q.303-.499.78-.498zm4.437.047q-.459 0-.718.304q-.258.306-.256.856q0 .592.256.906q.255.316.744.316q.473-.001.728-.316q.256-.315.256-.883c0-.568-.087-.673-.26-.879q-.262-.303-.75-.304m-1.466.002a1.13 1.13 0 0 0-.84.326q-.333.33-.332.838q-.001.545.328.88t.861.336q.156.001.346-.052v-.54a1.1 1.1 0 0 1-.303.051a.55.55 0 0 1-.422-.177a.7.7 0 0 1-.16-.48q0-.287.156-.468a.5.5 0 0 1 .397-.181q.153-.001.332.049v-.537a1.4 1.4 0 0 0-.363-.045m12.414 0a1.14 1.14 0 0 0-.84.326q-.333.33-.332.838q-.001.545.328.88q.33.335.861.336q.156.001.346-.052v-.54a1.1 1.1 0 0 1-.303.051a.55.55 0 0 1-.422-.177a.7.7 0 0 1-.16-.48q0-.287.156-.468a.5.5 0 0 1 .397-.181q.153-.001.332.049v-.537a1.4 1.4 0 0 0-.363-.045m-9.598.06l-.29 2.264h.579l.156-1.559l.395 1.559h.412l.379-1.555l.164 1.555h.603l-.304-2.264h-.791l-.12.508q-.046.195-.087.4l-.067.352a30 30 0 0 0-.258-1.26zm2.768 0l-.29 2.264h.579l.156-1.559l.396 1.559h.412l.375-1.555l.165 1.555h.603l-.305-2.264h-.789l-.119.508q-.046.195-.086.4l-.066.352a30 30 0 0 0-.26-1.26zm3.988 0v2.264h.611v-1.031h.012l.494 1.03h.645l-.489-1.019a.61.61 0 0 0 .37-.552a.6.6 0 0 0-.25-.506q-.25-.185-.68-.186zm3.377 0v2.264H24v-.483h-.63v-.414h.54v-.468h-.54v-.416h.626v-.483zm-4.793.004v2.264h1.24v-.483h-.627v-.416h.541v-.468h-.54v-.415h.622v-.482zm2.025.432q.219.003.313.072q.093.068.091.227q0 .234-.404.24zm-15.22.011q-.156-.001-.301.211a1.08 1.08 0 0 0-.2.639c0 .096.02.2.06.303c.049.13.117.198.196.215q.125.023.27-.106q.183-.164.252-.492q.023-.116.023-.246q0-.147-.06-.303c-.05-.13-.116-.198-.196-.215l-.045-.006zm2.083 0q-.155-.001-.3.211a1.08 1.08 0 0 0-.2.639c0 .096.02.2.06.303c.049.13.117.198.196.215q.125.023.27-.106q.183-.164.252-.492q.021-.116.023-.246q0-.147-.06-.303c-.05-.13-.116-.198-.196-.215zm4.428.006c.233 0 .354.218.354.66c-.004.273-.038.46-.098.553a.29.29 0 0 1-.262.139a.27.27 0 0 1-.242-.139q-.084-.14-.084-.562c0-.436.11-.65.332-.65Z" fill="currentColor"></path></svg>
</div>
<div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
<svg aria-hidden="true" className="iconify text-blue-500 iconify--simple-icons" data-icon="simple-icons:facebook" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" fill="currentColor"></path></svg>
</div>
<div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
<svg aria-hidden="true" className="iconify text-pink-500 iconify--simple-icons" data-icon="simple-icons:tiktok" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07" fill="currentColor"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white mb-4">How much are you leaving on the table?</h2>
<p className="text-neutral-400">Spoiler alert: You are losing more than you think.</p>
</div>
<div className="space-y-12">
<div className="">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-neutral-300 uppercase tracking-wide">Monthly Ad Spend</label>
<span className="text-xl font-mono text-white" id="spendValue">$50,000</span>
</div>
<input className="" id="spendSlider" max="100000" min="1000" step="1000" type="range" value="50000"/>
<div className="flex justify-between text-xs text-neutral-600 mt-2 font-mono">
<span>$1k</span>
<span>$100k</span>
</div>
</div>
<div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-violet-500/5"></div>
<p className="text-sm text-violet-300 font-medium mb-2 relative z-10">Projected Recovered Revenue / Month</p>
<h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight relative z-10" id="revenueOutput">$90,000</h3>
<p className="text-xs text-neutral-500 mt-4 relative z-10">*Based on average 3.0 ROAS on 60% missed data.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/20">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Rated 4.9/5 from 1,500+ Reviews</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl hover:border-neutral-600 transition-colors">
<p className="text-neutral-300 mb-6 leading-relaxed">"We were about to pause our Facebook ads completely. WeTracked showed us that our 'losing' campaigns were actually generating 3x ROAS. Scaled 20% in 2 weeks."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-medium">JD</div>
<div>
<div className="text-white text-sm font-medium">Jason Derulo</div>
<div className="text-neutral-500 text-xs">Founder, Wodify</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:border-neutral-600 transition-colors">
<p className="text-neutral-300 mb-6 leading-relaxed">"The setup was ridiculously easy. I'm not technical at all, but I had accurate data flowing into my Ads Manager in 5 minutes. Game changer."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-medium">MK</div>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-neutral-500 text-xs">CMO, GlowUp</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:border-neutral-600 transition-colors">
<p className="text-neutral-300 mb-6 leading-relaxed">"Attribution was a nightmare post-iOS14. WeTracked fixed it instantly. We recovered about $15k in lost revenue attribution in the first month alone."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-medium">TL</div>
<div>
<div className="text-white text-sm font-medium">Tom L.</div>
<div className="text-neutral-500 text-xs">Head of Growth, Apex</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:border-neutral-600 transition-colors">
<p className="text-neutral-300 mb-6 leading-relaxed">"Honestly, I thought it was snake oil. But the numbers don't lie. My pixel matches are up 95%. This software pays for itself in a day."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-medium">BR</div>
<div>
<div className="text-white text-sm font-medium">Brian Rose</div>
<div className="text-neutral-500 text-xs">Ecom Owner</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:border-neutral-600 transition-colors">
<p className="text-neutral-300 mb-6 leading-relaxed">"Crucial for scaling on TikTok. The native tracking is terrible, but with WeTracked we actually know what creatives are driving sales."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-medium">AL</div>
<div>
<div className="text-white text-sm font-medium">Annie Le</div>
<div className="text-neutral-500 text-xs">Media Buyer</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:border-neutral-600 transition-colors">
<p className="text-neutral-300 mb-6 leading-relaxed">"Support team is incredible. Helped me debug a conflict with another app and got everything running smooth. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-medium">MP</div>
<div>
<div className="text-white text-sm font-medium">Marcus P.</div>
<div className="text-neutral-500 text-xs">Director, Vexil</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-white">Is WeTracked GDPR compliant?</span>
<svg aria-hidden="true" className="iconify transition-transform duration-300 group-open:rotate-180 text-neutral-400 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                    Yes, we are fully GDPR and CCPA compliant. We process data anonymously and act as a data processor for your business. We do not sell or share your customer data with third parties.
                </div>
</details>

<details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-white">Does it work with iOS14+?</span>
<svg aria-hidden="true" className="iconify transition-transform duration-300 group-open:rotate-180 text-neutral-400 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                    Absolutely. WeTracked was built specifically to solve the tracking issues introduced by iOS14. By using server-side tracking (CAPI), we bypass browser-based restrictions to deliver accurate data.
                </div>
</details>

<details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-white">Do I need a developer to install this?</span>
<svg aria-hidden="true" className="iconify transition-transform duration-300 group-open:rotate-180 text-neutral-400 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                    No coding is required. If you are on Shopify or WooCommerce, our one-click installer handles everything. For custom sites, we provide a simple copy-paste script.
                </div>
</details>

<details className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-white">Will this slow down my website?</span>
<svg aria-hidden="true" className="iconify transition-transform duration-300 group-open:rotate-180 text-neutral-400 iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                    Not at all. Our script loads asynchronously and weighs less than 5kb. It has zero impact on your page load speed or Core Web Vitals.
                </div>
</details>
</div>
</section>

<section className="border-t border-neutral-800 bg-black pt-20 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Stop burning money on bad data.</h2>
<p className="text-lg text-neutral-400">Set up in 5 minutes. No coding required.</p>
<div className="flex flex-col items-center gap-4">
<button className="px-10 py-5 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    Start Free Trial
                </button>
<span className="text-xs text-neutral-600">No credit card required for demo.</span>
</div>
<div className="pt-12 flex justify-center gap-8 text-neutral-600">
<svg aria-hidden="true" className="iconify hover:text-white cursor-pointer transition-colors iconify--simple-icons" data-icon="simple-icons:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify hover:text-white cursor-pointer transition-colors iconify--simple-icons" data-icon="simple-icons:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify hover:text-white cursor-pointer transition-colors iconify--simple-icons" data-icon="simple-icons:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
</div>
<p className="text-xs text-neutral-700">© 2024 WeTracked Inc. All rights reserved.</p>
</div>
</section>


    </>
  );
}
