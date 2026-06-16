import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          const display = document.getElementById('password-display');
          const lengthSlider = document.getElementById('length-slider');
          const lengthVal = document.getElementById('length-val');
          const btnGenerate = document.getElementById('generate-btn');
          const btnCopy = document.getElementById('copy-btn');
          const copyToast = document.getElementById('copy-toast');

          const optUpper = document.getElementById('opt-upper');
          const optLower = document.getElementById('opt-lower');
          const optNumbers = document.getElementById('opt-numbers');
          const optSymbols = document.getElementById('opt-symbols');

          const s1 = document.getElementById('strength-1');
          const s2 = document.getElementById('strength-2');
          const s3 = document.getElementById('strength-3');
          const s4 = document.getElementById('strength-4');
          const sText = document.getElementById('strength-text');

          const chars = {
              upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
              lower: 'abcdefghijklmnopqrstuvwxyz',
              numbers: '0123456789',
              symbols: '!@#$%^&*()_+~|}{[]:;?><,./-='
          };

          function secureRandomInt(maxExclusive) {
              if (maxExclusive <= 0 || maxExclusive > 256) throw new Error('Invalid range');
              const limit = Math.floor(256 / maxExclusive) * maxExclusive;
              const bytes = new Uint8Array(1);
              do {
                  window.crypto.getRandomValues(bytes);
              } while (bytes[0] >= limit);
              return bytes[0] % maxExclusive;
          }

          function generatePassword() {
              let charset = '';
              if (optUpper.checked) charset += chars.upper;
              if (optLower.checked) charset += chars.lower;
              if (optNumbers.checked) charset += chars.numbers;
              if (optSymbols.checked) charset += chars.symbols;

              if (charset === '') {
                  optLower.checked = true;
                  charset += chars.lower;
              }

              const length = parseInt(lengthSlider.value);
              let password = '';

              if (charset.length > 0) {
                  for (let i = 0; i < length; i++) {
                      password += charset[secureRandomInt(charset.length)];
                  }
              }

              display.value = password;
              updateStrength(length, charset);
          }

          function updateStrength(length, charset) {
              const entropy = charset.length > 0 ? Math.floor(length * Math.log2(charset.length)) : 0;
              let score = 0;

              if (entropy >= 50) score += 1;
              if (entropy >= 70) score += 1;
              if (entropy >= 90) score += 1;
              if (entropy >= 110) score += 1;

              const bars = [s1, s2, s3, s4];
              bars.forEach(bar => {
                  bar.className = 'h-full flex-1 rounded-full transition-colors duration-300 bg-white/10';
              });

              let strengthLabel = '';
              let strengthClass = '';

              if (score <= 1) {
                  s1.classList.replace('bg-white/10', 'bg-red-500');
                  strengthLabel = 'Faible';
                  strengthClass = 'text-xs font-medium tracking-tight text-red-500';
              } else if (score === 2) {
                  s1.classList.replace('bg-white/10', 'bg-yellow-500');
                  s2.classList.replace('bg-white/10', 'bg-yellow-500');
                  strengthLabel = 'Moyen';
                  strengthClass = 'text-xs font-medium tracking-tight text-yellow-500';
              } else if (score === 3) {
                  s1.classList.replace('bg-white/10', 'bg-emerald-400');
                  s2.classList.replace('bg-white/10', 'bg-emerald-400');
                  s3.classList.replace('bg-white/10', 'bg-emerald-400');
                  strengthLabel = 'Fort';
                  strengthClass = 'text-xs font-medium tracking-tight text-emerald-400';
              } else {
                  bars.forEach(bar => bar.classList.replace('bg-white/10', 'bg-emerald-500'));
                  strengthLabel = 'Excellent';
                  strengthClass = 'text-xs font-medium tracking-tight text-emerald-500';
              }

              sText.textContent = `${entropy} bits - ${strengthLabel}`;
              sText.className = strengthClass;
          }

          function copyToClipboard() {
              if(!display.value) return;

              navigator.clipboard.writeText(display.value).then(() => {
                  copyToast.classList.remove('opacity-0', 'translate-y-2');
                  copyToast.classList.add('opacity-100', 'translate-y-0');

                  setTimeout(() => {
                      copyToast.classList.remove('opacity-100', 'translate-y-0');
                      copyToast.classList.add('opacity-0', 'translate-y-2');
                  }, 2000);
              });
          }

          lengthSlider.addEventListener('input', (e) => {
              lengthVal.textContent = e.target.value;
              generatePassword();
          });

          [optUpper, optLower, optNumbers, optSymbols].forEach(opt => {
              opt.addEventListener('change', generatePassword);
          });

          btnGenerate.addEventListener('click', generatePassword);
          btnCopy.addEventListener('click', copyToClipboard);

          generatePassword();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>

<nav className="w-full border-b border-white/5 bg-black/20 backdrop-blur-md z-50 sticky top-0">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-white">
          SECURE.
        </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#about" onclick="document.getElementById('about').scrollIntoView({behavior:'smooth'}); return false;">
            À propos
          </a>
<a className="hover:text-white transition-colors duration-200" href="#security" onclick="document.getElementById('security').scrollIntoView({behavior:'smooth'}); return false;">
            Sécurité
          </a>
<a className="hover:text-white transition-colors duration-200" href="#faq" onclick="document.getElementById('faq').scrollIntoView({behavior:'smooth'}); return false;">
            FAQ
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs md:text-sm font-medium text-black bg-white hover:bg-zinc-200 px-4 py-2 rounded-full transition-colors duration-200 tracking-tight" href="#" onclick="alert('Bientôt disponible'); return false;">
            Obtenir une API
          </a>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col items-center justify-start pt-16 md:pt-24 pb-20 px-4 w-full max-w-6xl mx-auto">

<div className="text-center mb-12 z-10 w-full max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white mb-6 font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Générateur 100% local
        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 leading-tight">
          Générateur de mot de passe
          <br className="hidden md:block"/>
          sécurisé.
        </h1>
<p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto tracking-tight">
          Protégez vos comptes avec des combinaisons cryptographiques
          impossibles à deviner. Aucune donnée ne quitte jamais votre appareil.
        </p>
</div>

<div className="w-full max-w-2xl bg-zinc-900/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative z-10">

<div className="relative group mb-6">
<div className="w-full bg-black/60 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 transition-colors duration-300 group-hover:border-white/20">
<input aria-label="Mot de passe généré" className="bg-transparent border-none outline-none w-full text-white font-mono text-2xl md:text-3xl tracking-tight selection:bg-transparent cursor-default truncate" id="password-display" readonly="" type="text" value="••••••••••••••••"/>
<button className="shrink-0 flex items-center justify-center h-12 w-12 bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors focus:ring-2 focus:ring-white/50" id="copy-btn" title="Copier le mot de passe">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div aria-live="polite" className="absolute -top-10 right-2 bg-zinc-800 text-white text-xs font-medium px-3 py-1.5 rounded-md opacity-0 translate-y-2 transition-all duration-200 pointer-events-none border border-white/10 shadow-lg" id="copy-toast">
            Copié !
          </div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium uppercase tracking-tight text-zinc-500">
              Robustesse
            </span>
<span className="text-xs font-medium tracking-tight text-emerald-400" id="strength-text">
              Excellent
            </span>
</div>
<div className="flex gap-1.5 h-1.5 w-full">
<div className="h-full flex-1 rounded-full transition-colors duration-300 bg-white/10" id="strength-1"></div>
<div className="h-full flex-1 rounded-full transition-colors duration-300 bg-white/10" id="strength-2"></div>
<div className="h-full flex-1 rounded-full transition-colors duration-300 bg-white/10" id="strength-3"></div>
<div className="h-full flex-1 rounded-full transition-colors duration-300 bg-white/10" id="strength-4"></div>
</div>
</div>

<div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-white tracking-tight" htmlFor="length-slider">
              Longueur du mot de passe
            </label>
<div className="px-3 py-1 rounded-md bg-black/50 border border-white/10 text-white font-mono text-sm tracking-tight" id="length-val">
              20
            </div>
</div>
<input className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none outline-none accent-white" id="length-slider" max="64" min="8" type="range" value="20"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">

<label className="flex items-center justify-between cursor-pointer p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="text-sm font-medium text-zinc-300 tracking-tight">
              Majuscules
            </span>
<div className="relative flex items-center">
<input checked="" className="sr-only peer" id="opt-upper" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="text-sm font-medium text-zinc-300 tracking-tight">
              Minuscules
            </span>
<div className="relative flex items-center">
<input checked="" className="sr-only peer" id="opt-lower" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="text-sm font-medium text-zinc-300 tracking-tight">
              Chiffres
            </span>
<div className="relative flex items-center">
<input checked="" className="sr-only peer" id="opt-numbers" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="text-sm font-medium text-zinc-300 tracking-tight">
              Symboles
            </span>
<div className="relative flex items-center">
<input checked="" className="sr-only peer" id="opt-symbols" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</div>
</label>
</div>

<button className="w-full bg-white text-black font-medium text-sm py-4 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group tracking-tight" id="generate-btn">
<iconify-icon className="transition-transform group-hover:rotate-180 duration-500" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Générer un nouveau mot de passe
        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-5xl" id="about">
<div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-colors">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
            Zéro Connaissance
          </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
            La génération s'effectue directement dans votre navigateur. Aucun
            mot de passe n'est envoyé ou stocké sur nos serveurs.
          </p>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-colors">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
            Ultra Rapide
          </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
            Copiez votre nouveau mot de passe en un clic. Notre interface est
            optimisée pour une fluidité d'utilisation maximale.
          </p>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-colors">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white">
<iconify-icon icon="solar:key-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
            Entropie Maximale
          </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
            Utilisation des algorithmes cryptographiques natifs du navigateur
            pour garantir un caractère aléatoire absolu.
          </p>
</div>
</div>
<div className="mt-24 w-full max-w-5xl text-left border-t border-white/5 pt-16 mx-auto flex flex-col md:flex-row gap-12" id="security">
<div className="flex-1">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">
            Comment fonctionne notre générateur sécurisé ?
          </h2>
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p>
              La sécurité d'un mot de passe repose sur son
              <strong className="text-zinc-200 font-medium">entropie</strong>
              . Contrairement aux générateurs basiques utilisant
              <code className="text-zinc-300 bg-white/5 px-1 py-0.5 rounded">
                Math.random()
              </code>
              , notre outil s'appuie sur l'API cryptographique native de votre
              navigateur (
              <code className="text-zinc-300 bg-white/5 px-1 py-0.5 rounded">
                window.crypto.getRandomValues
              </code>
              ) et applique un algorithme de « rejection sampling » pour
              garantir une distribution parfaitement uniforme et éviter tout
              biais statistique.
            </p>
</div>
</div>
<div className="flex-1">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">
            100% Local &amp; Privé
          </h2>
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p>
              La génération s'effectue intégralement sur votre appareil. Aucun
              mot de passe n'est envoyé sur le réseau, stocké dans des cookies,
              ou transmis à des outils d'analyse.
            </p>
<p>
              Pour une sécurité optimale, nous recommandons une longueur
              minimale de 20 caractères combinant lettres, chiffres et symboles
              (offrant environ 130 bits d'entropie).
            </p>
</div>
</div>
</div>
<div className="mt-24 w-full max-w-5xl text-left border-t border-white/5 pt-16 mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Pourquoi choisir notre générateur ?
          </h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto tracking-tight">
            Une solution pensée pour la sécurité, la simplicité et le respect de
            votre vie privée.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="text-3xl font-semibold text-white tracking-tight">
              130+
            </div>
<div className="text-sm text-zinc-500">bits d'entropie</div>
</div>
<div className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="text-3xl font-semibold text-white tracking-tight">
              0
            </div>
<div className="text-sm text-zinc-500">donnée envoyée</div>
</div>
<div className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="text-3xl font-semibold text-white tracking-tight">
              64
            </div>
<div className="text-sm text-zinc-500">caractères max</div>
</div>
<div className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="text-3xl font-semibold text-white tracking-tight">
              100%
            </div>
<div className="text-sm text-zinc-500">gratuit</div>
</div>
</div>
</div>
<div className="mt-24 w-full max-w-3xl text-left border-t border-white/5 pt-16 mx-auto" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Questions fréquentes
          </h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto tracking-tight">
            Tout ce que vous devez savoir sur la génération de mots de passe.
          </p>
</div>
<div className="space-y-4">
<details className="group rounded-2xl bg-white/[0.02] border border-white/5 p-5">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium text-sm tracking-tight list-none">
              Mes mots de passe sont-ils stockés ?
              <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 leading-relaxed mt-3">
              Non. La génération s'effectue intégralement dans votre navigateur.
              Aucun mot de passe n'est jamais envoyé, enregistré ou transmis à
              un serveur.
            </p>
</details>
<details className="group rounded-2xl bg-white/[0.02] border border-white/5 p-5">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium text-sm tracking-tight list-none">
              Quelle longueur recommandez-vous ?
              <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 leading-relaxed mt-3">
              Nous recommandons une longueur minimale de 20 caractères combinant
              majuscules, minuscules, chiffres et symboles, offrant environ 130
              bits d'entropie.
            </p>
</details>
<details className="group rounded-2xl bg-white/[0.02] border border-white/5 p-5">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium text-sm tracking-tight list-none">
              L'outil est-il vraiment gratuit ?
              <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 leading-relaxed mt-3">
              Oui, totalement. Aucun compte, aucun abonnement, aucune publicité.
              Vous pouvez générer autant de mots de passe que vous le souhaitez.
            </p>
</details>
<details className="group rounded-2xl bg-white/[0.02] border border-white/5 p-5">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium text-sm tracking-tight list-none">
              Le générateur est-il vraiment aléatoire ?
              <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 leading-relaxed mt-3">
              Oui. Nous utilisons l'API cryptographique native du navigateur
              (window.crypto.getRandomValues) avec un algorithme de rejection
              sampling pour garantir une distribution parfaitement uniforme.
            </p>
</details>
</div>
</div>
<div className="mt-24 w-full max-w-4xl mx-auto text-center border-t border-white/5 pt-16">
<div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-10 md:p-12 backdrop-blur-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Sécurisez vos comptes dès maintenant
          </h2>
<p className="text-base text-zinc-500 max-w-xl mx-auto mb-8 tracking-tight">
            Générez un mot de passe robuste en un clic, sans inscription et sans
            compromis sur votre vie privée.
          </p>
<a className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" href="#" onclick="document.getElementById('generate-btn').scrollIntoView({behavior:'smooth',block:'center'}); return false;">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
            Générer mon mot de passe
          </a>
</div>
</div>
</main>

<footer className="w-full border-t border-white/5 py-8 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-sm tracking-tighter text-zinc-600 font-medium">
          © 2023 SECURE. Tous droits réservés.
        </div>
<div className="flex gap-6 text-xs text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="/a-propos">
            À propos
          </a>
<a className="hover:text-white transition-colors" href="/confidentialite">
            Confidentialité
          </a>
<a className="hover:text-white transition-colors" href="/mentions-legales">
            Mentions légales
          </a>
<a className="hover:text-white transition-colors" href="/contact">
            Contact
          </a>
</div>
</div>
</footer>



    </>
  );
}
