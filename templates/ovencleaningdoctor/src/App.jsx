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
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
purple: '#7c3aed',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'bounce-slow': 'bounce 3s infinite',
}
}
}
}
// Chatbot Logic
document.addEventListener('alpine:init', () => {
Alpine.data('chatWidget', () => ({
open: false,
input: '',
loading: false,
messages: [
{ id: 1, role: 'bot', text: 'Hello! 👋 I can help you with quotes, availability, or questions. What can I do for you today?' }
],
toggle() {
this.open = !this.open;
if (this.open) {
this.$nextTick(() => this.scrollToBottom());
}
},
quickReply(text) {
this.input = text;
this.sendMessage();
},
sendMessage() {
if (this.input.trim() === '') return;
// Add User Message
this.messages.push({
id: Date.now(),
role: 'user',
text: this.input
});
const userText = this.input.toLowerCase();
this.input = '';
this.loading = true;
this.scrollToBottom();
// Simulate AI processing delay
setTimeout(() => {
let responseText = '';
// Simple Keyword Matching Logic
if (userText.includes('price') || userText.includes('cost') || userText.includes('much')) {
responseText = 'Our prices are transparent: Single Ovens from £70, Double Ovens from £85, and Ranges from £150. No hidden fees!';
} else if (userText.includes('book') || userText.includes('appointment')) {
responseText = 'You can book by calling us at 07931 071898 or filling out the form in the "Get a Free Quote" section above!';
} else if (userText.includes('area') || userText.includes('cover') || userText.includes('location')) {
responseText = 'We cover York, Malton, Selby, Easingwold, Harrogate, Knaresborough and surrounding villages.';
} else if (userText.includes('pet') || userText.includes('safe') || userText.includes('chemical')) {
responseText = 'Yes! We use 100% non-caustic, eco-friendly solutions. It is completely safe for pets and children immediately after cleaning.';
} else if (userText.includes('time') || userText.includes('long')) {
responseText = 'A single oven takes about 1.5-2 hours. A double oven takes about 2-2.5 hours. We ensure a deep, thorough clean.';
} else {
responseText = "I'm not sure about that specific detail. Could you please call us at 07931 071898 or email clean@ovencleaningdoctor.co.uk?";
}
// Add Bot Response
this.messages.push({
id: Date.now() + 1,
role: 'bot',
text: responseText
});
this.loading = false;
this.$nextTick(() => this.scrollToBottom());
}, 1200); // 1.2s delay for realism
},
scrollToBottom() {
const container = this.$refs.chatContainer;
container.scrollTop = container.scrollHeight;
}
}))
})

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-40 transition-all duration-300 border-b border-slate-200/60 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-purple flex items-center justify-center text-white">
<iconify-icon icon="solar:sparkle-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-medium tracking-tight text-lg">
                        OVEN<span className="font-light text-slate-500">DOCTOR</span>
</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#process">Our Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
<a className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-lg shadow-slate-900/20" href="#contact">
                        Book Now
                    </a>
</div>

<div className="flex items-center md:hidden">
<button @click="mobileMenuOpen = !mobileMenuOpen" className="text-slate-500 hover:text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div @click.away="mobileMenuOpen = false" className="md:hidden bg-white border-b border-slate-100 absolute w-full" x-show="mobileMenuOpen" x-transition="">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md" href="#services">Services</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md" href="#pricing">Pricing</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md" href="#reviews">Reviews</a>
<a className="block px-3 py-3 text-base font-medium text-brand-600 bg-brand-50 rounded-md mt-4" href="#contact">Book an Appointment</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob"></div>
<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob animation-delay-2000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Rated #1 Oven Cleaner in York
                    </div>
<h1 className="text-4xl lg:text-6xl font-medium text-slate-900 tracking-tighter mb-6 leading-[1.1]">
                        Bring your oven back to a <span className="gradient-text">showroom finish.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                        We are the Oven Cleaning Doctor. Family-run, non-caustic, and deep cleaning experts serving York, Malton, Selby &amp; surrounding areas.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<div className="flex items-center gap-4 text-sm font-medium text-slate-600">
<div className="flex items-center gap-1">
<iconify-icon className="text-brand-500" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>Fully Insured</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-brand-500" icon="solar:leaf-linear" width="18"></iconify-icon>
<span>Eco Friendly</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-brand-500" icon="solar:heart-linear" width="18"></iconify-icon>
<span>Autism Friendly</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-purple"></div>
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">Get a Free Quote</h3>
<p className="text-sm text-slate-500 mb-6">Prices start from just £70. No hidden fees.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); window.location.href='#contact';">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Postcode</label>
<div className="relative">
<input className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400" placeholder="YO30..." type="text"/>
<iconify-icon className="absolute left-3 top-3 text-slate-400 pointer-events-none" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Oven Type</label>
<div className="relative">
<select className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 appearance-none cursor-pointer">
<option>Single</option>
<option>Double</option>
<option>Range</option>
<option>Hob/Hood</option>
</select>
<iconify-icon className="absolute left-3 top-3 text-slate-400 pointer-events-none" icon="solar:fire-linear"></iconify-icon>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone Number</label>
<div className="relative">
<input className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400" placeholder="07700 900000" type="tel"/>
<iconify-icon className="absolute left-3 top-3 text-slate-400 pointer-events-none" icon="solar:phone-linear"></iconify-icon>
</div>
</div>
<button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-lg" type="submit">
<span>Check Availability</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-400 mt-2">
                                By continuing you agree to our <a className="underline hover:text-slate-600" href="#">Terms</a>.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Comprehensive Cleaning Services</h2>
<p className="text-slate-500 max-w-2xl mx-auto">We disassemble, deep clean, and polish every component of your cooking appliances using heated dip tanks and eco-safe solutions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Single Ovens</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Complete clean including racks, fan, and back plate. Standard 60cm wide.</p>
<span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded">From £70</span>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Double Ovens</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Main oven and top grill/oven deep cleaned. Restores efficiency.</p>
<span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded">From £85</span>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-colors">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Range Cookers</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Specialist cleaning for AGA, Rayburn, and large range cookers.</p>
<span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded">From £150</span>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-colors">
<iconify-icon icon="solar:wind-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Hobs &amp; Extractors</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Degreasing of hoods, filter replacement, and gas/ceramic hob polish.</p>
<span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">Add-on Service</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 gap-16 items-center">
<div className="mb-10 lg:mb-0 relative">

<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-medium">Before</span>
</div>

</div>
<div className="bg-brand-100 rounded-2xl h-64 w-full flex items-center justify-center relative overflow-hidden group mt-8">
<div className="absolute inset-0 bg-brand-500/10 flex items-center justify-center">
<span className="text-brand-700 font-medium">After</span>
</div>
<iconify-icon className="text-brand-500 text-6xl animate-pulse" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">Why York Chooses The <br/>Oven Cleaning Doctor</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Family Run &amp; Independent</h4>
<p className="text-slate-500 text-sm mt-1 leading-relaxed">Established in 2016. We are not a franchise. We care about our local reputation in York, Malton, and Selby.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Non-Acidic &amp; Eco Safe</h4>
<p className="text-slate-500 text-sm mt-1 leading-relaxed">Safe for children and pets immediately after cleaning. No harsh fumes, just a sparkling clean kitchen.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Autism Friendly</h4>
<p className="text-slate-500 text-sm mt-1 leading-relaxed">We understand sensory needs. We are happy to take noisy tools outside and work around your requirements.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-500">Pay by Cash, Bank Transfer or Card on the day.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-3xl border border-slate-100 bg-slate-50 text-center">
<h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Single Oven</h3>
<div className="flex items-baseline justify-center gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">£70</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 text-left">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Racks &amp; Trays included
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Door glass disassembled
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Fan removed &amp; cleaned
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-medium hover:border-brand-500 hover:text-brand-600 transition-colors" href="#contact">Book Single</a>
</div>

<div className="p-8 rounded-3xl border-2 border-brand-500 bg-white text-center shadow-2xl shadow-brand-900/10 relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</div>
<h3 className="text-brand-600 text-sm font-medium uppercase tracking-wider mb-2">Double Oven</h3>
<div className="flex items-baseline justify-center gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">£85</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 text-left">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Main Oven + Grill/Top Oven
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            All Racks &amp; Trays Deep Cleaned
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Bulb Replacement Available
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30" href="#contact">Book Double</a>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-slate-50 text-center">
<h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Range / Aga</h3>
<div className="flex items-baseline justify-center gap-1 mb-6">
<span className="text-xl text-slate-400 font-normal">from</span>
<span className="text-4xl font-semibold text-slate-900">£150</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 text-left">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Full strip down
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Multiple doors &amp; compartments
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Hob surface polish
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-medium hover:border-brand-500 hover:text-brand-600 transition-colors" href="#contact">Book Range</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4" x-data="{ active: 1 }">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button @click="active = (active === 1 ? null : 1)" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-medium text-slate-900">How long does an oven clean take?</span>
<iconify-icon :className="active === 1 ? 'rotate-180' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div x-collapse="" x-show="active === 1">
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                            A standard single oven usually takes around 1.5 to 2 hours. A double oven takes roughly 2 to 2.5 hours, and ranges can take 3-4 hours depending on the size and condition.
                        </div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button @click="active = (active === 2 ? null : 2)" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-medium text-slate-900">Are your products safe for pets and children?</span>
<iconify-icon :className="active === 2 ? 'rotate-180' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div x-collapse="" x-show="active === 2">
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                            Absolutely. We use 100% non-caustic, eco-friendly solutions. There are no nasty fumes, and your oven is safe to use immediately after we finish.
                        </div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button @click="active = (active === 3 ? null : 3)" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-medium text-slate-900">Do you clean the glass doors?</span>
<iconify-icon :className="active === 3 ? 'rotate-180' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div x-collapse="" x-show="active === 3">
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                            Yes, we remove the doors and separate the glass panels (where possible/safe) to clean the grease that builds up between them, giving you a crystal clear view.
                        </div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button @click="active = (active === 4 ? null : 4)" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-medium text-slate-900">What areas do you cover?</span>
<iconify-icon :className="active === 4 ? 'rotate-180' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div x-collapse="" x-show="active === 4">
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                            We are based in York and cover Malton, Easingwold, Selby, Tadcaster, Harrogate, Knaresborough and everything in between.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-brand-500" icon="solar:sparkle-bold" width="24"></iconify-icon>
<span className="text-white font-medium tracking-tight text-xl">OVEN DOCTOR</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        Professional, reliable, and friendly oven cleaning services in North Yorkshire. Bringing the sparkle back to your kitchen.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact Us</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:07931071898">07931 071898</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:clean@ovencleaningdoctor.co.uk">clean@ovencleaningdoctor.co.uk</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon>
<span>York &amp; Surrounding Areas</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Service Areas</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>York</li>
<li>Malton</li>
<li>Selby</li>
<li>Easingwold</li>
<li>Harrogate</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Book Online</h4>
<p className="text-xs text-slate-400 mb-4">Ready to book? Fill out our quick form or chat with our assistant.</p>
<button className="w-full py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-500 transition-colors">Request Quote</button>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2024 Oven Cleaning Doctor. All rights reserved.</p>
<div className="flex gap-4 text-xs text-slate-500">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" x-cloak="" x-data="chatWidget">

<div className="bg-white w-[340px] h-[480px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4" x-show="open" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 scale-100" x-transition:enter-start="opacity-0 translate-y-4 scale-95" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-4 scale-95" x-transition:leave-start="opacity-100 translate-y-0 scale-100">

<div className="bg-slate-900 p-4 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:user-circle-bold" width="24"></iconify-icon>
</div>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Oven Doctor Assistant</h4>
<p className="text-xs text-slate-400">Online Now</p>
</div>
</div>
<button @click="toggle()" className="text-slate-400 hover:text-white">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4" x-ref="chatContainer">
<template :key="msg.id" x-htmlFor="msg in messages">
<div :className="msg.role === 'user' ? 'flex-row-reverse' : ''" className="flex items-start gap-2">
<div className="w-6 h-6 rounded-full bg-brand-500 flex-shrink-0 flex items-center justify-center text-white text-[10px]" x-show="msg.role === 'bot'">OD</div>
<div :className="msg.role === 'user' ? 'bg-brand-500 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-600 rounded-tl-none'" className="p-3 rounded-2xl text-sm max-w-[85%] shadow-sm">
<span x-text="msg.text"></span>
</div>
</div>
</template>

<div className="flex items-start gap-2" x-show="loading">
<div className="w-6 h-6 rounded-full bg-brand-500 flex-shrink-0 flex items-center justify-center text-white text-[10px]">OD</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1 items-center h-[42px]">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
</div>
</div>

<div className="flex flex-wrap gap-2 pl-8 pt-2" x-show="messages.length &lt; 3 &amp;&amp; !loading">
<button @click="quickReply('Get a price quote')" className="px-3 py-1.5 bg-white border border-brand-200 text-brand-600 text-xs rounded-full hover:bg-brand-50 transition-colors">Get a Price</button>
<button @click="quickReply('How do I book?')" className="px-3 py-1.5 bg-white border border-brand-200 text-brand-600 text-xs rounded-full hover:bg-brand-50 transition-colors">Book Now</button>
<button @click="quickReply('What areas do you cover?')" className="px-3 py-1.5 bg-white border border-brand-200 text-brand-600 text-xs rounded-full hover:bg-brand-50 transition-colors">Service Area</button>
</div>
</div>

<div className="p-3 border-t border-slate-100 bg-white shrink-0">
<form @submit.prevent="sendMessage" className="relative">
<input className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 text-slate-900 placeholder:text-slate-400" placeholder="Type your message..." type="text" x-model="input"/>
<button :disabled="loading" className="absolute right-2 top-2 p-1 text-brand-500 hover:text-brand-600 disabled:opacity-50" type="submit">
<iconify-icon icon="solar:plain-3-bold" width="20"></iconify-icon>
</button>
</form>
</div>
</div>

<button @click="toggle()" className="group flex items-center justify-center w-14 h-14 bg-slate-900 text-white rounded-full shadow-lg shadow-brand-900/20 hover:scale-110 transition-transform duration-200 relative">
<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce-slow" x-show="!open"></span>
<iconify-icon icon="solar:chat-round-dots-linear" width="28" x-show="!open"></iconify-icon>
<iconify-icon icon="solar:close-circle-linear" style={{display: 'none'}} width="28" x-show="open"></iconify-icon>
</button>
</div>

    </>
  );
}
