import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Reveal Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });

        // Keyboard Functionality
        document.addEventListener('DOMContentLoaded', () => {
            const output = document.getElementById('typed-text');
            const keys = document.querySelectorAll('.key');

            // Map standard keys to DOM elements
            const getKeyElement = (key) => {
                const lowerKey = key.toLowerCase();
                // Handle special cases
                if (key === ' ') return document.querySelector('[data-key=" "]');
                if (key === 'Backspace') return document.querySelector('[data-key="backspace"]');
                if (key === 'Tab') return document.querySelector('[data-key="tab"]');
                if (key === 'CapsLock') return document.querySelector('[data-key="capslock"]');
                if (key === 'Enter') return document.querySelector('[data-key="enter"]');
                if (key === 'Shift') return document.querySelectorAll('[data-key="shift"]'); // Returns NodeList
                if (key === 'Control') return document.querySelector('[data-key="control"]');
                if (key === 'Alt') return document.querySelectorAll('[data-key="alt"]');
                if (key === 'Meta') return document.querySelectorAll('[data-key="meta"]');
                
                return document.querySelector(`[data-key="${lowerKey}"]`);
            };

            const activateKey = (element) => {
                if (!element) return;
                if (NodeList.prototype.isPrototypeOf(element)) {
                    element.forEach(el => el.classList.add('active'));
                } else {
                    element.classList.add('active');
                }
            };

            const deactivateKey = (element) => {
                if (!element) return;
                if (NodeList.prototype.isPrototypeOf(element)) {
                    element.forEach(el => el.classList.remove('active'));
                } else {
                    element.classList.remove('active');
                }
            };

            // Key Down Event
            document.addEventListener('keydown', (e) => {
                const keyEl = getKeyElement(e.key);
                activateKey(keyEl);

                // Typing Logic for the display
                if (e.key.length === 1) {
                    output.textContent += e.key;
                } else if (e.key === 'Backspace') {
                    output.textContent = output.textContent.slice(0, -1);
                } 
                
                // Keep output length manageable
                if (output.textContent.length > 30) {
                    output.textContent = output.textContent.slice(-30);
                }
            });

            // Key Up Event
            document.addEventListener('keyup', (e) => {
                const keyEl = getKeyElement(e.key);
                deactivateKey(keyEl);
            });

            // Mouse interaction (Clicking virtual keys)
            keys.forEach(key => {
                key.addEventListener('mousedown', () => {
                    const val = key.getAttribute('data-key');
                    key.classList.add('active');
                    
                    if (val === 'backspace') {
                        output.textContent = output.textContent.slice(0, -1);
                    } else if (val.length === 1) {
                        output.textContent += val;
                    }
                });

                key.addEventListener('mouseup', () => {
                    key.classList.remove('active');
                });
                
                key.addEventListener('mouseleave', () => {
                    key.classList.remove('active');
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md transition-all duration-500">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-zinc-950 font-bold text-xs">K</div>
<span className="text-zinc-100 font-semibold tracking-tight text-sm">KEYPRESS</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#features">Experience</a>
<a className="hover:text-zinc-100 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium hover:text-zinc-100 transition-colors" href="#">Sign in</a>
<a className="text-xs font-medium bg-zinc-100 text-zinc-950 px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors" href="#">Pre-order</a>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-20"></div>
<div className="max-w-5xl w-full px-4 md:px-6 relative z-10 flex flex-col items-center">
<div className="mb-8 text-center space-y-4 reveal visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-indigo-300 font-medium tracking-wide uppercase">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
<span>Version 2.0 Now Available</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-100 max-w-2xl mx-auto">
                    Type at the speed of <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">thought.</span>
</h1>
<p className="text-sm md:text-base text-zinc-500 max-w-lg mx-auto leading-relaxed">
                    A mechanical experience in a digital world. Start typing on your physical keyboard to interact with the interface below.
                </p>
</div>

<div className="w-full max-w-3xl mb-8 min-h-[60px] flex items-center justify-center reveal visible delay-100">
<div className="text-xl md:text-2xl font-mono text-indigo-400 tracking-tight flex items-center gap-0.5 min-h-[32px]" id="output-display">
<span id="typed-text"></span><span className="cursor w-2 h-6 bg-indigo-500 block"></span>
</div>
</div>

<div className="w-full max-w-4xl p-2 md:p-6 rounded-2xl border border-white/5 bg-zinc-900/40 shadow-2xl backdrop-blur-sm select-none reveal visible delay-200">
<div className="flex flex-col gap-2" id="keyboard-frame">

<div className="flex gap-1 md:gap-2 justify-center">
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="`">`</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="1">1</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="2">2</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="3">3</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="4">4</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="5">5</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="6">6</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="7">7</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="8">8</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="9">9</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="0">0</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="-">-</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="=">=</div>
<div className="key w-16 md:w-20 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="backspace">DEL</div>
</div>

<div className="flex gap-1 md:gap-2 justify-center">
<div className="key w-16 md:w-20 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="tab">TAB</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="q">Q</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="w">W</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="e">E</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="r">R</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="t">T</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="y">Y</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="u">U</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="i">I</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="o">O</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="p">P</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="[">[</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="]">]</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="\">\</div>
</div>

<div className="flex gap-1 md:gap-2 justify-center">
<div className="key w-20 md:w-24 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="capslock">CAPS</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="a">A</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="s">S</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="d">D</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="f">F</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="g">G</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="h">H</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="j">J</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="k">K</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="l">L</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key=";">;</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="'">'</div>
<div className="key w-16 md:w-20 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-indigo-400" data-key="enter">ENTER</div>
</div>

<div className="flex gap-1 md:gap-2 justify-center">
<div className="key w-24 md:w-28 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="shift">SHIFT</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="z">Z</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="x">X</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="c">C</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="v">V</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="b">B</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="n">N</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="m">M</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key=",">,</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key=".">.</div>
<div className="key w-10 md:w-14 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key="/">/</div>
<div className="key w-24 md:w-28 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="shift">SHIFT</div>
</div>

<div className="flex gap-1 md:gap-2 justify-center">
<div className="key w-16 md:w-20 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="control">CTRL</div>
<div className="key w-12 md:w-16 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="meta">CMD</div>
<div className="key w-12 md:w-16 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="alt">ALT</div>
<div className="key w-64 md:w-80 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs md:text-sm font-medium text-zinc-300" data-key=" "></div>
<div className="key w-12 md:w-16 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="alt">ALT</div>
<div className="key w-12 md:w-16 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="meta">CMD</div>
<div className="key w-16 md:w-20 h-10 md:h-14 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] md:text-xs font-medium text-zinc-400" data-key="fn">FN</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 reveal">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-2">Loved by developers</h2>
<p className="text-zinc-500 text-sm">Join thousands of engineers typing faster than ever.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between h-full reveal delay-100">
<div className="mb-4">
<span className="iconify text-indigo-400 mb-4" data-icon="lucide:quote" data-width="20"></span>
<p className="text-sm text-zinc-300 leading-relaxed">"The tactile feedback on this visualizer is incredibly satisfying. It's not just a keyboard, it's a productivity powerhouse."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<div className="text-xs font-medium text-zinc-200">John Doe</div>
<div className="text-[10px] text-zinc-500">Senior Engineer @ Vercel</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between h-full relative overflow-hidden reveal delay-200">
<div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-[40px] rounded-full pointer-events-none"></div>
<div className="mb-4">
<span className="iconify text-indigo-400 mb-4" data-icon="lucide:quote" data-width="20"></span>
<p className="text-sm text-zinc-300 leading-relaxed">"I've never seen a web implementation this smooth. The latency is virtually non-existent and the aesthetics are top tier."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-xs font-bold text-white">AS</div>
<div>
<div className="text-xs font-medium text-zinc-200">Sarah Smith</div>
<div className="text-[10px] text-zinc-500">Frontend Lead @ Stripe</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between h-full reveal delay-300">
<div className="mb-4">
<span className="iconify text-indigo-400 mb-4" data-icon="lucide:quote" data-width="20"></span>
<p className="text-sm text-zinc-300 leading-relaxed">"Simplicity at its finest. The dark mode implementation is perfect for late night coding sessions."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div>
<div className="text-xs font-medium text-zinc-200">Mike Ross</div>
<div className="text-[10px] text-zinc-500">Full Stack @ Linear</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-3">Simple pricing</h2>
<p className="text-zinc-500 text-sm">Pay once, own it forever. No hidden fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/20 flex flex-col reveal delay-100">
<div className="mb-4">
<h3 className="text-sm font-medium text-zinc-400">Starter</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-zinc-100 tracking-tight">$99</span>
<span className="text-sm text-zinc-500">/unit</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Plastic casing
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Wired only
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Standard switches
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-zinc-800 text-xs font-medium text-zinc-100 hover:bg-zinc-700 transition-colors">Buy Starter</button>
</div>

<div className="p-6 rounded-2xl border border-indigo-500/30 bg-zinc-900/60 relative flex flex-col shadow-2xl shadow-indigo-900/10 reveal delay-200">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<div className="mb-4">
<h3 className="text-sm font-medium text-indigo-400">Professional</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-zinc-100 tracking-tight">$199</span>
<span className="text-sm text-zinc-500">/unit</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Aluminum unibody
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Wireless &amp; Wired
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Hot-swappable
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> RGB Backlight
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20">Buy Professional</button>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/20 flex flex-col reveal delay-300">
<div className="mb-4">
<h3 className="text-sm font-medium text-zinc-400">Collector</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-zinc-100 tracking-tight">$399</span>
<span className="text-sm text-zinc-500">/unit</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Brass heavy weight
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Custom engraving
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Lubed switches
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-zinc-800 text-xs font-medium text-zinc-100 hover:bg-zinc-700 transition-colors">Buy Collector</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12 reveal">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center text-zinc-950 font-bold text-[10px]">K</div>
<span className="text-zinc-100 font-semibold tracking-tight text-xs">KEYPRESS</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Designing the future of input devices for creators and developers.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-100 mb-4">Product</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Keyboards</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Switches</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Software</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-100 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-100 mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">License</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600">© 2024 Keypress Inc. All rights reserved.</p>
<div className="flex gap-4">
<span className="iconify text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors" data-icon="lucide:github" data-width="16"></span>
<span className="iconify text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors" data-icon="lucide:instagram" data-width="16"></span>
</div>
</div>
</div>
</footer>


    </>
  );
}
