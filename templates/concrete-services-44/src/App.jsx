import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-lg uppercase flex items-center gap-2">
<span className="text-emerald-600">ALWAYS GREEN</span> CONCRETE
            </div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-500 tracking-wide">
<span>LICENSED &amp; INSURED</span>
<span>RENO &amp; NORTHERN NEVADA</span>
</div>
</div>
</nav>

<main className="pt-24 pb-20 overflow-hidden">

<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 flex flex-col gap-8">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/50 w-fit">
<iconify-icon className="text-emerald-600 text-sm" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium text-emerald-800 tracking-tight uppercase">Serving Reno, NV &amp; Surrounding Areas</span>
</div>

<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
                        Need a Concrete or Hardscape Project Done Right?
                    </h1>
<p className="text-lg sm:text-xl text-neutral-500 font-normal leading-relaxed max-w-2xl">
                        Cracked driveways, uneven patios, or outdated concrete can hurt your home’s value. <span className="text-emerald-700 font-medium">Always Green Concrete</span> delivers durable, professional results without the guesswork.
                    </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:verified-check-linear"></iconify-icon>
                        Licensed &amp; Insured
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:home-smile-linear"></iconify-icon>
                        Locally Operated
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:star-circle-linear"></iconify-icon>
                        5-Star Rated Service
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:wallet-money-linear"></iconify-icon>
                        Free On-Site Estimates
                    </div>
</div>
<div className="pt-4 lg:hidden">
<a className="inline-flex items-center justify-center w-full bg-neutral-900 text-white font-medium text-sm py-4 rounded-lg tracking-wide hover:bg-neutral-800 transition-colors" href="#estimate-form">
                        Get a Free Estimate
                    </a>
</div>
</div>

<div className="lg:col-span-5 relative" id="estimate-form">
<div className="absolute -inset-1 bg-gradient-to-b from-neutral-200 to-transparent rounded-2xl opacity-50 blur-sm"></div>
<div className="relative bg-white border border-neutral-200 shadow-sm rounded-xl p-6 sm:p-8">
<div className="mb-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Request Your Free Estimate</h3>
<p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                            Tell us about your project. A local specialist will contact you within 24 hours.
                        </p>
</div>
<form className="space-y-4">

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Full Name</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-neutral-400 text-lg" icon="solar:user-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-neutral-400" placeholder="John Doe" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Phone Number</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-neutral-400 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-neutral-400" placeholder="(775) 555-0123" type="tel"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-neutral-400 text-lg" icon="solar:letter-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-neutral-400" placeholder="john@example.com" type="email"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Project Type</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

<div>
<input className="hidden project-radio" id="proj-driveway" name="project" type="radio" value="driveway"/>
<label className="flex items-center justify-center py-2.5 px-3 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-600 bg-white cursor-pointer hover:bg-neutral-50 transition-all" htmlFor="proj-driveway">
                                        Concrete Driveway
                                    </label>
</div>

<div>
<input className="hidden project-radio" id="proj-patio" name="project" type="radio" value="patio"/>
<label className="flex items-center justify-center py-2.5 px-3 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-600 bg-white cursor-pointer hover:bg-neutral-50 transition-all" htmlFor="proj-patio">
                                        Patio or Walkway
                                    </label>
</div>

<div>
<input className="hidden project-radio" id="proj-hardscape" name="project" type="radio" value="hardscape"/>
<label className="flex items-center justify-center py-2.5 px-3 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-600 bg-white cursor-pointer hover:bg-neutral-50 transition-all" htmlFor="proj-hardscape">
                                        Hardscaping
                                    </label>
</div>

<div>
<input className="hidden project-radio" id="proj-foundation" name="project" type="radio" value="foundation"/>
<label className="flex items-center justify-center py-2.5 px-3 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-600 bg-white cursor-pointer hover:bg-neutral-50 transition-all" htmlFor="proj-foundation">
                                        Foundation/Slab
                                    </label>
</div>
</div>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-3 rounded-lg shadow-sm shadow-emerald-200 transition-all mt-4 flex items-center justify-center gap-2" type="button">
<span>Request My Free Estimate</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mt-3">
<iconify-icon className="text-xs" icon="solar:lock-linear"></iconify-icon>
<p className="text-[10px] uppercase tracking-wide">No spam. Just honest pricing.</p>
</div>
</form>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-24 lg:mt-32">
<div className="mb-12">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">
                    Concrete Problems Don’t Fix Themselves — <span className="text-emerald-600">We Do.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-white border border-red-100 rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-red-500/20"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900">The Problem</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
                            Cracked or sinking concrete due to soil movement.
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
                            Uneven patios creating safety hazards.
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
                            Aging concrete hurting curb appeal.
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
                            Contractors who overpromise and underdeliver.
                        </li>
</ul>
</div>

<div className="bg-emerald-50/30 border border-emerald-100 rounded-xl p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/30"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900">Our Solution</h3>
</div>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                        Always Green Concrete provides reliable, long-lasting solutions designed specifically for the Northern Nevada climate. We focus on quality craftsmanship and proper prep work.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-2">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-800 bg-white border border-emerald-100 px-3 py-2 rounded-lg">
<iconify-icon className="text-emerald-500" icon="solar:layers-minimalistic-linear"></iconify-icon>
                            Concrete Driveways
                         </div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-800 bg-white border border-emerald-100 px-3 py-2 rounded-lg">
<iconify-icon className="text-emerald-500" icon="solar:sofa-linear"></iconify-icon>
                            Patios &amp; Walkways
                         </div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-800 bg-white border border-emerald-100 px-3 py-2 rounded-lg">
<iconify-icon className="text-emerald-500" icon="solar:city-linear"></iconify-icon>
                            Sidewalks &amp; Slabs
                         </div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-800 bg-white border border-emerald-100 px-3 py-2 rounded-lg">
<iconify-icon className="text-emerald-500" icon="solar:leaf-linear"></iconify-icon>
                            Custom Hardscaping
                         </div>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-24">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900">Trusted by Local Homeowners</h2>
<p className="text-sm text-neutral-500 mt-2">Dependable service across Reno &amp; Washoe County.</p>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium text-neutral-800 ml-2">5.0 Rating</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
<div className="flex gap-1 text-yellow-500 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">
                        "Professional, reliable, and the quality of work exceeded expectations. My driveway looks brand new."
                    </p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-800">M</div>
<span className="text-xs font-medium text-neutral-900">Mark S.</span>
<span className="text-[10px] text-neutral-400 ml-auto">Reno, NV</span>
</div>
</div>

<div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
<div className="flex gap-1 text-yellow-500 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">
                        "They fixed the drainage issues on our patio and poured a beautiful new slab. Highly recommend."
                    </p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-800">S</div>
<span className="text-xs font-medium text-neutral-900">Sarah J.</span>
<span className="text-[10px] text-neutral-400 ml-auto">Sparks, NV</span>
</div>
</div>

<div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
<div className="flex gap-1 text-yellow-500 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">
                        "Great communication from start to finish. The crew was respectful and left the site clean."
                    </p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-[10px] font-bold text-orange-800">D</div>
<span className="text-xs font-medium text-neutral-900">David L.</span>
<span className="text-[10px] text-neutral-400 ml-auto">Sun Valley, NV</span>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto px-6 mt-24 lg:mt-32 text-center">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">
                Ready to Start Your Project?
            </h2>
<p className="text-neutral-500 leading-relaxed mb-8">
                If you’re located in Reno, Sparks, or Washoe County, now is the perfect time. Get a free estimate with no obligation and no pressure.
            </p>
<a className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200" href="#estimate-form">
                Get My Free Estimate
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</main>

<footer className="bg-white border-t border-neutral-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="font-semibold tracking-tighter text-sm uppercase flex items-center gap-2 mb-2">
<span className="text-emerald-600">ALWAYS GREEN</span> CONCRETE
                </div>
<p className="text-xs text-neutral-400">Serving Reno, Sparks, North Valleys &amp; Washoe County.</p>
</div>
<div className="flex flex-col sm:flex-row gap-8 text-xs text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:letter-linear"></iconify-icon>
<span>joseaviles80@yahoo.com</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:phone-linear"></iconify-icon>
<span>(775) 842-8155</span>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-neutral-100">
<p className="text-[10px] text-neutral-400 text-center uppercase tracking-wider">
                © 2026 Always Green Concrete. All Rights Reserved.
            </p>
</div>
</footer>

    </>
  );
}
