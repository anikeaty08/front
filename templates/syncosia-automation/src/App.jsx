import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Page Switching Logic
        const pages = ['home', 'contact', 'impressum', 'datenschutz'];
        
        function switchPage(pageId) {
            // Hide all pages securely
            pages.forEach(p => {
                const el = document.getElementById('page-' + p);
                if (el) {
                    el.classList.add('hidden');
                    el.classList.remove('block');
                }
            });
            
            // Show target page
            const targetPage = document.getElementById('page-' + pageId);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('block');
            }
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Reset and trigger animations purely for the newly shown page
            setTimeout(() => {
                initScrollAnimations();
            }, 100);
        }

        // FAQ Toggle Logic
        function toggleFaq(element) {
            const parent = element.parentElement;
            // Close others
            const allItems = document.querySelectorAll('.faq-item');
            allItems.forEach(item => {
                if(item !== parent && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            // Toggle clicked
            parent.classList.toggle('active');
        }

        // Scroll Reveal Animations setup globally to prevent memory leaks during page switches
        let scrollObserver;

        function initScrollAnimations() {
            if (scrollObserver) {
                scrollObserver.disconnect();
            }

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Re-apply reveal classes before observing to guarantee fade-in effect on page switch
            document.querySelectorAll('.reveal').forEach((el) => {
                // Nur ausblenden, wenn das Element auf der aktuell sichtbaren Seite liegt
                if(el.closest('main:not(.hidden)')) {
                    el.classList.add('opacity-0', 'translate-y-8');
                    el.classList.remove('opacity-100', 'translate-y-0');
                    scrollObserver.observe(el);
                }
            });
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#0B0F1A]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="hover:opacity-80 transition-opacity text-xl font-medium text-white tracking-tighter" href="#" onclick="window.location.reload(); return false;">
                SYNCOSIA
            </a>

<div className="flex items-center gap-6 text-sm font-light">
<button className="text-[#E5E7EB] hover:text-white transition-colors cursor-pointer" onclick="switchPage('home')" type="button">Startseite</button>
<button className="text-[#E5E7EB] hover:text-white transition-colors cursor-pointer" onclick="switchPage('contact')" type="button">Kontakt</button>
</div>
</div>
</nav>

<main className="flex-grow pt-20 block" id="page-home">

<section className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="flex-1 text-center lg:text-left reveal transition-all duration-[800ms] ease-out">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] mb-6">
                    Automatisierung für Ihr Unternehmen <span className="text-[#2563EB]">neu definiert</span>
</h1>
<p className="text-lg text-[#E5E7EB] font-light mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Optimieren Sie Prozesse, sparen Sie Zeit und steigern Sie Ihren Umsatz – mit maßgeschneiderten Automationen.
                </p>
<button className="inline-flex items-center justify-center bg-[#2563EB] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300" onclick="switchPage('contact')" type="button">
                    Jetzt starten
                </button>
</div>

<div className="flex-1 w-full max-w-lg animate-float reveal transition-all duration-[800ms] ease-out delay-100">
<div className="relative bg-[#0B0F1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden aspect-[16/10] flex flex-col">

<div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/[0.02] shrink-0">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>

<div className="flex-1 relative bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<svg className="w-full h-full absolute inset-0 z-10" viewbox="0 0 800 500">

<path className="animate-dash" d="M 120 250 L 320 250" fill="none" stroke="#4B5563" stroke-dasharray="8 8" strokeWidth="2.5"></path>
<path className="animate-dash" d="M 320 250 C 420 250, 420 125, 520 125" fill="none" stroke="#4B5563" stroke-dasharray="8 8" strokeWidth="2.5"></path>
<path className="animate-dash" d="M 320 250 L 520 250" fill="none" stroke="#4B5563" stroke-dasharray="8 8" strokeWidth="2.5"></path>
<path className="animate-dash" d="M 320 250 C 420 250, 420 375, 520 375" fill="none" stroke="#4B5563" stroke-dasharray="8 8" strokeWidth="2.5"></path>
<path className="animate-dash" d="M 520 125 L 720 125" fill="none" stroke="#4B5563" stroke-dasharray="8 8" strokeWidth="2.5"></path>
<path className="animate-dash" d="M 520 375 L 720 375" fill="none" stroke="#4B5563" stroke-dasharray="8 8" strokeWidth="2.5"></path>

<foreignobject height="56" width="160" x="40" y="222">
<div className="w-full h-full bg-[#1A202C] border border-white/10 rounded-xl flex items-center px-3 gap-3 shadow-lg" xmlns="http://www.w3.org/1999/xhtml">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate tracking-tight">Webhook</div>
<div className="text-[10px] text-white/40 truncate tracking-tight">On New Lead</div>
</div>
</div>
</foreignobject>

<foreignobject height="56" width="160" x="240" y="222">
<div className="w-full h-full bg-[#1A202C] border border-white/10 rounded-xl flex items-center px-3 gap-3 shadow-lg" xmlns="http://www.w3.org/1999/xhtml">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate tracking-tight">Switch</div>
<div className="text-[10px] text-white/40 truncate tracking-tight">Route by Type</div>
</div>
</div>
</foreignobject>

<foreignobject height="56" width="160" x="440" y="97">
<div className="w-full h-full bg-[#1A202C] border border-white/10 rounded-xl flex items-center px-3 gap-3 shadow-lg" xmlns="http://www.w3.org/1999/xhtml">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate tracking-tight">OpenAI</div>
<div className="text-[10px] text-white/40 truncate tracking-tight">Generate Reply</div>
</div>
</div>
</foreignobject>

<foreignobject height="56" width="160" x="440" y="222">
<div className="w-full h-full bg-[#1A202C] border border-white/10 rounded-xl flex items-center px-3 gap-3 shadow-lg" xmlns="http://www.w3.org/1999/xhtml">
<div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate tracking-tight">Postgres</div>
<div className="text-[10px] text-white/40 truncate tracking-tight">Save Lead Data</div>
</div>
</div>
</foreignobject>

<foreignobject height="56" width="160" x="440" y="347">
<div className="w-full h-full bg-[#1A202C] border border-white/10 rounded-xl flex items-center px-3 gap-3 shadow-lg" xmlns="http://www.w3.org/1999/xhtml">
<div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate tracking-tight">HubSpot</div>
<div className="text-[10px] text-white/40 truncate tracking-tight">Create Deal</div>
</div>
</div>
</foreignobject>

<foreignobject height="56" width="160" x="640" y="97">
<div className="w-full h-full bg-[#1A202C] border border-white/10 rounded-xl flex items-center px-3 gap-3 shadow-lg" xmlns="http://www.w3.org/1999/xhtml">
<div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate tracking-tight">Slack</div>
<div className="text-[10px] text-white/40 truncate tracking-tight">Alert Team</div>
</div>
</div>
</foreignobject>

<foreignobject height="56" width="160" x="640" y="347">
<div className="w-full h-full bg-[#1A202C] border border-white/10 rounded-xl flex items-center px-3 gap-3 shadow-lg" xmlns="http://www.w3.org/1999/xhtml">
<div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate tracking-tight">Gmail</div>
<div className="text-[10px] text-white/40 truncate tracking-tight">Send Follow-up</div>
</div>
</div>
</foreignobject>
</svg>
</div>
</div>

<div className="w-[110%] h-3 bg-gradient-to-b from-white/10 to-white/5 rounded-b-xl -ml-[5%] relative z-10"></div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-4xl mx-auto px-6 py-20 text-center reveal transition-all duration-[800ms] ease-out">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
                    Automatisieren. Optimieren. Wachsen.
                </h2>
<p className="text-base text-[#E5E7EB] font-light leading-relaxed">
                    Syncosia hilft Ihnen, Prozesse zu automatisieren, Leads effizienter zu konvertieren und Ihr Business nachhaltig zu skalieren.
                </p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

<div className="lg:w-1/3 sticky top-32 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">
                        Ihre Vorteile im<br/><span className="text-[#2563EB]">Überblick</span>
</h2>
<p className="text-sm text-[#E5E7EB] font-light leading-relaxed">
                        Setzen Sie auf intelligente Systeme, die im Hintergrund arbeiten, während Sie sich auf das Wesentliche konzentrieren können.
                    </p>
</div>

<div className="lg:w-2/3 flex flex-col gap-12">
<div className="flex gap-6 items-start reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white shadow-lg">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Sofort reagieren</h3>
<p className="text-sm text-[#E5E7EB] font-light leading-relaxed">
                                Beantworten Sie Anfragen automatisch – rund um die Uhr.
                            </p>
</div>
</div>
<div className="flex gap-6 items-start reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out delay-100">
<div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white shadow-lg">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Effizient konvertieren</h3>
<p className="text-sm text-[#E5E7EB] font-light leading-relaxed">
                                Verwandeln Sie Leads in zahlende Kunden durch Automationen.
                            </p>
</div>
</div>
<div className="flex gap-6 items-start reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out delay-200">
<div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white shadow-lg">
<iconify-icon className="text-2xl" icon="solar:filter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Gezielt filtern</h3>
<p className="text-sm text-[#E5E7EB] font-light leading-relaxed">
                                Erkennen Sie sofort die besten Leads.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 py-24">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">Warum Syncosia?</h2>
<p className="text-base text-[#E5E7EB] font-light">Der Unterschied liegt im Detail und in der Umsetzung.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#2563EB]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Leidenschaft für Automation</h3>
<p className="text-sm text-[#E5E7EB] font-light leading-relaxed">
                            Individuelle Lösungen statt Standard.
                        </p>
</div>
<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out delay-100">
<div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#2563EB]" icon="solar:tuning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Maßgeschneidert</h3>
<p className="text-sm text-[#E5E7EB] font-light leading-relaxed">
                            Ihre Prozesse, Ihre Tools, Ihre Ziele.
                        </p>
</div>
<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out delay-200">
<div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#2563EB]" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Ergebnisorientiert</h3>
<p className="text-sm text-[#E5E7EB] font-light leading-relaxed">
                            Funktionierende Systeme statt Theorie.
                        </p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-3xl font-medium tracking-tight text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
                    So funktioniert's
                </h2>
<div className="flex flex-col md:flex-row gap-8 relative">
<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-white/5"></div>
<div className="flex-1 relative reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<div className="w-12 h-12 rounded-full bg-[#0B0F1A] border border-white/10 flex items-center justify-center text-sm font-medium mb-6 mx-auto md:mx-0 relative z-10 text-[#2563EB]">
                            01
                        </div>
<h3 className="text-base font-medium tracking-tight mb-2 text-center md:text-left">Erstgespräch &amp; Analyse</h3>
</div>
<div className="flex-1 relative reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out delay-100">
<div className="w-12 h-12 rounded-full bg-[#0B0F1A] border border-white/10 flex items-center justify-center text-sm font-medium mb-6 mx-auto md:mx-0 relative z-10 text-[#2563EB]">
                            02
                        </div>
<h3 className="text-base font-medium tracking-tight mb-2 text-center md:text-left">Konzeption &amp; Umsetzung</h3>
</div>
<div className="flex-1 relative reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out delay-200">
<div className="w-12 h-12 rounded-full bg-[#0B0F1A] border border-white/10 flex items-center justify-center text-sm font-medium mb-6 mx-auto md:mx-0 relative z-10 text-[#2563EB]">
                            03
                        </div>
<h3 className="text-base font-medium tracking-tight mb-2 text-center md:text-left">Optimierung &amp; Betreuung</h3>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24">
<h2 className="text-2xl font-medium tracking-tight mb-10 text-center reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
                Frequently Asked Questions
            </h2>
<div className="flex flex-col reveal transition-all duration-[800ms] ease-out delay-100">
<div className="border-b border-white/10 faq-item cursor-pointer group">
<div className="py-5 flex justify-between items-center" onclick="toggleFaq(this)">
<h3 className="text-sm font-medium tracking-tight group-hover:text-[#2563EB] transition-colors">Was automatisiert Syncosia?</h3>
<iconify-icon className="text-xl faq-icon transition-transform duration-300 text-[#E5E7EB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="faq-content">
<div>
<p className="pb-5 text-sm text-[#E5E7EB] font-light leading-relaxed">
                                Wir automatisiert repetitive Aufgaben in den Bereichen Vertrieb, Marketing und interne Verwaltung. Dazu gehören Lead-Management, automatische E-Mail-Follow-ups, Datensynchronisation zwischen verschiedenen Tools und Customer Onboarding Prozesse.
                            </p>
</div>
</div>
</div>
<div className="border-b border-white/10 faq-item cursor-pointer group">
<div className="py-5 flex justify-between items-center" onclick="toggleFaq(this)">
<h3 className="text-sm font-medium tracking-tight group-hover:text-[#2563EB] transition-colors">Für wen ist das geeignet?</h3>
<iconify-icon className="text-xl faq-icon transition-transform duration-300 text-[#E5E7EB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="faq-content">
<div>
<p className="pb-5 text-sm text-[#E5E7EB] font-light leading-relaxed">
                                Unsere Lösungen richten sich an KMUs, Agenturen und Dienstleister, die durch effiziente Prozesse mehr Kapazitäten schaffen und ihr Wachstum ohne proportionale Erhöhung der Personalkosten vorantreiben möchten.
                            </p>
</div>
</div>
</div>
<div className="border-b border-white/10 faq-item cursor-pointer group">
<div className="py-5 flex justify-between items-center" onclick="toggleFaq(this)">
<h3 className="text-sm font-medium tracking-tight group-hover:text-[#2563EB] transition-colors">Wie schnell sieht man Ergebnisse?</h3>
<iconify-icon className="text-xl faq-icon transition-transform duration-300 text-[#E5E7EB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="faq-content">
<div>
<p className="pb-5 text-sm text-[#E5E7EB] font-light leading-relaxed">
                                Sobald eine Automation implementiert ist, greift sie sofort. Die Zeitersparnis ist ab dem ersten Tag messbar. Innerhalb weniger Wochen sehen unsere Kunden meist auch eine signifikante Verbesserung in der Conversion-Rate und Kundenzufriedenheit.
                            </p>
</div>
</div>
</div>
<div className="border-b border-white/10 faq-item cursor-pointer group">
<div className="py-5 flex justify-between items-center" onclick="toggleFaq(this)">
<h3 className="text-sm font-medium tracking-tight group-hover:text-[#2563EB] transition-colors">Welche Tools werden genutzt?</h3>
<iconify-icon className="text-xl faq-icon transition-transform duration-300 text-[#E5E7EB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="faq-content">
<div>
<p className="pb-5 text-sm text-[#E5E7EB] font-light leading-relaxed">
                                Wir arbeiten tool-agnostisch und passen uns Ihrem bestehenden Tech-Stack an. Häufig nutzen wir Plattformen wie Make, Zapier, HubSpot, Pipedrive, Stripe und individuelle API-Anbindungen.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center reveal transition-all duration-[800ms] ease-out">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-8">
                Bereit, Ihr Unternehmen auf das nächste Level zu bringen?
            </h2>
<button className="inline-flex hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 text-sm font-medium text-white bg-[#2563EB] rounded-full pt-3.5 pr-8 pb-3.5 pl-8 items-center justify-center" onclick="switchPage('contact')" type="button">
                Kontakt aufnehmen
            </button>
</section>
</main>

<main className="hidden flex-grow pt-32 pb-24" id="page-contact">
<div className="max-w-xl mx-auto px-6 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">

<div className="text-center mb-12">
<h1 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">Kontakt aufnehmen</h1>
<p className="text-sm text-[#E5E7EB] font-light">Wir melden uns schnellstmöglich bei Ihnen.</p>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl relative">

<div className="absolute inset-0 bg-[#2563EB]/5 rounded-2xl blur-xl -z-10 pointer-events-none"></div>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-light text-[#E5E7EB]" htmlFor="firstName">Vorname *</label>
<input className="w-full bg-[#0B0F1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all" id="firstName" placeholder="Max" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-light text-[#E5E7EB]" htmlFor="lastName">Nachname</label>
<input className="w-full bg-[#0B0F1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all" id="lastName" placeholder="Mustermann" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-light text-[#E5E7EB]" htmlFor="email">E-Mail *</label>
<input className="w-full bg-[#0B0F1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all" id="email" placeholder="max@unternehmen.de" required="" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-light text-[#E5E7EB]" htmlFor="message">Nachricht *</label>
<textarea className="w-full bg-[#0B0F1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none" id="message" placeholder="Wie können wir Ihnen helfen?" required="" rows="4"></textarea>
</div>
<button className="w-full mt-4 bg-[#2563EB] text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300" type="submit">
                        Jetzt absenden
                    </button>
</form>
</div>

<div className="mt-8 text-center">
<a className="text-sm font-light text-[#E5E7EB] hover:text-white transition-colors flex items-center justify-center gap-2" href="mailto:matteo@syncosia.com">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    matteo@syncosia.com
                </a>
</div>
</div>
</main>

<main className="hidden flex-grow pt-32 pb-24" id="page-impressum">
<div className="max-w-3xl mx-auto px-6 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<h1 className="text-3xl md:text-4xl font-medium tracking-tighter mb-10">Impressum</h1>
<div className="space-y-8 text-[#E5E7EB] font-light leading-relaxed text-sm">
<section>
<h2 className="text-white font-medium mb-2 text-base">Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 18 Mediengesetz:</h2>
<p>Syncosia – Automation Consulting<br/>
                    Inhaber: Matteo Toromanovic<br/>
                    Anton-Hochmuth-Straße, 5020 Salzburg, Österreich<br/>
                    Einzelunternehmen – derzeit in Vorbereitung auf die Gewerbeanmeldung</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">Kontakt:</h2>
<p>E-Mail: <a className="text-[#2563EB] hover:text-blue-400 transition-colors" href="mailto:matteo@syncosia.com">matteo@syncosia.com</a><br/>
                    Telefon: +43 660 9106602<br/>
                    Website: <a className="text-[#2563EB] hover:text-blue-400 transition-colors" href="https://www.syncosia.com">www.syncosia.com</a></p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">Zuständige Aufsichtsbehörde:</h2>
<p>Wirtschaftskammer Österreich<br/>
                    Fachgruppe: Unternehmensberatung, Buchhaltung und Informationstechnologie (UBIT)</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">UID-Nummer:</h2>
<p>wird nachgereicht</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV:</h2>
<p>Matteo Toromanovic</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">Haftung für Inhalte:</h2>
<p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">Haftung für Links:</h2>
<p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für die Inhalte verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">Urheberrecht:</h2>
<p>Alle Inhalte (Texte, Bilder, Grafiken, Designs) auf dieser Website unterliegen dem Urheberrecht. Jede Verwendung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung durch Syncosia.</p>
</section>
</div>
</div>
</main>

<main className="hidden flex-grow pt-32 pb-24" id="page-datenschutz">
<div className="max-w-3xl mx-auto px-6 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<h1 className="text-3xl md:text-4xl font-medium tracking-tighter mb-10">Datenschutzerklärung</h1>
<div className="space-y-8 text-[#E5E7EB] font-light leading-relaxed text-sm">
<section>
<h2 className="text-white font-medium mb-2 text-base">1. Verantwortlicher</h2>
<p>Syncosia – Automation Consulting<br/>
                    Inhaber: Matteo Toromanovic<br/>
                    Adresse: Anton-Hochmuth-Straße, 5020 Salzburg, Österreich<br/>
                    E-Mail: <a className="text-[#2563EB] hover:text-blue-400 transition-colors" href="mailto:matteo@syncosia.com">matteo@syncosia.com</a></p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
<p>Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese freiwillig mitteilen – zum Beispiel durch:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>das Ausfüllen eines Kontaktformulars</li>
<li>eine E-Mail-Anfrage</li>
<li>den Zugriff auf unsere Website (Logdaten)</li>
</ul>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">3. Zwecke der Datenverarbeitung &amp; Rechtsgrundlage</h2>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Beantwortung Ihrer Kontaktanfragen (Art. 6 (1) lit. b DSGVO)</li>
<li>Verbesserung der Website durch Logfile-Auswertung (Art. 6 (1) lit. f DSGVO)</li>
<li>Nur freiwillig gespeicherte Daten (z. B. aus Formularen): Einwilligung (Art. 6 (1) lit. a DSGVO)</li>
</ul>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">4. Cookies &amp; Analyse</h2>
<p>Derzeit verwenden wir keine Tracking- oder Analyse-Cookies.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">5. Server-Logfiles</h2>
<p>Beim Besuch unserer Website werden automatisch Informationen erfasst, z. B.:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>IP-Adresse</li>
<li>Datum und Uhrzeit des Zugriffs</li>
<li>aufgerufene Seite</li>
</ul>
<p className="mt-2">Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs und zur Fehleranalyse verwendet und nach spätestens 30 Tagen gelöscht.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">6. Weitergabe an Dritte</h2>
<p>Wir geben keine personenbezogenen Daten ohne Ihre Einwilligung an Dritte weiter, es sei denn, dies ist zur Vertragserfüllung oder gesetzlich erforderlich.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">7. Auftragsverarbeitung</h2>
<p>Hosting und technische Dienstleistungen erfolgen durch externe Anbieter. Ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO) liegt vor.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">8. Datensicherheit</h2>
<p>Wir setzen technische und organisatorische Maßnahmen zum Schutz Ihrer Daten um, z. B. SSL-Verschlüsselung, Firewalls, regelmäßige Backups.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">9. Ihre Rechte</h2>
<p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerruf Ihrer Einwilligung. Zur Ausübung Ihrer Rechte können Sie sich jederzeit an <a className="text-[#2563EB] hover:text-blue-400 transition-colors" href="mailto:matteo@syncosia.com">matteo@syncosia.com</a> wenden.</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">10. Beschwerderecht</h2>
<p>Sie können sich bei der Datenschutzbehörde beschweren:<br/>
                    Österreichische Datenschutzbehörde, Wickenburggasse 8, 1080 Wien</p>
</section>
<section>
<h2 className="text-white font-medium mb-2 text-base">11. Änderungen dieser Datenschutzerklärung</h2>
<p>Wir behalten uns vor, diese Erklärung bei Änderungen anzupassen. Es gilt die jeweils aktuelle Version.</p>
</section>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-10 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

<div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-light text-[#E5E7EB]">
<button className="hover:text-white transition-colors cursor-pointer" onclick="switchPage('impressum')" type="button">Impressum</button>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<button className="hover:text-white transition-colors cursor-pointer" onclick="switchPage('datenschutz')" type="button">Datenschutz</button>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<button className="hover:text-white transition-colors cursor-pointer" onclick="switchPage('contact')" type="button">Kontakt</button>
</div>
<p className="text-xs text-white/40 font-light">
                © <span id="year">2026</span> Syncosia. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
