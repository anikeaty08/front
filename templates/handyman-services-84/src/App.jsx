import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        // Exact form submission script provided in requirements
        async function odoslatFormular(event) {
            event.preventDefault();
            
            const button = event.target.querySelector('button[type="submit"]');
            const span = button.querySelector('span');
            const originalText = span.textContent;
            span.textContent = 'Odosielam...';
            button.disabled = true;
            
            const formData = {
                user_id: 'kd71k8tt2wjch9s55b064z50sd820wac',
                name: document.getElementById('meno').value,
                phone: document.getElementById('telefon').value,
                email: document.getElementById('email').value || '',
                service: document.getElementById('sluzba').value,
                message: document.getElementById('sprava').value || '',
                source: 'web'
            };
            
            try {
                const response = await fetch('https://brilliant-warbler-849.eu-west-1.convex.site/api/new-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    document.getElementById('formular').innerHTML = '<div style="text-align:center;padding:40px"><h3 style="color:#00e676; font-size:1.5rem; font-weight:600; margin-bottom:0.5rem">✅ Ďakujeme!</h3><p style="color:#d4d4d8; margin-bottom:1rem">Váš dopyt bol odoslaný. Ozveme sa vám do 24 hodín.</p><p style="opacity:0.6; font-size:0.875rem">Ak je to urgentné, volajte: +421 900 123 456</p></div>';
                } else {
                    alert('❌ Chyba: ' + (result.error || 'Skúste to znova'));
                    span.textContent = originalText;
                    button.disabled = false;
                }
            } catch (error) {
                alert('❌ Nepodarilo sa odoslať. Skúste to znova alebo nám zavolajte.');
                span.textContent = originalText;
                button.disabled = false;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00d2ff] opacity-[0.05] blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00e676] opacity-[0.05] blur-[120px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white" href="#">
<span className="text-[#00d2ff]">⚡</span> MajsterFix <span className="text-zinc-500 text-sm font-medium tracking-normal">s.r.o.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#recenzie">Recenzie</a>
<a className="text-sm font-medium text-[#0a0e1a] bg-[#00d2ff] px-4 py-2 rounded-lg hover:bg-[#00b8e6] transition-colors shadow-[0_0_15px_rgba(0,210,255,0.2)]" href="#kontakt">Kontakt</a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-6xl mx-auto flex flex-col items-center text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00d2ff] text-xs font-medium mb-8">
<iconify-icon icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Pôsobíme v Bratislave a okolí
        </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-4xl leading-tight mb-6">
            Profesionálne remeselné práce na ktoré sa môžete spoľahnúť
        </h1>
<p className="text-lg md:text-xl font-medium text-[#00d2ff] tracking-tight mb-4">
            Maľovanie · Elektroinštalácia · Rekonštrukcie · Podlahy
        </p>
<p className="text-base text-zinc-400 max-w-2xl mb-10">
            Kvalitná práca, férové ceny a dodržané termíny. Zverte svoj domov do rúk odborníkov, pre ktorých je detail na prvom mieste.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3.5 bg-[#00d2ff] text-[#0a0e1a] text-sm font-semibold rounded-xl hover:bg-[#00b8e6] transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)] flex items-center justify-center gap-2 group" href="#kontakt">
                Nezáväzná cenová ponuka
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3.5 bg-white/5 text-white text-sm font-medium rounded-xl hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center" href="#sluzby">
                Naše služby
            </a>
</div>
</section>

<section className="relative z-10 py-10 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6">
<p className="text-sm font-medium text-center text-zinc-400 mb-8 uppercase tracking-wider">Prečo si vybrať MajsterFix?</p>
<div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-12 reveal">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] shrink-0">
<iconify-icon className="text-lg" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">15+ rokov skúseností</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] shrink-0">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">500+ spokojných zákazníkov</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] shrink-0">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">Férové ceny bez skrytých poplatkov</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] shrink-0">
<iconify-icon className="text-lg" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">Dodržané termíny – garantujeme</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 scroll-mt-16" id="sluzby">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center reveal">Naše služby</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
<div className="w-14 h-14 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        🎨
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Maľovanie</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Interiérové aj exteriérové maľovanie. Presné, čisté a rýchle. Oživíme vaše steny a dodáme priestoru nový nádych.</p>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
<div className="w-14 h-14 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        ⚡
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Elektroinštalácia</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Kompletné elektrické rozvody, opravy a revízie. Bezpečnosť a odbornosť sú u nás na prvom mieste.</p>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
<div className="w-14 h-14 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        🏗️
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Rekonštrukcie</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Bytové aj domové rekonštrukcie na kľúč. Od búrania až po finálne úpravy s dôrazom na každý detail.</p>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
<div className="w-14 h-14 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        🪵
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Podlahy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Montáž a renovácia všetkých typov podláh. Plávajúce, vinylové, drevené podlahy pripravené na záťaž.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-white/[0.02] border-y border-white/5 scroll-mt-16" id="recenzie">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center reveal">Čo hovoria naši zákazníci</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">

<div className="bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 shadow-xl">
<div className="flex gap-1 mb-4 text-[#00d2ff] text-sm">
                        ⭐⭐⭐⭐⭐
                    </div>
<p className="text-sm text-zinc-300 italic mb-6">"Výborná práca s maľovaním bytu. Rýchlo, čisto a za dobrú cenu. Odporúčam!"</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">JN</div>
<div>
<p className="text-sm font-medium text-white">Ján N.</p>
<p className="text-xs text-zinc-500">Bratislava</p>
</div>
</div>
</div>

<div className="bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 shadow-xl">
<div className="flex gap-1 mb-4 text-[#00d2ff] text-sm">
                        ⭐⭐⭐⭐⭐
                    </div>
<p className="text-sm text-zinc-300 italic mb-6">"Rekonštrukcia kúpeľne prebehla presne podľa plánu. Profesionálny prístup."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">MK</div>
<div>
<p className="text-sm font-medium text-white">Mária K.</p>
<p className="text-xs text-zinc-500">Pezinok</p>
</div>
</div>
</div>

<div className="bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 shadow-xl">
<div className="flex gap-1 mb-4 text-[#00d2ff] text-sm">
                        ⭐⭐⭐⭐⭐
                    </div>
<p className="text-sm text-zinc-300 italic mb-6">"Spoľahlivý elektrikár, prišiel načas a prácu odviedol perfektne."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">PH</div>
<div>
<p className="text-sm font-medium text-white">Peter H.</p>
<p className="text-xs text-zinc-500">Senec</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 scroll-mt-16" id="kontakt">
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Máte záujem? Napíšte nám!</h2>
<p className="text-base text-zinc-400">Vyplňte formulár a ozveme sa vám do 24 hodín s cenovou ponukou.</p>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
<form className="space-y-6 relative z-10" id="formular" onsubmit="odoslatFormular(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="meno">Meno a priezvisko *</label>
<input className="w-full bg-[#0a0e1a]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all" id="meno" placeholder="Ján Novák" required="" type="text"/>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="telefon">Telefón *</label>
<input className="w-full bg-[#0a0e1a]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all" id="telefon" placeholder="+421 9XX XXX XXX" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="email">Email</label>
<input className="w-full bg-[#0a0e1a]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all" id="email" placeholder="vas@email.sk" type="email"/>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="sluzba">O akú službu máte záujem? *</label>
<select className="w-full bg-[#0a0e1a]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all cursor-pointer" id="sluzba" required="">
<option className="bg-[#0a0e1a] text-zinc-500" disabled="" selected="" value="">Vyberte službu...</option>
<option className="bg-[#0a0e1a] text-white" value="Maľovanie">Maľovanie</option>
<option className="bg-[#0a0e1a] text-white" value="Elektroinštalácia">Elektroinštalácia</option>
<option className="bg-[#0a0e1a] text-white" value="Rekonštrukcie">Rekonštrukcie</option>
<option className="bg-[#0a0e1a] text-white" value="Podlahy">Podlahy</option>
<option className="bg-[#0a0e1a] text-white" value="Iné">Iné</option>
</select>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="sprava">Správa</label>
<textarea className="w-full bg-[#0a0e1a]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all resize-y" id="sprava" placeholder="Popíšte čo potrebujete, rozmer priestoru, termín..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-[#00d2ff] text-[#0a0e1a] text-base font-semibold rounded-xl hover:bg-[#00b8e6] transition-all shadow-[0_0_20px_rgba(0,210,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2" type="submit">
<span>Odoslať dopyt</span>
<div className="spinner"></div>
</button>
</form>
</div>
</div>
</section>

<footer className="relative z-10 bg-[#0a0e1a] border-t border-white/10 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-center md:text-left">
<div>
<a className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white mb-4" href="#">
<span className="text-[#00d2ff]">⚡</span> MajsterFix <span className="text-zinc-500 text-sm font-medium tracking-normal">s.r.o.</span>
</a>
<p className="text-sm text-zinc-400">Profesionálne remeselné práce na ktoré sa môžete spoľahnúť. Kvalita a férovosť na prvom mieste.</p>
</div>
<div className="flex flex-col md:items-center">
<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Kontakt</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center justify-center md:justify-start gap-2">
<iconify-icon className="text-[#00d2ff]" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+421900123456">+421 900 123 456</a>
</li>
<li className="flex items-center justify-center md:justify-start gap-2">
<iconify-icon className="text-[#00d2ff]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@majsterfix.sk">info@majsterfix.sk</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:items-end">
<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider text-center md:text-left">Adresa</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start justify-center md:justify-start gap-2">
<iconify-icon className="text-[#00d2ff] mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Bratislava a okolie<br/>Slovenská republika</span>
</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-2">
<p className="text-xs text-zinc-500">© 2026 MajsterFix s.r.o. Všetky práva vyhradené</p>
<p className="text-[10px] text-zinc-600">Webstránka vytvorená cez LocalFlow AI</p>
</div>
</div>
</footer>



    </>
  );
}
