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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
        
        // Simple mouse move effect for cards
        document.querySelectorAll('.card-gradient').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    
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
      

<nav className="fixed w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-white group-hover:opacity-80 transition-opacity">
                    CHANNELBOOSTER
                </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#leistungen">Leistungen</a>
<a className="hover:text-white transition-colors" href="#prozess">Prozess</a>
<a className="hover:text-white transition-colors" href="#preise">Preise</a>
<a className="hover:text-white transition-colors" href="https://www.channelbooster.de/blog/">Insights</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full border border-white/5 transition-all" href="https://www.channelbooster.de/kontaktformular/">
                    Analyse anfordern
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="hero-glow"></div>
<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-sky-300 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                SEO Performance Agentur aus München
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Mehr Sichtbarkeit.<br/>
<span className="text-gradient">Messbares Wachstum.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Wir verwandeln Ihre Website in einen Kundenmagneten. Durch datengetriebenes SEO, technische Exzellenz und Content, der konvertiert.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2 btn-glow" href="https://www.channelbooster.de/kontaktformular/">
                    Kostenloses Beratungsgespräch
                </a>
<a className="w-full md:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all" href="#preise">
                    Preise ansehen
                </a>
</div>

<div className="mt-16 md:mt-24 relative mx-auto max-w-4xl">
<div className="absolute -inset-1 bg-gradient-to-b from-sky-500/20 to-transparent rounded-xl blur-lg opacity-50"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0B] overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-gray-500 font-mono ml-2">channelbooster_analytics.js</div>
</div>
<div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-xs text-gray-400 mb-1">Total Traffic</div>
<div className="text-2xl font-semibold text-white flex items-end gap-2">
                                124.5K 
                                <span className="text-xs text-emerald-400 mb-1 flex items-center">
<i className="w-3 h-3 mr-1" data-lucide="trending-up"></i> +24%
                                </span>
</div>
<div className="h-10 mt-4 flex items-end gap-1">
<div className="w-full bg-white/10 rounded-sm h-[40%]"></div>
<div className="w-full bg-white/10 rounded-sm h-[60%]"></div>
<div className="w-full bg-white/10 rounded-sm h-[50%]"></div>
<div className="w-full bg-white/10 rounded-sm h-[80%]"></div>
<div className="w-full bg-sky-500 rounded-sm h-[95%] shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-xs text-gray-400 mb-1">Keywords Top 3</div>
<div className="text-2xl font-semibold text-white flex items-end gap-2">
                                842
                                <span className="text-xs text-emerald-400 mb-1 flex items-center">
<i className="w-3 h-3 mr-1" data-lucide="arrow-up"></i> +12
                                </span>
</div>
<div className="mt-4 space-y-2">
<div className="h-2 bg-white/10 rounded-full w-3/4"></div>
<div className="h-2 bg-white/10 rounded-full w-1/2"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 flex flex-col justify-between">
<div className="text-xs text-gray-400 mb-1">Domain Authority</div>
<div className="text-2xl font-semibold text-white">56 <span className="text-sm text-gray-500 font-normal">/ 100</span></div>
<div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
<div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 rounded-full w-[56%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-gray-500 mb-8">Erfolgreiche Partnerschaften &amp; Unternehmen</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">

<span className="text-xl font-semibold text-white tracking-tight">EFI</span>
<span className="text-xl font-semibold text-white tracking-tight">ZENTRUM ZAHNMEDIZIN</span>
<span className="text-xl font-semibold text-white tracking-tight">FÜNF HÖFE</span>
<span className="text-xl font-semibold text-white tracking-tight">STARTUP INC</span>
</div>
</div>
</section>

<section className="py-24 relative" id="leistungen">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Alles was Sie für Top-Rankings brauchen.</h2>
<p className="text-gray-400 text-lg">Keine leeren Versprechungen. Wir liefern technische Präzision und kreative Inhalte in einer ganzheitlichen Strategie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-white" data-lucide="link"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/30">
<i className="text-indigo-400" data-lucide="share-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Premium Linkbuilding</h3>
<p className="text-gray-400 max-w-md">Wir erstellen strategische Verlinkungen von autoritären Quellen. Dies ist der Treibstoff für Ihr Ranking in hart umkämpften Märkten.</p>
<ul className="mt-6 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Manuelle Outreach-Kampagnen</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Themenrelevante Platzierungen</li>
</ul>
</div>
</div>

<div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/30">
<i className="text-emerald-400" data-lucide="code-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Technisches SEO</h3>
<p className="text-gray-400 text-sm mb-4">Ladezeiten (Core Web Vitals), Crawlability und Indexierung. Wir optimieren den Motor Ihrer Website.</p>
<div className="bg-black/50 rounded p-3 font-mono text-xs text-emerald-400 border border-white/5">
                        &lt;meta name="robots" content="index, follow"&gt;
                    </div>
</div>

<div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group">
<div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center mb-6 border border-rose-500/30">
<i className="text-rose-400" data-lucide="pen-tool"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Content Marketing</h3>
<p className="text-gray-400 text-sm">Inhalte, die nicht nur ranken, sondern verkaufen. Von Blogartikeln bis zu Whitepapern.</p>
</div>

<div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mb-6 border border-sky-500/30">
<i className="text-sky-400" data-lucide="search"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Keyword Strategie &amp; Analyse</h3>
<p className="text-gray-400">Wir finden nicht nur Suchbegriffe, sondern identifizieren die Intention Ihrer Kunden. Wir decken Chancen auf, die Ihre Konkurrenz übersieht.</p>
</div>
<div className="flex-1 bg-black/40 rounded-lg border border-white/5 p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-500">Keyword Difficulty</span>
<span className="text-xs text-white">Medium</span>
</div>
<div className="w-full bg-white/10 h-2 rounded-full mb-4">
<div className="bg-yellow-500 h-2 rounded-full w-[45%]"></div>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-500">Search Volume</span>
<span className="text-xs text-white">2.4k / mo</span>
</div>
<div className="w-full bg-white/10 h-2 rounded-full">
<div className="bg-sky-500 h-2 rounded-full w-[80%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/30" id="prozess">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">Daten lügen nicht.<br/>Bauchgefühl schon.</h2>
<p className="text-gray-400 text-lg mb-8">
                        Wir arbeiten nicht nach Vermutungen. Unsere SEO-Monitor Tools überwachen Ihre Website rund um die Uhr. Sie erhalten Zugang zu einem Echtzeit-Dashboard.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium">Transparente Reports</h4>
<p className="text-sm text-gray-500 mt-1">Kein Fachchinesisch. Klare KPIs: Traffic, Conversions, Umsatz.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium">Nachhaltige Strategie</h4>
<p className="text-sm text-gray-500 mt-1">Wir bauen Assets auf, die auch nach Vertragsende für Sie arbeiten.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium">Persönlicher Support</h4>
<p className="text-sm text-gray-500 mt-1">Direkter Draht zu Ihrem SEO-Experten, keine Warteschleifen.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-sky-500/20 blur-[80px] rounded-full"></div>
<div className="relative bg-[#0A0A0B] border border-white/10 rounded-xl p-1 shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="rounded-lg overflow-hidden bg-gray-900 aspect-[4/3] flex items-center justify-center relative">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<i className="w-24 h-24 text-white/20" data-lucide="line-chart"></i>

<div className="absolute top-8 left-8 bg-gray-800/90 backdrop-blur border border-white/10 p-3 rounded-lg shadow-lg animate-pulse">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs text-white font-mono">Ranking #1</span>
</div>
</div>
<div className="absolute bottom-12 right-8 bg-gray-800/90 backdrop-blur border border-white/10 p-3 rounded-lg shadow-lg">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-sky-400" data-lucide="users"></i>
<span className="text-xs text-white font-mono">+158% Traffic</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="preise">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Investieren Sie in Wachstum</h2>
<p className="text-gray-400">Transparente Pakete für jedes Stadium. Mindestlaufzeit 12 Monate für nachhaltige Ergebnisse.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="mt-4 mb-6 flex items-baseline">
<span className="text-4xl font-semibold text-white">499€</span>
<span className="text-gray-500 ml-2">/Monat</span>
</div>
<p className="text-sm text-gray-400 mb-8 min-h-[40px]">Der Einstieg für lokale Unternehmen und kleine Webseiten.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> Keyword-Analyse &amp; Strategie</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> Tech SEO (10 Seiten)</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> Google Business Optimierung</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> 4 Blogartikel (1.000 Worte)</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> Linkaufbau Basic</li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 text-center transition-colors" href="https://www.channelbooster.de/kontaktformular/">Jetzt anfragen</a>
</div>

<div className="bg-white/[0.05] border border-indigo-500/50 rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(99,102,241,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-indigo-400 shadow-lg">Empfohlen</div>
<h3 className="text-lg font-medium text-white">Profi</h3>
<div className="mt-4 mb-6 flex items-baseline">
<span className="text-4xl font-semibold text-white">799€</span>
<span className="text-gray-500 ml-2">/Monat</span>
</div>
<p className="text-sm text-gray-400 mb-8 min-h-[40px]">Für wachsende Unternehmen, die Conversions steigern wollen.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> <strong>Erweiterte</strong> Analyse</li>
<li className="flex gap-3 text-sm text-white"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> Tech SEO (20 Seiten)</li>
<li className="flex gap-3 text-sm text-white"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> 8 Blogartikel + 1 Pillar Page</li>
<li className="flex gap-3 text-sm text-white"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> E-Commerce Optimierung</li>
<li className="flex gap-3 text-sm text-white"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> Linkaufbau Standard</li>
<li className="flex gap-3 text-sm text-white"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> Monatlicher Strategie-Call</li>
</ul>
<a className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium text-center transition-colors shadow-lg shadow-indigo-500/20" href="https://www.channelbooster.de/kontaktformular/">Jetzt durchstarten</a>
</div>

<div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white">Premium</h3>
<div className="mt-4 mb-6 flex items-baseline">
<span className="text-4xl font-semibold text-white">1199€</span>
<span className="text-gray-500 ml-2">/Monat</span>
</div>
<p className="text-sm text-gray-400 mb-8 min-h-[40px]">Maximale Power für Marktführer und ambitionierte Shops.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> All-Inclusive Strategie</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> Tech SEO (50 Seiten)</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> 12 Artikel + Pillar + Whitepaper</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> Aggressiver Linkaufbau</li>
<li className="flex gap-3 text-sm text-gray-300"><i className="w-5 h-5 text-white/50 shrink-0" data-lucide="check"></i> Amazon SEO inklusive</li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 text-center transition-colors" href="https://www.channelbooster.de/kontaktformular/">Individuell anfragen</a>
</div>
</div>
<p className="text-center text-xs text-gray-600 mt-8 max-w-2xl mx-auto">
                Alle Links bleiben nach Vertragsende (mind. 12 Monate) für ein weiteres Jahr aktiv. Setup-Pauschale bei kürzerer Laufzeit.
            </p>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8 text-indigo-400 flex justify-center">
<i className="w-10 h-10 opacity-50" data-lucide="quote"></i>
</div>
<h3 className="text-2xl md:text-4xl font-medium text-white mb-8 leading-relaxed">
                "Nach 6 Monaten sind wir von Seite 2 auf die erste Seite gekommen. Wir bekommen jetzt regelmäßig Anfragen über die Website, was vorher kaum der Fall war."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-lg">AM</div>
<div className="text-left">
<div className="text-white font-medium">Dr. Anna Meier</div>
<div className="text-sm text-gray-500">Fünf Höfe</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"></div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Bereit für mehr Traffic?</h2>
<p className="text-gray-400 mb-10 max-w-xl mx-auto">Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Umsatzziele durch SEO erreichen können. Unverbindlich und kostenlos.</p>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all btn-glow" href="https://www.channelbooster.de/kontaktformular/">
                    Analyse anfordern
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="/">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
<span className="font-semibold text-white tracking-tight">CHANNELBOOSTER</span>
</a>
<div className="text-sm text-gray-500 space-y-2">
<p>Regerplatz 6</p>
<p>81541 München</p>
<p className="mt-4 text-white hover:text-sky-400 transition-colors"><a href="mailto:daniel@channelbooster.de">daniel@channelbooster.de</a></p>
<p className="text-white">+49 179 4531197</p>
</div>
<div className="flex gap-4 mt-6">
<a className="text-gray-500 hover:text-white transition-colors" href="https://www.youtube.com/@ChannelboosterDE"><i className="w-5 h-5" data-lucide="youtube"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Leistungen</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Linkbuilding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Technisches SEO</a></li>
<li><a className="hover:text-white transition-colors" href="#">Content Marketing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Keyword Recherche</a></li>
<li><a className="hover:text-white transition-colors" href="#">E-Commerce SEO</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Unternehmen</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#preise">Preise</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.channelbooster.de/blog/">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.channelbooster.de/kontaktformular/">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Rechtliches</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="https://www.channelbooster.de/impressum/">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.channelbooster.de/datenschutz/">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.channelbooster.de/agb/">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2025 Channelbooster. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-gray-600">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    All Systems Operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
