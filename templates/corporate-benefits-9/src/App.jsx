import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
green: {
50: '#f2fcf5',
100: '#e1f8e8',
200: '#c5eed4',
300: '#98deb6',
400: '#63c593',
500: '#3ba776',
600: '#2d8a60',
700: '#266e4f', // Brand Primary
800: '#225740',
900: '#1d4836', // Dark Text
950: '#0f291f',
}
},
animation: {
'fade-up': 'fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'marquee': 'marquee 25s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px) blur(5px)' },
'100%': { opacity: '1', transform: 'translateY(0) blur(0)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}
// Form Handling Logic
async function submitToPowerAutomate(event, formElement) {
event.preventDefault();
const btn = formElement.querySelector('button[type="submit"]');
const originalContent = btn.innerHTML;
const endpoint = "https://defaultca7e11c78f694cf8957986e5aad008.79.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/d368bb3e1ee74ca6898ddeebd8fbdd17/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6BtFc6KqLIos4kACYR6tIdSP1F_budkkX7FIQD7fagE";
// Loading State
btn.disabled = true;
btn.innerHTML = '<iconify-icon icon="ph:spinner" class="animate-spin" width="20"></iconify-icon> Sending...';
btn.classList.add('opacity-80', 'cursor-wait');
// Gather Data
const formData = new FormData(formElement);
const data = {};
formData.forEach((value, key) => data[key] = value);
try {
const response = await fetch(endpoint, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
});
if (response.ok) {
// Success State
btn.classList.remove('bg-green-700', 'hover:bg-green-800', 'shadow-green-700/20');
btn.classList.add('bg-emerald-600', 'text-white', 'cursor-default');
btn.innerHTML = '<iconify-icon icon="ph:check-circle-fill" width="20"></iconify-icon> Inquiry Sent';
formElement.reset();
// Reset button after 3 seconds (optional)
setTimeout(() => {
btn.disabled = false;
btn.classList.remove('bg-emerald-600', 'text-white', 'cursor-default', 'opacity-80', 'cursor-wait');
btn.classList.add('bg-green-700', 'hover:bg-green-800', 'shadow-green-700/20');
btn.innerHTML = originalContent;
}, 4000);
} else {
throw new Error('Network response was not ok');
}
} catch (error) {
console.error('Error:', error);
btn.classList.add('bg-red-600', 'hover:bg-red-700');
btn.innerHTML = '<iconify-icon icon="ph:warning-circle" width="20"></iconify-icon> Error. Try again.';
setTimeout(() => {
btn.disabled = false;
btn.classList.remove('bg-red-600', 'hover:bg-red-700', 'opacity-80', 'cursor-wait');
btn.innerHTML = originalContent;
}, 3000);
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 glass border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex text-white bg-green-700 w-8 h-8 rounded-lg items-center justify-center">
<iconify-icon className="" icon="ph:leaf" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-green-900 uppercase">Green Habitat</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-green-700 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-green-700 transition-colors" href="#advantage">Advantage Pass</a>
<a className="hover:text-green-700 transition-colors" href="#sustainability">Sustainability</a>
<a className="hover:text-green-700 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-green-700 transition-colors" href="#faq">FAQ</a>
<a className="hover:text-green-700 transition-colors" href="#impact">Impact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-green-700" href="#">Login</a>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-green-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-all shadow-sm" href="#">
                    Get Pass
                </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 transition-all shadow-md shadow-green-700/20" href="#">
                    Live Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent -z-10 opacity-60"></div>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="flex flex-col gap-6 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 w-fit animate-fade-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-semibold text-green-700 uppercase tracking-wide">New Era of Employee Engagement</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-green-950 tracking-tight leading-[1.1] text-balance animate-fade-up animate-delay-100">
                    Corporate Benefits: <br className="hidden lg:block"/>A New Era of Employee Engagement
                </h1>
<p className="text-lg md:text-xl text-stone-500 leading-relaxed text-balance animate-fade-up animate-delay-200">
                    Empower your workforce, reduce costs, and enhance employee well-being with Green Habitat. Give your team access to high-value travel rewards that drive retention and client loyalty.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-up animate-delay-300">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-green-700 rounded-xl hover:bg-green-800 transition-all shadow-lg shadow-green-700/20 group" href="#">
                        Schedule a Live Demo
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="ph:arrow-right" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-green-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all shadow-sm" href="#">
                        Get Your 1-Year Advantage Pass
                    </a>
</div>
<p className="text-xs text-stone-400 font-medium animate-fade-up animate-delay-400 flex items-center gap-2">
<iconify-icon className="text-green-500" icon="ph:check-circle-fill"></iconify-icon>
                    Access 460,000+ hotels • Save up to 60% • Avg. €1,750/year savings
                </p>

<div className="grid grid-cols-3 gap-4 pt-8 border-t border-stone-200 animate-fade-up animate-delay-500">
<div className="">
<div className="text-2xl font-semibold text-green-900 tracking-tight">460k+</div>
<div className="text-xs text-stone-500 font-medium">Global Hotels</div>
</div>
<div>
<div className="text-2xl font-semibold text-green-900 tracking-tight">60%</div>
<div className="text-xs text-stone-500 font-medium">Accommodation Savings</div>
</div>
<div>
<div className="text-2xl font-semibold text-green-900 tracking-tight">€1.7k</div>
<div className="text-xs text-stone-500 font-medium">Avg. User Savings</div>
</div>
</div>
</div>

<div className="animate-fade-up animate-delay-300 lg:h-[600px] flex relative items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full blur-3xl scale-75 pointer-events-none"></div>

<div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-10 animate-float">
<div className="p-6 md:p-8">
<div className="mb-6 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700 mb-3">
<iconify-icon icon="ph:paper-plane-tilt" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-green-950 tracking-tight mb-2">Let’s Connect for Greener Solutions</h3>
<p className="text-xs text-stone-500 leading-relaxed text-balance">For your convenience, fill out the form below, and one of our representatives will respond promptly.</p>
</div>

<form className="space-y-4" onsubmit="submitToPowerAutomate(event, this)">
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="name">Name</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="name" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="phone">Phone Number</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="email">Email Address</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="time">Time for Contact</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="time" name="time" placeholder="e.g. 9 AM - 11 AM" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="method">Contact Method</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all appearance-none cursor-pointer" id="method" name="method">
<option value="Email">Email</option>
<option value="Phone">Phone</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="ph:caret-down" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="message">Your Message or Inquiry</label>
<textarea className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all resize-none" id="message" name="message" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button className="w-full py-2.5 px-4 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-lg shadow-lg shadow-green-700/20 hover:shadow-green-700/30 transition-all flex items-center justify-center gap-2 group" type="submit">
<span className="">Submit Inquiry</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="ph:paper-plane-right"></iconify-icon>
</button>
<p className="text-[10px] text-center text-stone-400 mt-4">
                                By submitting this form, you agree to our <a className="underline hover:text-stone-500" href="#">Privacy Policy</a>.
                            </p>
</form>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden mt-16 opacity-40 grayscale pointer-events-none">
<div className="relative w-full flex overflow-x-hidden">
<div className="animate-marquee whitespace-nowrap flex items-center gap-16">
<span className="text-xl font-semibold text-stone-400">PARTNER LOGO</span>
<span className="text-xl font-semibold text-stone-400">CORPORATE</span>
<span className="text-xl font-semibold text-stone-400">ENTERPRISE</span>
<span className="text-xl font-semibold text-stone-400">TECH GROUP</span>
<span className="text-xl font-semibold text-stone-400">GLOBAL INC</span>
<span className="text-xl font-semibold text-stone-400">PARTNER LOGO</span>
<span className="text-xl font-semibold text-stone-400">CORPORATE</span>
<span className="text-xl font-semibold text-stone-400">ENTERPRISE</span>
<span className="text-xl font-semibold text-stone-400">TECH GROUP</span>
<span className="text-xl font-semibold text-stone-400">GLOBAL INC</span>
</div>
<div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 ml-16">

</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
<h2 className="text-3xl md:text-4xl font-semibold text-green-950 tracking-tight mb-4">Why Corporate Benefits Matter</h2>
<p className="text-stone-500">Meaningful perks that go beyond salary to build culture and loyalty.</p>
</div>
<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-all duration-300 group animate-fade-up">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
<iconify-icon icon="ph:smiley" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-green-900 mb-2">Enhance Satisfaction</h3>
<p className="text-xs leading-relaxed text-stone-500">Boost team morale and retain top talent with lifestyle perks.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-all duration-300 group animate-fade-up animate-delay-100">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
<iconify-icon icon="ph:trend-up" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-green-900 mb-2">Improve Productivity</h3>
<p className="text-xs leading-relaxed text-stone-500">Well-rested employees perform better and stay engaged longer.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-all duration-300 group animate-fade-up animate-delay-200">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
<iconify-icon icon="ph:star" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-green-900 mb-2">Employer Branding</h3>
<p className="text-xs leading-relaxed text-stone-500">Stand out in the market as a forward-thinking employer.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-all duration-300 group animate-fade-up animate-delay-300">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
<iconify-icon icon="ph:chart-bar" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-green-900 mb-2">Financial Efficiency</h3>
<p className="text-xs leading-relaxed text-stone-500">Maximize benefit value while keeping corporate costs optimized.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-all duration-300 group animate-fade-up animate-delay-400">
<div className="w-10 h-10 mb-4 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
<iconify-icon icon="ph:handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-green-900 mb-2">Drive Client Loyalty</h3>
<p className="text-xs leading-relaxed text-stone-500">Offer passes as exclusive gifts to key clients and partners.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-fade-up">
<span className="text-sm font-semibold text-green-700 uppercase tracking-wide">The Solution</span>
<h2 className="text-3xl md:text-4xl font-semibold text-green-950 tracking-tight mt-2 mb-6">
                    Green Habitat: A Smart Corporate Benefit Solution
                </h2>
<p className="text-lg text-stone-500 mb-6 leading-relaxed">
                    Unparalleled advantages for businesses and employees. Our program is a smart, flexible travel rewards system designed to improve satisfaction and save costs instantly.
                </p>
<div className="space-y-4">

<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon icon="ph:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-stone-700 font-medium">Save up to 60% on accommodations</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon icon="ph:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-stone-700 font-medium">Improve work-life balance</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon icon="ph:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-stone-700 font-medium">Flexible and customizable rewards</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon icon="ph:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-stone-700 font-medium">Exclusive deals for internal business travel</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon icon="ph:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-stone-700 font-medium">Enhance client relationships</span>
</div>
</div>
</div>
<div className="relative animate-fade-up animate-delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-transparent rounded-3xl blur-2xl opacity-30 transform rotate-2"></div>
<div className="relative bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-700">
<iconify-icon icon="ph:buildings" width="24"></iconify-icon>
</div>
<div>
<div className="text-lg font-semibold text-green-950">Corporate Portal</div>
<div className="text-sm text-stone-500">Real-time savings dashboard</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-24 text-xs font-medium text-stone-500">Employee Savings</div>
<div className="flex-1 h-3 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[85%] rounded-full"></div>
</div>
<div className="w-12 text-xs font-bold text-green-700">€85k</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 text-xs font-medium text-stone-500">Travel Budget</div>
<div className="flex-1 h-3 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-stone-300 w-[60%] rounded-full"></div>
</div>
<div className="w-12 text-xs font-bold text-stone-600">-40%</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 text-xs font-medium text-stone-500">Satisfaction</div>
<div className="flex-1 h-3 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-green-400 w-[92%] rounded-full"></div>
</div>
<div className="w-12 text-xs font-bold text-green-700">4.8/5</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-green-900 text-white relative overflow-hidden" id="advantage">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/ph:airplane-tilt.svg?color=%23ffffff&amp;opacity=0.03')] bg-repeat opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white">Green Habitat’s 1-Year Advantage Pass</h2>
<p className="text-green-100 max-w-2xl mx-auto mb-12 text-lg">A simple and flexible way to reward employees and clients year-round with exclusive access to premium travel deals.</p>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-green-300 mb-4 mx-auto" icon="ph:globe-hemisphere-west" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">460,000+</h3>
<p className="text-sm text-green-100/80">Hotel Partnerships Worldwide</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-green-300 mb-4 mx-auto" icon="ph:gift" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Personalized</h3>
<p className="text-sm text-green-100/80">Custom Rewards System</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-green-300 mb-4 mx-auto" icon="ph:sliders" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Optimized</h3>
<p className="text-sm text-green-100/80">Seamless Booking Platform</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-green-300 mb-4 mx-auto" icon="ph:wallet" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">€1,750</h3>
<p className="text-sm text-green-100/80">Avg. Savings Per Year</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-green-900 bg-white rounded-xl hover:bg-green-50 transition-all" href="#">
                    Schedule a Live Demo
                </a>
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent border border-white/30 rounded-xl hover:bg-white/10 transition-all" href="#">
                    Get Your Advantage Pass
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="sustainability">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Transparency</span>
<h2 className="text-3xl md:text-4xl font-semibold text-green-950 tracking-tight mt-2 mb-4">
                    Sustainability Transparency
                </h2>
<p className="text-stone-500">
                    We offer a wide hotel selection for business travel and employee rewards, featuring clear sustainability indicators so your team can make informed choices.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-300 transition-all">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-stone-200 text-stone-600">
<iconify-icon icon="ph:leaf" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-800">Eco Essential</h3>
</div>
<div className="h-1 w-full bg-stone-200 rounded-full mb-4 overflow-hidden">
<div className="h-full w-1/3 bg-stone-500 rounded-full"></div>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
                        Properties demonstrating basic sustainable practices, such as waste reduction and energy conservation efforts.
                    </p>
</div>

<div className="relative group p-8 rounded-2xl bg-green-50/50 border border-green-100 hover:border-green-300 transition-all">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-green-100 text-green-700">
<iconify-icon icon="ph:plant-fill" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-green-800">Eco Plus</h3>
</div>
<div className="h-1 w-full bg-green-100 rounded-full mb-4 overflow-hidden">
<div className="h-full w-2/3 bg-green-500 rounded-full"></div>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
                        Accommodations going beyond basics with active recycling programs, renewable energy usage, and third-party certifications.
                    </p>
</div>

<div className="relative group p-8 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 transition-all shadow-sm">
<div className="absolute top-4 right-4">
<iconify-icon className="text-emerald-500" icon="ph:medal" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
<iconify-icon icon="ph:trophy-fill" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-900">Sustainability Champions</h3>
</div>
<div className="h-1 w-full bg-emerald-100 rounded-full mb-4 overflow-hidden">
<div className="h-full w-full bg-emerald-600 rounded-full"></div>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
                        The highest standard. Verified holistic sustainability strategies, carbon neutrality goals, and positive community impact.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-green-950 tracking-tight">Corporate Benefits That Deliver Real Impact</h2>
</div>
<div className="grid md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-200 -z-10"></div>

<div className="relative flex flex-col items-center text-center animate-fade-up">
<div className="w-24 h-24 rounded-2xl bg-white border border-stone-100 shadow-md flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-green-700" icon="ph:users-three" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-green-900 mb-3">1. Enroll Your Team</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                        Seamlessly onboard employees and clients onto the platform via our secure portal.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center animate-fade-up animate-delay-200">
<div className="w-24 h-24 rounded-2xl bg-white border border-stone-100 shadow-md flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-green-700" icon="ph:lock-key-open" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-green-900 mb-3">2. Unlock Perks</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                        Grant immediate access to year-round travel discounts and sustainability badges.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center animate-fade-up animate-delay-400">
<div className="w-24 h-24 rounded-2xl bg-white border border-stone-100 shadow-md flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-green-700" icon="ph:chart-line-up" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-green-900 mb-3">3. Track &amp; Optimize</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                        Monitor usage, calculate savings, and measure environmental impact via reporting.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
<div className="animate-fade-up">
<h2 className="text-3xl md:text-4xl font-semibold text-green-950 tracking-tight mb-6">
                        Why Leading Companies Choose Green Habitat
                    </h2>
<p className="text-lg text-stone-500 leading-relaxed">
                        We combine financial efficiency with corporate responsibility. Our platform is built for the modern enterprise that values both its bottom line and its people.
                    </p>
<div className="mt-8">
<a className="text-green-700 font-medium hover:text-green-800 flex items-center gap-2" href="#">
                            Explore Success Stories <iconify-icon icon="ph:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6 animate-fade-up animate-delay-200">
<div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
<iconify-icon className="text-green-700 mb-3" icon="ph:seal-check" width="24"></iconify-icon>
<h4 className="font-semibold text-green-900 mb-1">Trusted Partner</h4>
<p className="text-xs text-stone-500">Reliable service for leading enterprises.</p>
</div>
<div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
<iconify-icon className="text-green-700 mb-3" icon="ph:brain" width="24"></iconify-icon>
<h4 className="font-semibold text-green-900 mb-1">Smarter Benefits</h4>
<p className="text-xs text-stone-500">Data-driven approach to perks.</p>
</div>
<div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
<iconify-icon className="text-green-700 mb-3" icon="ph:currency-eur" width="24"></iconify-icon>
<h4 className="font-semibold text-green-900 mb-1">Cost Effective</h4>
<p className="text-xs text-stone-500">High ROI for businesses of all sizes.</p>
</div>
<div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
<iconify-icon className="text-green-700 mb-3" icon="ph:squares-four" width="24"></iconify-icon>
<h4 className="font-semibold text-green-900 mb-1">Multi-Purpose</h4>
<p className="text-xs text-stone-500">Employees, Clients, &amp; Business Travel.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-green-950 tracking-tight text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-green-950 hover:bg-stone-50 transition-colors">
<span>Can employees use the pass for personal travel?</span>
<iconify-icon className="text-stone-400 transform group-open:rotate-180 transition-transform duration-300" icon="ph:caret-down"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-stone-500 leading-relaxed border-t border-transparent group-open:border-stone-100">
                        Yes, absolutely. The Advantage Pass is designed to improve work-life balance, allowing employees to use their exclusive savings for personal vacations and family trips.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-green-950 hover:bg-stone-50 transition-colors">
<span>How does this save businesses money?</span>
<iconify-icon className="text-stone-400 transform group-open:rotate-180 transition-transform duration-300" icon="ph:caret-down"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-stone-500 leading-relaxed border-t border-transparent group-open:border-stone-100">
                        By using the platform for internal business travel bookings, companies access the same discounted rates (up to 60% off), significantly reducing the annual corporate travel budget.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-green-950 hover:bg-stone-50 transition-colors">
<span>How customizable is the program?</span>
<iconify-icon className="text-stone-400 transform group-open:rotate-180 transition-transform duration-300" icon="ph:caret-down"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-stone-500 leading-relaxed border-t border-transparent group-open:border-stone-100">
                        Extremely. We allow you to tier rewards, set specific permissions for different departments, and brand the portal to match your corporate identity.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-green-950 hover:bg-stone-50 transition-colors">
<span>Does this align with CSR initiatives?</span>
<iconify-icon className="text-stone-400 transform group-open:rotate-180 transition-transform duration-300" icon="ph:caret-down"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-stone-500 leading-relaxed border-t border-transparent group-open:border-stone-100">
                        Yes. Our "Green Badge" system promotes sustainable travel choices, and our partnerships (TwoWings, Planting Hope) mean every booking contributes to global environmental and social causes.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-50 to-transparent -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="animate-fade-up">
<h2 className="md:text-5xl text-4xl font-semibold text-green-950 tracking-tight mb-6 text-balance">
                        Ready to Transform Your Corporate Benefits Strategy?
                    </h2>
<p className="text-lg text-stone-500 mb-10 text-balance">
                        Join forward-thinking companies empowering their workforce with flexible, measurable, and sustainable rewards.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex items-center justify-center hover:bg-green-800 transition-all shadow-green-700/20 text-base font-medium text-white bg-green-700 rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#">
                            Schedule a Live Demo
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-green-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all" href="#">
                            Get Your 1-Year Advantage Pass
                        </a>
</div>
<p className="text-xs font-medium text-stone-400 uppercase tracking-widest">
                        Flexible • Measurable • For Everyone
                    </p>
</div>

<div className="animate-fade-up animate-delay-200 flex items-center justify-center">
<div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-10 animate-float">
<div className="p-6 md:p-8">
<div className="mb-6 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700 mb-3">
<iconify-icon icon="ph:paper-plane-tilt" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-green-950 tracking-tight mb-2">Let’s Connect for Greener Solutions</h3>
<p className="text-xs text-stone-500 leading-relaxed text-balance">For your convenience, fill out the form below, and one of our representatives will respond promptly.</p>
</div>

<form className="space-y-4" onsubmit="submitToPowerAutomate(event, this)">
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="name-bottom">Name</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="name-bottom" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="phone-bottom">Phone Number</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="phone-bottom" name="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="email-bottom">Email Address</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="email-bottom" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="time-bottom">Time for Contact</label>
<input className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all" id="time-bottom" name="time" placeholder="e.g. 9 AM - 11 AM" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="method-bottom">Contact Method</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all appearance-none cursor-pointer" id="method-bottom" name="method">
<option value="Email">Email</option>
<option value="Phone">Phone</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="ph:caret-down" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold text-stone-600" htmlFor="message-bottom">Your Message or Inquiry</label>
<textarea className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-500 transition-all resize-none" id="message-bottom" name="message" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button className="w-full py-2.5 px-4 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-lg shadow-lg shadow-green-700/20 hover:shadow-green-700/30 transition-all flex items-center justify-center gap-2 group" type="submit">
<span className="">Submit Inquiry</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="ph:paper-plane-right"></iconify-icon>
</button>
<p className="text-[10px] text-center text-stone-400 mt-4">
                                    By submitting this form, you agree to our <a className="underline hover:text-stone-500" href="#">Privacy Policy</a>.
                                </p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 pt-16 pb-8" id="impact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-stone-800 pb-12">

<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-green-700 flex items-center justify-center text-white">
<iconify-icon icon="ph:leaf" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white uppercase">Green Habitat</span>
</div>
<p className="text-sm leading-relaxed">
                        A new era of employee engagement through sustainable travel benefits.
                    </p>
</div>

<div className="">
<h4 className="text-white font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-green-500 transition-colors" href="#">Benefits</a></li>
<li className=""><a className="hover:text-green-500 transition-colors" href="#">How It Works</a></li>
<li><a className="hover:text-green-500 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-green-500 transition-colors" href="#">Login</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-white font-medium mb-4">Impact Partners</h4>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-stone-800/50 border border-stone-800">
<h5 className="text-green-500 font-semibold text-sm mb-1">TwoWings</h5>
<p className="text-xs leading-relaxed">Supporting sustainable education programs since 1996, focusing on women and youth.</p>
</div>
<div className="p-4 rounded-xl bg-stone-800/50 border border-stone-800">
<h5 className="text-green-500 font-semibold text-sm mb-1">Planting Hope</h5>
<p className="text-xs leading-relaxed">Education and tree-planting initiatives in Colombia and Zambia.</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
<p>© 2023 Green Habitat. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-400" href="#">Privacy Policy</a>
<a className="hover:text-stone-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
