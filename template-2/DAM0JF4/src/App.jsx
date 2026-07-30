import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Slider functionality
        const slider = document.getElementById('cashSlider');
        const cashAmount = document.getElementById('cashAmount');
        
        function updateSlider() {
            const value = parseInt(slider.value);
            const min = parseInt(slider.min);
            const max = parseInt(slider.max);
            const percentage = ((value - min) / (max - min)) * 100;
            
            slider.style.background = `linear-gradient(to right, #9ACB5D 0%, #9ACB5D ${percentage}%, rgba(255,255,255,0.2) ${percentage}%, rgba(255,255,255,0.2) 100%)`;
            cashAmount.textContent = value.toLocaleString('de-DE');
            
            // Update all amounts dynamically
            updateAmounts(value);
        }
        
        function setCashAmount(amount) {
            slider.value = amount;
            updateSlider();
            
            // Update quick buttons visual state
            document.querySelectorAll('.bg-\\[\\#9ACB5D\\]').forEach(btn => {
                if (btn.onclick && btn.onclick.toString().includes(amount.toString())) {
                    btn.className = btn.className.replace('bg-white/10 hover:bg-white/20 border border-white/20', 'bg-[#9ACB5D] hover:bg-[#7A9E4B]');
                } else if (btn.onclick) {
                    btn.className = btn.className.replace('bg-[#9ACB5D] hover:bg-[#7A9E4B]', 'bg-white/10 hover:bg-white/20 border border-white/20');
                }
            });
        }
        
        function updateAmounts(baseAmount) {
            // Update amounts in content areas
            document.getElementById('direktverkauf-amount').textContent = baseAmount.toLocaleString('de-DE');
            document.getElementById('beleihung-amount').textContent = Math.round(baseAmount * 0.8).toLocaleString('de-DE');
            document.getElementById('salerent-amount').textContent = baseAmount.toLocaleString('de-DE');
            document.getElementById('monthly-rate').textContent = Math.round(baseAmount * 0.017) + ' €';
        }
        
        function selectOption(option) {
            // Remove active state from all tabs
            document.querySelectorAll('.option-tab').forEach(tab => {
                tab.classList.remove('active-tab');
                if (option === 'direktverkauf' && tab.id === 'tab-direktverkauf') {
                    tab.classList.add('border-[#9ACB5D]');
                    tab.classList.remove('border-gray-200');
                } else if (option === 'beleihung' && tab.id === 'tab-beleihung') {
                    tab.classList.add('border-[#9ACB5D]');
                    tab.classList.remove('border-gray-200');
                } else if (option === 'salerent' && tab.id === 'tab-salerent') {
                    tab.classList.add('border-blue-500');
                    tab.classList.remove('border-gray-200');
                } else {
                    tab.classList.add('border-gray-200');
                    tab.classList.remove('border-[#9ACB5D]', 'border-blue-500');
                }
            });
            
            // Hide all content
            document.querySelectorAll('.option-content').forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show selected content
            document.getElementById(`content-${option}`).classList.remove('hidden');
            
            // Add active state to selected tab
            document.getElementById(`tab-${option}`).classList.add('active-tab');
        }
        
        slider.addEventListener('input', updateSlider);
        updateSlider();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<section className="relative bg-white pt-20 pb-20" id="cash-optionen">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-[#2B3E51] mb-4 tracking-tight" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                    Verfügbare Finanzierungsoptionen
                </h2>
<p className="text-xl text-[#2B3E51] opacity-80 max-w-3xl mx-auto">
                    Wählen Sie die optimale Lösung für Ihre finanzielle Situation
                </p>
</div>

<div className="max-w-2xl mx-auto mb-16">
<div className="bg-gradient-to-br from-[#2B3E51] via-[#3A5068] to-[#2B3E51] rounded-3xl p-10 text-white shadow-2xl">
<div className="text-center mb-8">
<div className="w-20 h-20 bg-[#9ACB5D] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
<svg className="lucide lucide-euro w-10 h-10 text-white" data-lucide="euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="C6 12h12"></path><path d="C6 8h12"></path><path d="m6 21 15-15"></path><path d="m21 6-15 15"></path></svg>
</div>
<h3 className="text-3xl font-semibold mb-3" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                            Wie viel Bargeld benötigen Sie?
                        </h3>
<p className="text-white/80 text-lg">
                            Bewegen Sie den Schieberegler für eine personalisierte Beratung
                        </p>
</div>

<div className="text-center mb-8">
<div className="text-6xl font-bold mb-2 text-[#9ACB5D]" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
<span id="cashAmount">25.000</span><span className="text-4xl"> €</span>
</div>
<div className="text-white/70 text-lg">
                            Gewünschte Auszahlungssumme
                        </div>
</div>

<div className="space-y-6">
<div className="relative px-4">
<input className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer slider shadow-inner" id="cashSlider" max="100000" min="5000" type="range" value="25000" />
<div className="flex justify-between text-sm text-white/60 mt-2">
<span>5.000 €</span>
<span>100.000 €</span>
</div>
</div>

<div className="flex justify-center space-x-3 mt-6">
<button className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 border border-white/20" onClick={(e) => { setCashAmount(15000) }}>
                                15.000 €
                            </button>
<button className="bg-[#9ACB5D] hover:bg-[#7A9E4B] text-white py-2 px-4 rounded-full text-sm font-medium transition-all duration-200" onClick={(e) => { setCashAmount(25000) }}>
                                25.000 €
                            </button>
<button className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 border border-white/20" onClick={(e) => { setCashAmount(50000) }}>
                                50.000 €
                            </button>
<button className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 border border-white/20" onClick={(e) => { setCashAmount(75000) }}>
                                75.000 €
                            </button>
</div>
<div className="text-center mt-8">
<button className="bg-[#9ACB5D] text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-[#7A9E4B] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg">
<svg className="lucide lucide-calculator w-5 h-5 inline mr-2" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
                                Kostenlose Bewertung anfragen
                            </button>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto">
<div className="text-center mb-10">
<h3 className="text-2xl font-semibold text-[#2B3E51] mb-4" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                        Wählen Sie Ihre bevorzugte Option
                    </h3>
<p className="text-gray-600">Klicken Sie auf eine Option, um detaillierte Informationen und Ihre persönlichen Konditionen zu sehen</p>
</div>

<div className="flex flex-col lg:flex-row gap-4 mb-8">
<button className="option-tab flex-1 bg-white border-2 border-gray-200 rounded-2xl p-6 text-left hover:border-[#9ACB5D] hover:shadow-lg transition-all duration-300 cursor-pointer" id="tab-direktverkauf" onClick={(e) => { selectOption('direktverkauf') }}>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-[#9ACB5D] rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-zap w-6 h-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-[#2B3E51] mb-1" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>Direktverkauf</h4>
<p className="text-gray-600 text-sm">Sofortige Vollzahlung</p>
<div className="text-2xl font-bold text-[#9ACB5D] mt-2" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                                    bis 100%
                                </div>
</div>
</div>
</button>
<button className="option-tab flex-1 bg-white border-2 border-[#9ACB5D] rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-300 cursor-pointer active-tab" id="tab-beleihung" onClick={(e) => { selectOption('beleihung') }}>
<div className="absolute -top-2 right-4">
<span className="bg-[#9ACB5D] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                Empfohlen
                            </span>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-[#2B3E51] rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-shield-check w-6 h-6 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-[#2B3E51] mb-1" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>Fahrzeugbeleihung</h4>
<p className="text-gray-600 text-sm">Kredit gegen KFZ-Brief</p>
<div className="text-2xl font-bold text-[#2B3E51] mt-2" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                                    bis 80%
                                </div>
</div>
</div>
</button>
<button className="option-tab flex-1 bg-white border-2 border-gray-200 rounded-2xl p-6 text-left hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer" id="tab-salerent" onClick={(e) => { selectOption('salerent') }}>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-refresh-ccw w-6 h-6 text-white" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M21 21v-5h-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-[#2B3E51] mb-1" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>Sale & Rent Back</h4>
<p className="text-gray-600 text-sm">Verkaufen und zurückleasen</p>
<div className="text-2xl font-bold text-blue-500 mt-2" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                                    100% + Nutzung
                                </div>
</div>
</div>
</button>
</div>

<div className="bg-white rounded-3xl shadow-xl overflow-hidden">

<div className="option-content hidden p-10" id="content-direktverkauf">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-3xl font-semibold text-[#2B3E51] mb-6" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                                    Direktverkauf - Maximaler Erlös
                                </h3>
<div className="space-y-4 mb-8">
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Höchste Auszahlungssumme</span>
</div>
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Keine laufenden Kosten</span>
</div>
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Schnelle Abwicklung</span>
</div>
</div>
<button className="bg-[#9ACB5D] text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-[#7A9E4B] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    Jetzt verkaufen
                                </button>
</div>
<div className="text-center">
<div className="text-6xl font-bold text-[#9ACB5D] mb-4" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
<span id="direktverkauf-amount">25.000</span> €
                                </div>
<div className="text-gray-500 text-lg mb-6">Geschätzte Auszahlung bei Direktverkauf</div>
<div className="bg-gray-50 rounded-2xl p-6">
<div className="text-sm text-gray-600 mb-2">Auszahlungsquote</div>
<div className="text-2xl font-semibold text-[#2B3E51]">bis 100%</div>
</div>
</div>
</div>
</div>

<div className="option-content p-10" id="content-beleihung">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-3xl font-semibold text-[#2B3E51] mb-6" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                                    Fahrzeugbeleihung - Beste Balance
                                </h3>
<div className="space-y-4 mb-8">
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Fahrzeug weiter nutzen</span>
</div>
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Flexible Rückzahlung</span>
</div>
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Diskrete Abwicklung</span>
</div>
</div>
<button className="bg-[#2B3E51] text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-[#1E2E3D] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    Details erfahren
                                </button>
</div>
<div className="text-center">
<div className="text-6xl font-bold text-[#2B3E51] mb-4" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
<span id="beleihung-amount">20.000</span> €
                                </div>
<div className="text-gray-500 text-lg mb-6">Sofortige Auszahlung bei Beleihung</div>
<div className="bg-gray-50 rounded-2xl p-6">
<div className="text-sm text-gray-600 mb-2">Auszahlungsquote</div>
<div className="text-2xl font-semibold text-[#2B3E51]">bis 80%</div>
</div>
</div>
</div>
</div>

<div className="option-content hidden p-10" id="content-salerent">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-3xl font-semibold text-[#2B3E51] mb-6" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
                                    Sale & Rent Back - Vollständige Lösung
                                </h3>
<div className="space-y-4 mb-8">
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Vollständige Liquidität</span>
</div>
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Dauerhaftes Nutzungsrecht</span>
</div>
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#9ACB5D] mr-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-gray-700 text-lg">Planbare monatliche Raten</span>
</div>
</div>
<button className="bg-blue-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    Konditionen prüfen
                                </button>
</div>
<div className="text-center">
<div className="text-6xl font-bold text-blue-500 mb-4" style={{fontFamily: `'Titillium Web', sans-serif`, fontWeight: `600`}}>
<span id="salerent-amount">25.000</span> €
                                </div>
<div className="text-gray-500 text-lg mb-6">Vollständige Auszahlung + Weiternutzung</div>
<div className="bg-gray-50 rounded-2xl p-6">
<div className="text-sm text-gray-600 mb-2">Monatliche Rate ab</div>
<div className="text-2xl font-semibold text-blue-500" id="monthly-rate">420 €</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
