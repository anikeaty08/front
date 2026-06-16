import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Language Logic
function toggleLanguage(lang) {
const enElements = document.querySelectorAll('.lang-en');
const lvElements = document.querySelectorAll('.lang-lv');
const btnEn = document.getElementById('btn-en');
const btnLv = document.getElementById('btn-lv');
if (lang === 'lv') {
enElements.forEach(el => el.style.display = 'none');
lvElements.forEach(el => el.style.display = 'inline-block');
document.querySelectorAll('.lang-lv.block-context').forEach(el => el.style.display = 'block');
btnLv.classList.add('text-neutral-900', 'font-semibold');
btnLv.classList.remove('text-neutral-400');
btnEn.classList.remove('text-neutral-900', 'font-semibold');
btnEn.classList.add('text-neutral-400');
document.documentElement.lang = 'lv';
} else {
lvElements.forEach(el => el.style.display = 'none');
enElements.forEach(el => el.style.display = 'inline-block');
document.querySelectorAll('.lang-en.block-context').forEach(el => el.style.display = 'block');
btnEn.classList.add('text-neutral-900', 'font-semibold');
btnEn.classList.remove('text-neutral-400');
btnLv.classList.remove('text-neutral-900', 'font-semibold');
btnLv.classList.add('text-neutral-400');
document.documentElement.lang = 'en';
}
}
// Router/View Logic
function navigateTo(viewId) {
const homeView = document.getElementById('home-view');
const contactView = document.getElementById('contact-view');
// Scroll to top
window.scrollTo({ top: 0, behavior: 'smooth' });
if (viewId === 'contact') {
homeView.classList.add('hidden');
contactView.classList.remove('hidden');
} else {
contactView.classList.add('hidden');
homeView.classList.remove('hidden');
}
}
// Form Handling Logic (Simulated Database Submission)
async function handleContactSubmit(event) {
event.preventDefault();
const form = event.target;
const btn = form.querySelector('button[type="submit"]');
const originalBtnContent = btn.innerHTML;
const feedbackArea = document.getElementById('form-feedback');
// 1. Collect Data
const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());
data.timestamp = new Date().toISOString();
// 2. UI Loading State
btn.disabled = true;
btn.innerHTML = `
<iconify-icon icon="line-md:loading-twotone-loop" width="20"></iconify-icon>
<span class="lang-en">Saving...</span><span class="lang-lv" style="display:none">Saglabā...</span>
`;
try {
// 3. Simulate API Call / DB Storage
// In a real app, this would be: await fetch('/api/submit', { method: 'POST', body: JSON.stringify(data) });
console.log("Submitting to database:", data);
await new Promise(resolve => setTimeout(resolve, 2000)); // Fake 2s latency
// 4. Success State
btn.classList.remove('bg-neutral-900', 'hover:bg-neutral-800');
btn.classList.add('bg-green-600', 'hover:bg-green-700');
btn.innerHTML = `
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
<span class="lang-en">Saved to Database</span><span class="lang-lv" style="display:none">Saglabāts datubāzē</span>
`;
// Show localized success message in feedback area
const isLv = document.documentElement.lang === 'lv';
feedbackArea.textContent = isLv
? "Paldies! Jūsu dati ir droši saglabāti mūsu sistēmā. Mēs sazināsimies drīz."
: "Thanks! Your data has been securely stored in our system. We'll be in touch.";
feedbackArea.className = "text-center text-sm text-green-600 mt-4 font-medium animate-pulse";
// 5. Reset Form after delay
setTimeout(() => {
form.reset();
btn.disabled = false;
btn.classList.add('bg-neutral-900', 'hover:bg-neutral-800');
btn.classList.remove('bg-green-600', 'hover:bg-green-700');
btn.innerHTML = originalBtnContent;
feedbackArea.textContent = "";
feedbackArea.className = "";
// Re-apply language visibility if needed
if(isLv) {
btn.querySelector('.lang-en').style.display = 'none';
btn.querySelector('.lang-lv').style.display = 'inline';
}
}, 5000);
} catch (error) {
console.error("Submission failed", error);
btn.disabled = false;
btn.innerHTML = originalBtnContent;
alert("Error connecting to database. Please try again.");
}
}
// Carousel Logic
let currentSlide = 0;
function initCarousel() {
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicator');
if(slides.length === 0) return;
setInterval(() => {
// Remove active class from current
slides[currentSlide].classList.remove('active');
if(indicators[currentSlide]) indicators[currentSlide].classList.remove('bg-neutral-900');
if(indicators[currentSlide]) indicators[currentSlide].classList.add('bg-neutral-300');
// Increment
currentSlide = (currentSlide + 1) % slides.length;
// Add active class to next
slides[currentSlide].classList.add('active');
if(indicators[currentSlide]) indicators[currentSlide].classList.remove('bg-neutral-300');
if(indicators[currentSlide]) indicators[currentSlide].classList.add('bg-neutral-900');
}, 3500); // 3.5s per slide
}
document.addEventListener('DOMContentLoaded', () => {
initCarousel();
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bg-indigo-200/40"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 bg-cyan-200/40"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bg-blue-200/40"></div>
<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b backdrop-blur-md border-neutral-200 bg-white/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold text-lg tracking-tight flex items-center gap-2 text-neutral-900 hover:opacity-80 transition-opacity" href="javascript:navigateTo('home')">

<div className="relative flex items-center justify-center w-6 h-6 rounded bg-neutral-100 text-indigo-600">
<iconify-icon height="18" icon="solar:heart-pulse-linear" width="18"></iconify-icon>
</div>
                DATAPULSE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<button className="transition-colors duration-200 hover:text-black bg-transparent border-none cursor-pointer" onclick="navigateTo('home'); setTimeout(() =&gt; document.getElementById('services').scrollIntoView({behavior:'smooth'}), 100)">
<span className="lang-en">Services</span>
<span className="lang-lv">Pakalpojumi</span>
</button>
<button className="transition-colors duration-200 hover:text-black bg-transparent border-none cursor-pointer" onclick="navigateTo('home'); setTimeout(() =&gt; document.getElementById('portfolio').scrollIntoView({behavior:'smooth'}), 100)">
<span className="lang-en">Portfolio</span>
<span className="lang-lv">Portfolio</span>
</button>
<button className="transition-colors duration-200 hover:text-black bg-transparent border-none cursor-pointer" onclick="navigateTo('home'); setTimeout(() =&gt; document.getElementById('about').scrollIntoView({behavior:'smooth'}), 100)">
<span className="lang-en">About</span>
<span className="lang-lv">Par mums</span>
</button>
<button className="transition-colors duration-200 hover:text-black bg-transparent border-none cursor-pointer text-neutral-900 font-semibold" onclick="navigateTo('contact')">
<span className="lang-en">Contact</span>
<span className="lang-lv">Kontakti</span>
</button>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-1 text-xs font-medium border-r pr-4 border-neutral-200">
<button className="text-neutral-900 font-semibold hover:text-black transition-colors" id="btn-en" onclick="toggleLanguage('en')">EN</button>
<span className="text-neutral-300">/</span>
<button className="text-neutral-400 hover:text-black transition-colors" id="btn-lv" onclick="toggleLanguage('lv')">LV</button>
</div>
<button className="hidden md:flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full transition-colors shadow-sm text-white bg-neutral-900 hover:bg-neutral-800" onclick="navigateTo('contact')">
<span className="lang-en">Book Consultation</span>
<span className="lang-lv">Pieteikt konsultāciju</span>
</button>

<button className="md:hidden text-neutral-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="pt-24 pb-20 relative min-h-screen">

<div className="transition-opacity duration-300" id="home-view">

<section className="max-w-7xl mx-auto px-6 mb-32 z-10 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 shadow-sm border-neutral-200 bg-neutral-50 text-indigo-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="lang-en">Accepting new audit clients for Q4</span>
<span className="lang-lv">Pieņemam jaunus audita klientus Q4</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1] text-neutral-900">
<span className="lang-en block-context">Data-driven growth, <br/>
<span className="text-gradient">engineered for scale.</span></span>
<span className="lang-lv block-context">Datos balstīta izaugsme, <br/>
<span className="text-gradient">radīta mērogošanai.</span></span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-10 font-light leading-relaxed">
<span className="lang-en block-context">We bridge the gap between complex data stacks and actionable marketing insights. Expert implementation of GA4, Segment, and custom analytics pipelines.</span>
<span className="lang-lv block-context">Mēs savienojam sarežģītus datu risinājumus ar praktiskiem mārketinga ieskatiem. Ekspertu līmeņa GA4, Segment un pielāgotu analītikas sistēmu ieviešana.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-3 text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg bg-neutral-900 text-white hover:bg-neutral-800" onclick="navigateTo('contact')">
<span className="lang-en">Start your project</span>
<span className="lang-lv">Sākt projektu</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<a className="px-8 py-3 border text-sm font-medium rounded-full transition-all flex items-center justify-center shadow-sm bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50" href="#services">
<span className="lang-en">View services</span>
<span className="lang-lv">Skatīt pakalpojumus</span>
</a>
</div>
</div>

<div className="mt-20 relative rounded-xl border overflow-hidden shadow-2xl border-neutral-200 bg-white shadow-neutral-200/50 max-w-4xl mx-auto h-[400px] md:h-[320px]">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-neutral-200"></div>

<div className="p-4 border-b flex justify-between items-center border-neutral-100 bg-neutral-50/50 backdrop-blur-sm z-20 relative">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full border bg-neutral-200 border-neutral-300"></div>
<div className="w-3 h-3 rounded-full border bg-neutral-200 border-neutral-300"></div>
<div className="w-3 h-3 rounded-full border bg-neutral-200 border-neutral-300"></div>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-900 carousel-indicator transition-colors duration-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300 carousel-indicator transition-colors duration-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300 carousel-indicator transition-colors duration-300"></div>
</div>
</div>

<div className="relative w-full h-[calc(100%-53px)] bg-white p-8 md:p-12">

<div className="carousel-slide active flex flex-col justify-center items-center text-center">
<div className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:chart-2-linear"></iconify-icon>
<span className="lang-en">Conversion Rate</span>
<span className="lang-lv">Konversijas rādītājs</span>
</div>
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-neutral-900 mb-2">4.2%</div>
<div className="text-green-600 font-medium flex items-center gap-1 mb-8 bg-green-50 px-2 py-1 rounded-full text-sm">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> +12% vs last month
                            </div>

<div className="h-24 w-64 flex items-end justify-center gap-2">
<div className="w-8 rounded-t h-[40%] bg-neutral-100 transition-all duration-1000"></div>
<div className="w-8 rounded-t h-[60%] bg-neutral-100 transition-all duration-1000 delay-100"></div>
<div className="w-8 rounded-t h-[30%] bg-neutral-100 transition-all duration-1000 delay-200"></div>
<div className="w-8 rounded-t h-[85%] bg-indigo-600 shadow-lg shadow-indigo-200 transition-all duration-1000 delay-300"></div>
<div className="w-8 rounded-t h-[50%] bg-neutral-100 transition-all duration-1000 delay-400"></div>
</div>
</div>

<div className="carousel-slide flex flex-col justify-center items-center text-center">
<div className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="lang-en">Active Users</span>
<span className="lang-lv">Aktīvie lietotāji</span>
</div>
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-neutral-900 mb-2">24.5k</div>
<div className="text-blue-600 font-medium flex items-center gap-1 mb-8 bg-blue-50 px-2 py-1 rounded-full text-sm">
<iconify-icon icon="solar:user-plus-linear"></iconify-icon> +8% new acquisition
                            </div>

<div className="relative w-64 h-24">
<div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2">
<div className="w-2 h-2 rounded-full bg-blue-400 mb-[20%]"></div>
<div className="w-2 h-2 rounded-full bg-blue-400 mb-[45%]"></div>
<div className="w-2 h-2 rounded-full bg-blue-400 mb-[35%]"></div>
<div className="w-2 h-2 rounded-full bg-blue-600 mb-[80%] scale-150"></div>
<div className="w-2 h-2 rounded-full bg-blue-400 mb-[65%]"></div>
</div>

<svg className="absolute inset-0 w-full h-full" overflow="visible">
<path className="opacity-50" d="M10 50 Q 60 20 120 40 T 240 10" fill="none" stroke="#60a5fa" stroke-dasharray="4 2" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="carousel-slide flex flex-col justify-center items-center text-center">
<div className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="solar:clock-circle-linear"></iconify-icon>
<span className="lang-en">Avg. Engagement</span>
<span className="lang-lv">Vidējā iesaiste</span>
</div>
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-neutral-900 mb-2">1m 32s</div>
<div className="text-cyan-600 font-medium flex items-center gap-1 mb-8 bg-cyan-50 px-2 py-1 rounded-full text-sm">
<iconify-icon icon="solar:stopwatch-play-linear"></iconify-icon> +12% retention
                            </div>

<div className="relative w-24 h-24 rounded-full border-8 border-neutral-100 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle className="text-cyan-500" cx="50" cy="50" fill="none" r="46" stroke="currentColor" stroke-dasharray="289" stroke-dashoffset="70" strokeWidth="8"></circle>
</svg>
<iconify-icon className="text-neutral-400 text-2xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 border-y py-12 border-neutral-100 bg-neutral-50/50">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">
<span className="lang-en">Trusted by data teams at</span>
<span className="lang-lv">Mums uzticas datu komandas</span>
</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter flex items-center gap-1 text-neutral-900"><span className="w-4 h-4 rounded-full bg-neutral-900"></span>ACME</span>
<span className="text-xl font-medium italic tracking-tight text-neutral-900">sphere</span>
<span className="text-xl font-bold tracking-tight text-neutral-900">NEXUS</span>
<span className="text-xl font-light tracking-[0.2em] text-neutral-900">GLOBAL</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-1 text-neutral-900">KINETIC<span className="w-1 h-1 bg-indigo-600"></span></span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-neutral-900">
<span className="lang-en">Core Services</span>
<span className="lang-lv">Pamatpakalpojumi</span>
</h2>
<p className="text-neutral-500 max-w-xl text-sm leading-relaxed">
<span className="lang-en block-context">We don't just install scripts. We build data infrastructure that answers your most critical business questions.</span>
<span className="lang-lv block-context">Mēs ne tikai uzstādām skriptus. Mēs veidojam datu infrastruktūru, kas atbild uz jūsu svarīgākajiem biznesa jautājumiem.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative md:col-span-2 glass-panel p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-white">
<div className="absolute top-8 right-8 group-hover:text-indigo-600 transition-colors text-neutral-400">
<iconify-icon height="32" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between">
<div>
<h3 className="text-xl font-medium mb-2 text-neutral-900">
<span className="lang-en">Platform Implementation</span>
<span className="lang-lv">Platformu ieviešana</span>
</h3>
<p className="text-sm leading-relaxed max-w-md text-neutral-600">
<span className="lang-en block-context">End-to-end setup of CDP and Analytics stacks. We handle the taxonomy design, tracking plans, and implementation for Segment, Mixpanel, Amplitude, and custom data warehouses.</span>
<span className="lang-lv block-context">Pilna cikla CDP un analītikas risinājumu ieviešana. Mēs izstrādājam taksonomiju, sekošanas plānus un ieviešam Segment, Mixpanel, Amplitude, kā arī pielāgotus datu risinājumus.</span>
</p>
</div>
<div className="mt-8 flex gap-2">
<span className="px-2 py-1 border rounded text-xs bg-neutral-100 border-neutral-200 text-neutral-600">Segment</span>
<span className="px-2 py-1 border rounded text-xs bg-neutral-100 border-neutral-200 text-neutral-600">Mixpanel</span>
<span className="px-2 py-1 border rounded text-xs bg-neutral-100 border-neutral-200 text-neutral-600">Amplitude</span>
</div>
</div>
</div>

<div className="group relative glass-panel p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-white">
<div className="absolute top-8 right-8 group-hover:text-indigo-600 transition-colors text-neutral-400">
<iconify-icon height="32" icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2 text-neutral-900">
<span className="lang-en">Analytics Audit</span>
<span className="lang-lv">Analītikas audits</span>
</h3>
<p className="text-sm leading-relaxed mb-6 text-neutral-600">
<span className="lang-en block-context">Is your data lying to you? We verify data integrity, identify broken events, and fix attribution leaks in your current setup.</span>
<span className="lang-lv block-context">Vai dati jums melo? Mēs pārbaudām datu integritāti, identificējam kļūdainus notikumus un labojam atribūcijas nepilnības jūsu esošajā uzstādījumā.</span>
</p>
<a className="text-xs font-medium border-b pb-0.5 transition-colors text-neutral-900 border-neutral-300 hover:border-black" href="#">
<span className="lang-en">Learn more</span>
<span className="lang-lv">Uzzināt vairāk</span>
</a>
</div>

<div className="group relative glass-panel p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-white">
<div className="absolute top-8 right-8 group-hover:text-indigo-500 transition-colors text-neutral-400">
<iconify-icon height="32" icon="solar:graph-new-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2 text-neutral-900">
<span className="lang-en">GA4 Setup &amp; Migration</span>
<span className="lang-lv">GA4 iestatīšana un migrācija</span>
</h3>
<p className="text-sm leading-relaxed mb-6 text-neutral-600">
<span className="lang-en block-context">Seamless migration from UA to GA4. Custom event modeling, BigQuery linking, and exploration report configuration.</span>
<span className="lang-lv block-context">Nevainojama migrācija no UA uz GA4. Pielāgotu notikumu modelēšana, BigQuery sasaiste un eksplorācijas atskaišu konfigurācija.</span>
</p>
</div>

<div className="group relative md:col-span-2 glass-panel p-8 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden hover:bg-white">
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-tl to-transparent rounded-full blur-2xl from-indigo-100"></div>
<div className="absolute top-8 right-8 group-hover:text-indigo-600 transition-colors text-neutral-400">
<iconify-icon height="32" icon="solar:code-circle-linear" width="32"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium mb-2 text-neutral-900">
<span className="lang-en">Technical Web Development</span>
<span className="lang-lv">Tehniskā tīmekļa izstrāde</span>
</h3>
<p className="text-sm leading-relaxed max-w-lg text-neutral-600">
<span className="lang-en block-context">We build high-performance marketing websites and landing pages optimized for data capture. Next.js, Tailwind, and headless CMS integrations designed for technical marketers.</span>
<span className="lang-lv block-context">Mēs veidojam augstas veiktspējas mārketinga vietnes un galvenās lapas, kas optimizētas datu ievākšanai. Next.js, Tailwind un headless CMS integrācijas tehniskajiem mārketeriem.</span>
</p>
<div className="mt-8 grid grid-cols-2 gap-4 max-w-xs">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Server-side GTM
                                </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Core Web Vitals
                                </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> SEO Technicals
                                </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> API Integrations
                                </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="portfolio">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-neutral-900">
<span className="lang-en">Selected Work</span>
<span className="lang-lv">Izvēlētie darbi</span>
</h2>
<p className="text-neutral-500 text-sm">
<span className="lang-en">Case studies in data architecture.</span>
<span className="lang-lv">Izpētes gadījumi datu arhitektūrā.</span>
</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium transition-colors text-neutral-900 hover:text-indigo-600" href="#">
<span className="lang-en">View all projects</span>
<span className="lang-lv">Skatīt visus projektus</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl border overflow-hidden mb-4 group-hover:border-neutral-300 transition-all shadow-sm bg-neutral-100 border-neutral-200">
<div className="absolute inset-0 bg-gradient-to-tr via-transparent opacity-60 from-neutral-100 to-white"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded border shadow-xl p-4 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500 bg-white border-neutral-100">
<div className="h-2 w-1/3 rounded bg-neutral-100"></div>
<div className="h-32 w-full rounded border flex items-end p-2 gap-1 bg-indigo-50/50 border-indigo-100">
<div className="w-full h-[40%] rounded-t bg-indigo-200"></div>
<div className="w-full h-[70%] rounded-t bg-indigo-300"></div>
<div className="w-full h-[50%] rounded-t bg-indigo-200"></div>
<div className="w-full h-[80%] rounded-t bg-indigo-400"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium group-hover:text-indigo-600 transition-colors text-neutral-900">
<span className="lang-en">FinTech Analytics Overhaul</span>
<span className="lang-lv">FinTech analītikas uzlabošana</span>
</h3>
<p className="text-neutral-500 text-xs mt-1">
<span className="lang-en">Multi-touch attribution setup for a Series B fintech.</span>
<span className="lang-lv">Multi-touch atribūcijas iestatīšana Series B fintech uzņēmumam.</span>
</p>
</div>
<span className="text-xs border px-2 py-1 rounded text-neutral-500 border-neutral-200 bg-neutral-50">
<span className="lang-en">Audit &amp; Setup</span>
<span className="lang-lv">Audits un iestatīšana</span>
</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl border overflow-hidden mb-4 group-hover:border-neutral-300 transition-all shadow-sm bg-neutral-100 border-neutral-200">
<div className="absolute inset-0 bg-gradient-to-tr via-transparent opacity-60 from-neutral-100 to-white"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded border shadow-xl p-4 font-mono text-[10px] leading-relaxed overflow-hidden group-hover:scale-105 transition-transform duration-500 bg-white border-neutral-100 text-neutral-600">
<span className="text-blue-600">const</span> analytics = <span className="text-blue-600">new</span> Segment();
                                analytics.<span className="text-blue-600">track</span>(<span className="text-cyan-600">'Checkout Started'</span>, {
                                  value: <span className="text-indigo-600">99.00</span>,
                                  currency: <span className="text-cyan-600">'USD'</span>
                                });
                             </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium group-hover:text-indigo-600 transition-colors text-neutral-900">
<span className="lang-en">E-commerce Event Modeling</span>
<span className="lang-lv">E-komercijas notikumu modelēšana</span>
</h3>
<p className="text-neutral-500 text-xs mt-1">
<span className="lang-en">Standardizing data across web and mobile apps.</span>
<span className="lang-lv">Datu standartizācija starp tīmekli un mobilajām lietotnēm.</span>
</p>
</div>
<span className="text-xs border px-2 py-1 rounded text-neutral-500 border-neutral-200 bg-neutral-50">
<span className="lang-en">Implementation</span>
<span className="lang-lv">Ieviešana</span>
</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 border-y bg-neutral-50/70 border-neutral-200" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
<div className="space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">
<span className="lang-en block-context">Built by Engineers,<br/>for Marketers.</span>
<span className="lang-lv block-context">Inženieru radīts,<br/>mārketeriem domāts.</span>
</h2>
<p className="text-sm leading-relaxed text-neutral-600">
<span className="lang-en block-context">We realized that most marketing teams struggle not with strategy, but with the technical execution of their data stack.</span>
<span className="lang-lv block-context">Mēs sapratām, ka lielākā daļa mārketinga komandu cīnās nevis ar stratēģiju, bet gan ar savu datu risinājumu tehnisko izpildi.</span>
</p>
<p className="text-sm leading-relaxed text-neutral-600">
<span className="lang-en block-context">Datapulse was founded to solve the "implementation gap." We combine software engineering rigor with marketing acumen to build bulletproof analytics setups that scale.</span>
<span className="lang-lv block-context">Datapulse tika dibināts, lai atrisinātu "ieviešanas problēmu". Mēs apvienojam programmatūras inženierijas precizitāti ar mārketinga izpratni, lai veidotu stabilus analītikas risinājumus.</span>
</p>
<div className="pt-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full flex items-center justify-center border shadow-sm bg-white border-neutral-200">
<iconify-icon className="text-blue-900" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Alex Chen</div>
<div className="text-neutral-500 text-xs">
<span className="lang-en">Technical Lead &amp; Founder</span>
<span className="lang-lv">Tehniskais vadītājs un dibinātājs</span>
</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r rounded-2xl filter blur-xl from-indigo-200/20 to-blue-200/20"></div>
<div className="relative h-full w-full glass-panel rounded-2xl p-8 flex flex-col justify-center gap-4 bg-white/50">
<div className="flex items-start gap-3">
<div className="p-2 rounded border bg-indigo-50 text-indigo-600 border-indigo-100">
<iconify-icon icon="solar:verified-check-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900">
<span className="lang-en">Accuracy First</span>
<span className="lang-lv">Precizitāte pirmajā vietā</span>
</h4>
<p className="text-neutral-500 text-xs mt-1">
<span className="lang-en">We don't guess. We validate every event fired.</span>
<span className="lang-lv">Mēs nepaļaujamies uz minējumiem. Mēs pārbaudām katru notikumu.</span>
</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 rounded border bg-indigo-50 text-indigo-600 border-indigo-100">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900">
<span className="lang-en">Clean Code</span>
<span className="lang-lv">Tīrs kods</span>
</h4>
<p className="text-neutral-500 text-xs mt-1">
<span className="lang-en">Implementations that don't slow down your site.</span>
<span className="lang-lv">Ieviešana, kas nepalēnina jūsu vietnes darbību.</span>
</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 rounded border bg-indigo-50 text-indigo-600 border-indigo-100">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900">
<span className="lang-en">Privacy Focused</span>
<span className="lang-lv">Privātuma ievērošana</span>
</h4>
<p className="text-neutral-500 text-xs mt-1">
<span className="lang-en">GDPR and CCPA compliant configurations.</span>
<span className="lang-lv">GDPR un CCPA atbilstošas konfigurācijas.</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden animate-fade-in z-20 relative pt-10" id="contact-view">
<div className="max-w-3xl mx-auto px-6 mb-20">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center p-2 bg-neutral-100 rounded-full mb-6">
<iconify-icon className="text-indigo-600" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-neutral-900">
<span className="lang-en">Let's talk data.</span>
<span className="lang-lv">Parunāsim par datiem.</span>
</h1>
<p className="text-neutral-500 text-lg max-w-xl mx-auto">
<span className="lang-en block-context">Tell us about your stack, your problems, or your goals. We usually respond within 24 hours.</span>
<span className="lang-lv block-context">Pastāstiet mums par saviem rīkiem, problēmām vai mērķiem. Parasti atbildam 24 stundu laikā.</span>
</p>
</div>
<div className="glass-panel p-8 md:p-10 rounded-2xl bg-white/80">
<form className="space-y-6" id="contact-form" onsubmit="handleContactSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
<span className="lang-en">First Name</span>
<span className="lang-lv">Vārds</span>
</label>
<input className="w-full p-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" name="firstName" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
<span className="lang-en">Last Name</span>
<span className="lang-lv">Uzvārds</span>
</label>
<input className="w-full p-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
<span className="lang-en">Work Email</span>
<span className="lang-lv">Darba e-pasts</span>
</label>
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-400">
<iconify-icon icon="solar:mention-circle-linear"></iconify-icon>
</span>
<input className="w-full p-3 pl-10 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
<span className="lang-en">Project Type</span>
<span className="lang-lv">Projekta veids</span>
</label>
<select className="w-full p-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm text-neutral-600 appearance-none" name="projectType">
<option value="">Select a topic...</option>
<option value="migration">GA4 Migration</option>
<option value="implementation">Full Stack Implementation (Segment/CDP)</option>
<option value="audit">Analytics Audit</option>
<option value="other">Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
<span className="lang-en">Message</span>
<span className="lang-lv">Ziņa</span>
</label>
<textarea className="w-full p-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" name="message" placeholder="Tell us a bit about your project..." required="" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200 flex items-center justify-center gap-2" type="submit">
<span className="lang-en">Send Message</span>
<span className="lang-lv">Nosūtīt ziņu</span>
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>

<div className="h-6" id="form-feedback"></div>
</form>
</div>
</div>
</div>

<footer className="border-t border-neutral-200 bg-neutral-50/50 mt-auto">
<div className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">

<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-md">
<h2 className="text-3xl font-medium tracking-tight mb-6 text-neutral-900">
<span className="lang-en">Ready to trust your data?</span>
<span className="lang-lv">Vai esat gatavi uzticēties saviem datiem?</span>
</h2>
<p className="text-neutral-500 text-sm mb-8">
<span className="lang-en block-context">Schedule a free 15-minute discovery call to discuss your current analytics challenges.</span>
<span className="lang-lv block-context">Piesakiet bezmaksas 15 minūšu iepazīšanās zvanu, lai apspriestu jūsu pašreizējos analītikas izaicinājumus.</span>
</p>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24">
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">
<span className="lang-en">Services</span>
<span className="lang-lv">Pakalpojumi</span>
</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="transition-colors hover:text-black" href="#"><span className="lang-en">Implementation</span><span className="lang-lv">Ieviešana</span></a></li>
<li><a className="transition-colors hover:text-black" href="#"><span className="lang-en">Audits</span><span className="lang-lv">Auditi</span></a></li>
<li><a className="transition-colors hover:text-black" href="#"><span className="lang-en">GA4 Setup</span><span className="lang-lv">GA4 Iestatīšana</span></a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">
<span className="lang-en">Company</span>
<span className="lang-lv">Uzņēmums</span>
</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="transition-colors hover:text-black" href="#"><span className="lang-en">About</span><span className="lang-lv">Par mums</span></a></li>
<li><a className="transition-colors hover:text-black" href="#"><span className="lang-en">Contact</span><span className="lang-lv">Kontakti</span></a></li>
<li><a className="transition-colors hover:text-black" href="#"><span className="lang-en">Privacy</span><span className="lang-lv">Privātums</span></a></li>
</ul>
</div>
</div>
</div>

<div className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-200">

<div className="flex flex-col md:flex-row items-center gap-6 order-2 md:order-1">
<div className="font-semibold text-lg tracking-tight flex items-center gap-2 text-neutral-900">
<div className="relative flex items-center justify-center w-5 h-5 rounded bg-neutral-100 text-indigo-600">
<iconify-icon height="14" icon="solar:heart-pulse-linear" width="14"></iconify-icon>
</div>
                            DATAPULSE
                        </div>
<div className="text-xs text-neutral-500">
<span className="lang-en">© 2026 Datapulse Analytics. All rights reserved.</span>
<span className="lang-lv">© 2026 Datapulse Analytics. Visas tiesības aizsargātas.</span>
</div>
</div>

<div className="flex gap-4 text-neutral-400 order-1 md:order-2">
<a aria-label="Facebook" className="transition-colors hover:text-blue-600 hover:scale-110 transform duration-200 p-2 hover:bg-neutral-100 rounded-full" href="#">
<iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
<a aria-label="Instagram" className="transition-colors hover:text-pink-600 hover:scale-110 transform duration-200 p-2 hover:bg-neutral-100 rounded-full" href="#">
<iconify-icon icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="transition-colors hover:text-blue-700 hover:scale-110 transform duration-200 p-2 hover:bg-neutral-100 rounded-full" href="#">
<iconify-icon icon="ri:linkedin-fill" width="20"></iconify-icon>
</a>
<a aria-label="Twitter / X" className="transition-colors hover:text-black hover:scale-110 transform duration-200 p-2 hover:bg-neutral-100 rounded-full" href="#">
<iconify-icon icon="ri:twitter-x-fill" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
