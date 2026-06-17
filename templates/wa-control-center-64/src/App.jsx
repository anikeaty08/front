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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: 'hsl(var(--background))',
foreground: 'hsl(var(--foreground))',
card: 'hsl(var(--card))',
'card-foreground': 'hsl(var(--card-foreground))',
primary: 'hsl(var(--primary))',
'primary-foreground': 'hsl(var(--primary-foreground))',
secondary: 'hsl(var(--secondary))',
'secondary-foreground': 'hsl(var(--secondary-foreground))',
muted: 'hsl(var(--muted))',
'muted-foreground': 'hsl(var(--muted-foreground))',
accent: 'hsl(var(--accent))',
destructive: 'hsl(var(--destructive))',
border: 'hsl(var(--border))',
input: 'hsl(var(--input))',
ring: 'hsl(var(--ring))',
warning: 'hsl(var(--warning))',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}

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
      

<header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-foreground font-semibold tracking-tight">
<span className="iconify text-primary text-xl" data-icon="lucide:message-circle"></span>
<span>WA Control Center</span>
</div>
<nav className="flex items-center gap-6">
<a className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors font-medium" href="#">Live Workshop</a>
<a className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity" href="#pricing">
<span>10 Déc • 18h00</span>
<span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</nav>
</div>
</header>
<main className="relative">

<div className="fixed inset-0 pointer-events-none -z-10">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full"></div>
</div>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 text-center relative max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                Workshop n8n &amp; WhatsApp
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1] animate-fade-in" style={{animationDelay: '0.1s'}}>
                Construisez l'IA qui<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">pilote votre business.</span>
</h1>
<p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                Arrêtez de gérer votre business avec vos pouces. Construisez un Agent IA sur n8n capable de gérer votre support client ET votre admin perso, piloté par la voix.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]" href="#pricing">
<span className="iconify" data-icon="lucide:ticket"></span>
                    Réserver ma place
                </a>
<span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
<span className="iconify text-warning" data-icon="lucide:flame"></span>
                    Places limitées pour le Live
                </span>
</div>
</section>

<section className="py-20 px-6 border-y border-border/50 bg-secondary/20 relative overflow-hidden">
<div className="absolute inset-0 bg-background/50"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Le Hub Central de votre activité</h2>
<p className="text-muted-foreground text-sm md:text-base">Connectez WhatsApp à tous vos outils grâce à n8n. Plus de copier-coller.</p>
</div>

<div className="relative h-64 md:h-80 flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center opacity-20">
<div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
<div className="absolute h-[80%] w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent"></div>
<div className="absolute w-[60%] h-[60%] border border-primary rounded-full"></div>
</div>

<div className="relative z-20 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-b from-primary to-emerald-600 flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.4)] border border-primary/50">
<span className="iconify text-background text-4xl md:text-5xl" data-icon="lucide:message-circle"></span>
</div>


<div className="absolute top-[10%] left-[15%] md:left-[25%] p-3 glass rounded-xl text-foreground/80 animate-pulse-slow">
<span className="iconify text-xl" data-icon="lucide:sparkles"></span>
</div>

<div className="absolute top-[10%] right-[15%] md:right-[25%] p-3 glass rounded-xl text-foreground/80 animate-pulse-slow" style={{animationDelay: '1s'}}>
<span className="iconify text-xl" data-icon="lucide:smartphone"></span>
</div>

<div className="absolute bottom-[10%] left-[15%] md:left-[25%] p-3 glass rounded-xl text-foreground/80 animate-pulse-slow" style={{animationDelay: '2s'}}>
<span className="iconify text-xl" data-icon="lucide:calendar"></span>
</div>

<div className="absolute bottom-[10%] right-[15%] md:right-[25%] p-3 glass rounded-xl text-foreground/80 animate-pulse-slow" style={{animationDelay: '3s'}}>
<span className="iconify text-xl" data-icon="lucide:users"></span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Ce que nous allons construire</h2>
<p className="text-muted-foreground">2 heures de pratique pure pour assembler ces 5 modules</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6">


<div className="md:col-span-2 group glass p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<span className="iconify text-2xl" data-icon="lucide:bot"></span>
</div>
<h3 className="text-base font-medium text-foreground mb-2">Le Cerveau (agent IA)</h3>
<p className="text-sm text-muted-foreground leading-relaxed">Connexion WhatsApp avec n8n. Sans abonnement SaaS tiers.</p>
</div>

<div className="md:col-span-2 group glass p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<span className="iconify text-2xl" data-icon="lucide:filter"></span>
</div>
<h3 className="text-base font-medium text-foreground mb-2">Le Filtre Intelligent</h3>
<p className="text-sm text-muted-foreground leading-relaxed">Router IA qui distingue automatiquement messages Pro vs Perso.</p>
</div>

<div className="md:col-span-2 group glass p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<span className="iconify text-2xl" data-icon="lucide:mic"></span>
</div>
<h3 className="text-base font-medium text-foreground mb-2">L'Assistant Vocal</h3>
<p className="text-sm text-muted-foreground leading-relaxed">Transcription Whisper. Parlez, l'IA exécute vos ordres complexes.</p>
</div>


<div className="md:col-span-3 group glass p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<span className="iconify text-2xl" data-icon="lucide:file-text"></span>
</div>
<h3 className="text-base font-medium text-foreground mb-2">Le Clone IA (RAG)</h3>
<p className="text-sm text-muted-foreground leading-relaxed">Votre "Second Cerveau" connecté à vos docs. Il répond aux prospects 24/7 avec vos connaissances.</p>
</div>

<div className="md:col-span-3 group glass p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<span className="iconify text-2xl" data-icon="lucide:wrench"></span>
</div>
<h3 className="text-base font-medium text-foreground mb-2">Pilotage Outils (CRM)</h3>
<p className="text-sm text-muted-foreground leading-relaxed">L'IA ajoute des contacts, crée des tâches Notion et booke des RDV Google Calendar pour vous.</p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-secondary/30 border-y border-border/50">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
<span className="iconify" data-icon="lucide:rocket"></span>
                            Format "Live Build"
                        </div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Ce n'est pas un cours théorique.</h2>
<p className="text-muted-foreground mb-8 leading-relaxed">
                            Je partage mon écran, j'ouvre n8n, et je construis les résultés devant vous. Vous voyez la logique brute, les bugs éventuels et leurs solutions.
                        </p>
</div>
<div className="md:w-1/2 grid gap-4 w-full">
<div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
<div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
<span className="iconify text-lg" data-icon="lucide:ban"></span>
</div>
<span className="font-medium">Pas de slides</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
<div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
<span className="iconify text-lg" data-icon="lucide:ban"></span>
</div>
<span className="font-medium">Pas de bla-bla</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_20px_-10px_hsl(var(--primary)/0.3)]">
<div className="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center shrink-0">
<span className="iconify text-lg" data-icon="lucide:rocket"></span>
</div>
<span className="font-medium text-foreground">100% Pratique</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-md mx-auto relative z-10">
<div className="glass p-1 rounded-3xl relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
<div className="bg-card rounded-[20px] p-8 md:p-10 text-center border border-border">
<h3 className="text-xl font-medium mb-2">Accès Live + Replay</h3>
<p className="text-primary text-sm font-medium mb-8">Mercredi 10 Déc • 18h00</p>
<div className="flex items-end justify-center gap-2 mb-2">
<span className="text-5xl font-semibold tracking-tight">99€</span>
</div>
<p className="text-xs text-muted-foreground mb-8">HT tarif pré-inscription</p>
<ul className="space-y-4 text-left mb-8">
<li className="flex items-start gap-3 text-sm text-muted-foreground">
<span className="iconify text-primary shrink-0 mt-0.5" data-icon="lucide:check"></span>
<span className="text-foreground">Accès direct sur Zoom</span>
</li>
<li className="flex items-start gap-3 text-sm text-muted-foreground">
<span className="iconify text-primary shrink-0 mt-0.5" data-icon="lucide:check"></span>
<span className="text-foreground">Replay à vie (envoyé J+1)</span>
</li>
<li className="flex items-start gap-3 text-sm text-muted-foreground">
<span className="iconify text-primary shrink-0 mt-0.5" data-icon="lucide:check"></span>
<span className="text-foreground">Le Template n8n (JSON) prêt à l'emploi</span>
</li>
<li className="flex items-start gap-3 text-sm text-muted-foreground">
<span className="iconify text-primary shrink-0 mt-0.5" data-icon="lucide:check"></span>
<span className="text-foreground">Questions / Réponses en direct</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-foreground text-background font-semibold hover:bg-white/90 transition-colors mb-4" href="#">
<span className="iconify" data-icon="lucide:tv"></span>
                            Rejoindre le Live
                        </a>
<p className="text-[10px] text-muted-foreground uppercase tracking-widest">Paiement sécurisé. Facture disponible.</p>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm h-full max-h-[400px] bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
</section>

<section className="py-20 px-6 max-w-2xl mx-auto">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-8 text-center">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group glass rounded-xl border-border/50 open:bg-secondary/40 transition-colors">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm md:text-base select-none">
                        Je ne suis pas disponible mercredi à 18h ?
                        <span className="iconify text-muted-foreground group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">
                        Aucun problème. 40% des participants prennent le workshop uniquement pour le Replay. Vous recevrez l'enregistrement vidéo HD et le Template JSON complet le lendemain matin par email.
                    </div>
</details>
<details className="group glass rounded-xl border-border/50 open:bg-secondary/40 transition-colors">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm md:text-base select-none">
                        Faut-il savoir coder ?
                        <span className="iconify text-muted-foreground group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">
                        Non, n8n est un outil "Low-code". Si vous savez relier des points entre eux, vous pouvez suivre. Je explique chaque étape de A à Z.
                    </div>
</details>
</div>
</section>

<footer className="py-8 px-6 border-t border-border/50 mt-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:message-circle"></span>
<span className="font-medium text-foreground">WA Control Center</span>
</div>
<p>© 2025 Tous droits réservés.</p>
</div>
</footer>
</main>

    </>
  );
}
