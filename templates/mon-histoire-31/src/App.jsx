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



{"@context":"https://schema.org","@type":"Person","name":"Sacha D'Houwer","url":"https://sachadhouwer.com","jobTitle":"Spécialiste en régulation du système nerveux équin","knowsAbout":["stress du cheval","anxiété équine","système nerveux du cheval"],"sameAs":["https://www.instagram.com/equimed.be"]}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', function() {
        var b = document.getElementById('burger'),
            l = document.getElementById('navlinks');
        if (b && l) {
            b.addEventListener('click', function() {
                l.classList.toggle('open')
            });
            l.querySelectorAll('a').forEach(function(a) {
                a.addEventListener('click', function() {
                    l.classList.remove('open')
                })
            });
        }
        var y = document.getElementById('year');
        if (y)
            y.textContent = new Date().getFullYear();
        var io = new IntersectionObserver(function(e) {
            e.forEach(function(x) {
                if (x.isIntersecting) {
                    x.target.classList.add('in');
                    io.unobserve(x.target)
                }
            })
        }, {
            threshold: .12
        });
        document.querySelectorAll('.reveal').forEach(function(el) {
            io.observe(el)
        });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="nav">
<div className="wrap nav-in">
<a className="brand" href="index.html">
        Sacha
        <span className="">D'Houwer</span>
</a>
<nav className="nav-links" id="navlinks">
<a className="active" href="/home">Accueil</a>
<a className="" href="/chevaux">Les chevaux</a>
<a className="" href="/business">Entreprendre</a>
<a className="" href="/mon-histoire">Mon histoire</a>
<a className="nav-cta" href="https://www.skool.com/le-cercle-des-chevaux-apaises-6626">Communauté gratuite</a>
</nav>
<button aria-label="Menu" className="burger" id="burger">☰</button>
</div>
</header>

<section className="hero">
<div className="wrap hero-grid">
<div className="reveal">
<p className="eyebrow">Système nerveux · chevaux &amp; cavalières</p>
<h1 className="">
          Le stress de ton cheval, ce n'est pas un défaut.
          <em className="">C'est un signal.</em>
</h1>
<p className="lead">J'aide les cavalières à lire ce signal. Chez leur cheval. Et chez elles. Parce que les deux systèmes nerveux se parlent, tout le temps.</p>
<div className="hero-cta-row">
<a className="btn" href="https://www.skool.com/le-cercle-des-chevaux-apaises-6626">
            Rejoindre la communauté gratuite
            <span className="arrow">→</span>
</a>
</div>
<p className="micro">Gratuit. Un mini-programme offert pour commencer dès aujourd'hui.</p>
</div>
<div className="reveal photo bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ebff4c5-b41f-4a2e-80b4-e099e48f1da7_1600w.png)] bg-cover bg-center">


</div>
</div>
</section>

<section className="alt">
<div className="wrap">
<div className="signature reveal">
<svg aria-hidden="true" className="elastic" preserveaspectratio="xMidYMid meet" viewbox="0 0 600 40">
<line x1="40" x2="560" y1="20" y2="20"></line>
<circle cx="40" cy="20" r="6"></circle>
<circle cx="560" cy="20" r="6"></circle>
</svg>
<blockquote className="">
          L'objectif n'est pas d'être moins stressé —
          
          L'objectif, c'est que ton système nerveux apprenne à se tendre et se détendre comme un élastique, sans
          difficulté.
        </blockquote>
<cite className="">Sacha D'Houwer</cite>
</div>
</div>
</section>

<section className="">
<div className="wrap">
<div className="section-head reveal">
<p className="eyebrow">Par où entrer</p>
<h2 className="">Je transmets deux choses. Elles se ressemblent plus qu'on ne croit.</h2>
</div>
<div className="doors">
<a className="door door-h reveal" href="chevaux.html">
<span className="k">Le point de départ</span>
<h3>Les chevaux</h3>
<p className="">Apprendre à réguler le système nerveux de ton cheval, et le tien. Comprendre son stress au lieu de le subir. C'est par là que presque tout le monde commence.</p>
<span className="go cursor-pointer" onclick="window.location.href='/chevaux'" role="button">Découvrir l'approche cheval →</span>
</a>
<a className="door door-b reveal" href="entreprendre.html">
<span className="k">L'autre chemin</span>
<h3 className="">Entreprendre autrement</h3>
<p className="">Pour celles qui veulent construire un revenu qui rend libre. Et se révéler en chemin.</p>
<span className="go" onclick="window.location.href='/business'" role="button">Voir cette voie →</span>
</a>
</div>
</div>
</section>

<section className="alt">
<div className="wrap split rev">
<div className="bloc reveal">
<p className="eyebrow">Qui je suis</p>
<h2 className="">Enseignante de métier. Cavalière de toujours.</h2>
<p className="">Philosophie le jour, chevaux le reste du temps. J'ai cherché longtemps - nutrition, énergétique, communication animale - avant de comprendre que <strong className="">le stress était la cause, pas le symptôme.</strong></p>
<p className="">Alors je suis allée chercher au Canada la formation qui n'existait pas chez nous. Aujourd'hui, c'est mon expertise.</p>
<span className="handw">On m'appelle un peu la Mary Poppins des chevaux. Je le prends bien.</span>
<div className="" style={{marginTop: '1.8rem'}}>
<a className="btn btn-ghost" href="/mon-histoire">
            Lire mon histoire
            <span className="arrow">→</span>
</a>
</div>
</div>
<div className="reveal photo bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78d449dc-7aa9-45a2-8bee-27379090595d_1600w.jpg)] bg-cover bg-center">


</div>
</div>
</section>

<section className="final">
<div className="wrap reveal">
<h2 className="">On commence par le plus simple ?</h2>
<p className="">La communauté gratuite. Tu y entres, tu testes, tu repars avec un premier outil pour ton cheval. Pas de pression : juste un début.</p>
<a className="btn" href="https://www.skool.com/le-cercle-des-chevaux-apaises-6626">
        Rejoindre la communauté gratuite
        <span className="arrow">→</span>
</a>
<p className="micro">Gratuit · mini-programme offert · tu pars quand tu veux.</p>
</div>
</section>
<footer className="">
<div className="wrap">
<div className="foot-in">
<div className="foot-brand">
          Sacha
          <span>D'Houwer</span>
</div>
<nav className="foot-links">
<a className="" href="/chevaux">Les chevaux</a>
<a className="" href="/business">Entreprendre</a>
<a className="" href="/mon-histoire">Mon histoire</a>
<a className="" href="https://www.instagram.com/sacha.dhouwer" rel="noopener" target="_blank">Instagram</a>
</nav>
</div>
<p className="foot-legal">© <span id="year">2026</span> Sacha D'Houwer — Régulation du système nerveux équin · Province de Liège, Belgique </p>
</div>
</footer>


    </>
  );
}
