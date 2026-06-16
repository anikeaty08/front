import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function updateForm(type) {
      const homeInfo = document.getElementById('homeInfo');
      const addressField = document.getElementById('addressField');
      const locationField = document.getElementById('locationField');

      if (type === 'home') {
        homeInfo.classList.remove('hidden');
        addressField.classList.remove('hidden');
        locationField.classList.add('hidden');
      } else {
        homeInfo.classList.add('hidden');
        addressField.classList.add('hidden');
        locationField.classList.remove('hidden');
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-slate-900">TUDORMED</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#services">Servicii</a>
<a className="hover:text-emerald-600 transition-colors" href="#team">Echipa</a>
<a className="hover:text-emerald-600 transition-colors" href="#locations">Locații</a>
<a className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200/50 flex items-center gap-2" href="#booking">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
            Programare Online
          </a>
</div>

<button className="md:hidden p-2 text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium mb-6 border border-emerald-100">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Acreditat ISO 15189
        </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-8">
          Excelență în analize <br/>
<span className="text-slate-400">medicale și neurologie.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl font-light">
          Oferim o gamă largă de analize medicale de cea mai înaltă calitate în colaborare cu parteneri renumiți și servicii specializate de neurologie pentru diagnostic și tratament corect.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-medium" href="#booking">
            Programează o vizită
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<span className="text-sm text-slate-600 font-medium">Parteneri: MedLife, Synevo, Tody</span>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-emerald-100/40 to-blue-50/40 rounded-full blur-3xl -z-10"></div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Serviciile Noastre</h2>
<p className="text-slate-500 max-w-xl font-light">Soluții medicale integrate pentru sănătatea dumneavoastră și a familiei dumneavoastră.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Laborator Analize</h3>
<p className="text-slate-500 mb-6 font-light leading-relaxed">
            Gamă completă de investigații paraclinice: biochimie, hematologie, imunologie și microbiologie. Rezultate rapide și precise garantate de tehnologie modernă.
          </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Recoltare la domiciliu
            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Rezultate online
            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Parteneriat CAS
            </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:brain-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Neurologie</h3>
<p className="text-slate-500 mb-6 font-light leading-relaxed">
            Diagnostic și tratament pentru afecțiuni ale sistemului nervos central și periferic. Abordare integrată pentru cefalee, amețeli, dureri cronice și recuperare.
          </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Consultanță de specialitate
            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Planuri de tratament personalizate
            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Monitorizare periodică
            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Echipa Medicală</h2>
<p className="text-slate-500 font-light">Profesioniști dedicați sănătății dumneavoastră.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
<span className="text-xl font-medium">TP</span>
</div>
<h4 className="text-lg font-medium text-slate-900">Dr. Tudor Pungan</h4>
<p className="text-emerald-600 text-sm mb-3">Medic Specialist</p>
<p className="text-sm text-slate-500 font-light">Coordonator laborator și specialist cu vastă experiență în diagnosticare clinică.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900">Echipa Neurologie</h4>
<p className="text-blue-600 text-sm mb-3">Specialiști Neurologi</p>
<p className="text-sm text-slate-500 font-light">Medici dedicați diagnosticării și tratamentului afecțiunilor neurologice.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900">Asistenți Laborator</h4>
<p className="text-indigo-600 text-sm mb-3">Personal Calificat</p>
<p className="text-sm text-slate-500 font-light">Echipă empatică și profesionistă pentru recoltarea probelor în siguranță.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="booking">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Programare Online</h2>
<p className="text-slate-500 font-light">Selectați tipul serviciului pentru a începe.</p>
</div>
<div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
<form className="space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="service" onchange="updateForm('lab')" type="radio" value="lab"/>
<div className="p-4 rounded-xl border border-slate-200 text-center hover:bg-slate-50 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 transition-all">
<iconify-icon className="mb-2 text-2xl" icon="solar:test-tube-linear"></iconify-icon>
<div className="text-sm font-medium">Laborator</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" onchange="updateForm('home')" type="radio" value="home"/>
<div className="p-4 rounded-xl border border-slate-200 text-center hover:bg-slate-50 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 transition-all">
<iconify-icon className="mb-2 text-2xl" icon="solar:home-linear"></iconify-icon>
<div className="text-sm font-medium">Recoltare Domiciliu</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" onchange="updateForm('neuro')" type="radio" value="neuro"/>
<div className="p-4 rounded-xl border border-slate-200 text-center hover:bg-slate-50 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 transition-all">
<iconify-icon className="mb-2 text-2xl" icon="solar:brain-linear"></iconify-icon>
<div className="text-sm font-medium">Neurologie</div>
</div>
</label>
</div>

<div className="hidden p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-800" id="homeInfo">
<div className="flex gap-2">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<div>
<strong>Condiții deplasare:</strong>
<ul className="mt-1 list-disc list-inside opacity-80">
<li>Taxă deplasare (&lt;3km): 15 RON</li>
<li>Taxă deplasare (&gt;3km): 4 RON/km</li>
<li>Taxă unică recoltare: 15 RON</li>
<li>Nu se recoltează la domiciliu pentru copii sub 10 ani.</li>
</ul>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Nume și Prenume</label>
<input className="w-full px-4 py-3 rounded-xl custom-input" placeholder="ex. Ion Popescu" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Telefon</label>
<input className="w-full px-4 py-3 rounded-xl custom-input" placeholder="07xx xxx xxx" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Data Preferată</label>
<input className="w-full px-4 py-3 rounded-xl custom-input text-slate-500" type="date"/>
</div>
<div className="space-y-2" id="locationField">
<label className="text-sm font-medium text-slate-700">Locație</label>
<select className="w-full px-4 py-3 rounded-xl custom-input text-slate-600 bg-white">
<option>Târgu Jiu - 23 August</option>
<option>Motru - Policlinică</option>
</select>
</div>

<div className="space-y-2 hidden col-span-2" id="addressField">
<label className="text-sm font-medium text-slate-700">Adresa Domiciliului</label>
<input className="w-full px-4 py-3 rounded-xl custom-input" placeholder="Strada, Număr, Bloc..." type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Mesaj sau Detalii (Opțional)</label>
<textarea className="w-full px-4 py-3 rounded-xl custom-input h-24 resize-none" placeholder="Alte detalii..."></textarea>
</div>
<button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-emerald-200" type="button">
            Confirmă Programarea
          </button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-8">Locații și Contact</h2>
<div className="space-y-8">

<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<span className="text-emerald-400 font-bold">TJ</span>
</div>
<div>
<h3 className="text-xl font-medium mb-2">Târgu Jiu</h3>
<div className="space-y-2 text-slate-400 font-light text-sm">
<p><strong className="text-white">Laborator:</strong> Str. 23 August, nr. 53 (Poșta Telekom)</p>
<p>Luni - Vineri: 07:00 - 17:00 | Sâmbătă: 08:00 - 12:00</p>
<p className="mt-2"><strong className="text-white">Punct Recoltare:</strong> Str. 23 August, nr. 1B (lângă Policlinica 700)</p>
<p>Luni - Vineri: 07:00 - 11:00</p>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<span className="text-emerald-400 font-bold">M</span>
</div>
<div>
<h3 className="text-xl font-medium mb-2">Motru</h3>
<div className="space-y-2 text-slate-400 font-light text-sm">
<p>Str. Carol Davilla, nr. 4, et. 1, camera 31 (Policlinică)</p>
<p>Partener: CLINIC LIFE BDS</p>
<p>Luni - Vineri: 07:30 - 11:30</p>
<p>Tel: 0756.103.865</p>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800">
<p className="text-sm text-slate-400 mb-4">Telefoane Programări:</p>
<div className="flex flex-wrap gap-4">
<a className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-white text-sm" href="tel:0372394737">0372.394.737</a>
<a className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-white text-sm" href="tel:0726282832">0726.282.832</a>
<a className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors text-white text-sm flex items-center gap-2" href="https://wa.me/40726282832">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp
                </a>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 group">

<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-xs">
<div className="flex items-center gap-2 text-emerald-400 mb-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium">Navighează</span>
</div>
<p className="text-xs text-slate-300">Apăsați pentru a deschide locația în Google Maps</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-emerald-900 text-emerald-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800/50">
<div className="p-4">
<div className="text-4xl font-semibold mb-2">ISO 15189</div>
<div className="text-emerald-200/80 text-sm">Laborator Acreditat RENAR</div>
</div>
<div className="p-4">
<div className="text-4xl font-semibold mb-2">4.9/5</div>
<div className="text-emerald-200/80 text-sm">Satisfacție Pacienți</div>
</div>
<div className="p-4">
<div className="text-4xl font-semibold mb-2">15+ Ani</div>
<div className="text-emerald-200/80 text-sm">Experiență Medicală</div>
</div>
</div>
<div className="mt-16 bg-emerald-800/30 p-8 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm border border-emerald-700/50">
<div className="flex justify-center gap-1 mb-4 text-emerald-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg italic font-light mb-4">"Profesionalism și rapiditate. Rezultatele au venit online în aceeași zi, iar personalul a fost extrem de amabil."</p>
<div className="text-sm font-medium opacity-70">- Maria I., Pacient</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-900">TUDORMED</span>
</div>
<p className="text-slate-500 text-sm font-light max-w-xs">
            Laborator de analize medicale și servicii de neurologie la standarde europene.
          </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Link-uri Utile</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-emerald-600" href="#">Despre Noi</a></li>
<li><a className="hover:text-emerald-600" href="#">Politica GDPR</a></li>
<li><a className="hover:text-emerald-600" href="#">Termeni și Condiții</a></li>
<li><a className="hover:text-emerald-600" href="#">ANPC</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Parteneri</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li>MedLife</li>
<li>Synevo</li>
<li>Synlab</li>
<li>Tody Laboratories</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
<div>© 2024 Tudormed. Toate drepturile rezervate.</div>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#">Confidențialitate</a>
<a className="hover:text-slate-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
