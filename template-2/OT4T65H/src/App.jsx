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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            // Existing button interactions...
            const morphBtn = document.getElementById('morphBtn');
            const morphText = document.getElementById('morphText');
            const morphIcon = document.getElementById('morphIcon');

            morphBtn.addEventListener('mouseenter', () => {
                morphText.textContent = 'Let\'s go!';
                morphIcon.classList.remove('opacity-0');
            });

            morphBtn.addEventListener('mouseleave', () => {
                morphText.textContent = 'Hover me';
                morphIcon.classList.add('opacity-0');
            });

            // Loading button
            const loadingBtn = document.getElementById('loadingBtn');
            const loadingText = document.getElementById('loadingText');
            const loadingSpinner = document.getElementById('loadingSpinner');

            loadingBtn.addEventListener('click', () => {
                loadingText.textContent = 'Processing...';
                loadingSpinner.classList.remove('hidden');
                loadingBtn.disabled = true;
                loadingBtn.classList.add('opacity-75', 'cursor-not-allowed');

                setTimeout(() => {
                    loadingText.textContent = 'Complete!';
                    loadingSpinner.classList.add('hidden');
                    loadingBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                    loadingBtn.disabled = false;

                    setTimeout(() => {
                        loadingText.textContent = 'Start Process';
                    }, 2000);
                }, 3000);
            });

            // Success button
            const successBtn = document.getElementById('successBtn');
            const successText = document.getElementById('successText');
            const successIcon = document.getElementById('successIcon');

            successBtn.addEventListener('click', () => {
                successBtn.classList.remove('bg-red-600');
                successBtn.classList.add('bg-green-600');
                successText.textContent = 'Saved!';
                successIcon.classList.remove('opacity-0');

                setTimeout(() => {
                    successBtn.classList.remove('bg-green-600');
                    successBtn.classList.add('bg-red-600');
                    successText.textContent = 'Save Changes';
                    successIcon.classList.add('opacity-0');
                }, 2000);
            });

            // Particle button
            const particleBtn = document.getElementById('particleBtn');
            particleBtn.addEventListener('click', (e) => {
                const rect = particleBtn.getBoundingClientRect();
                for (let i = 0; i < 12; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    particle.style.left = Math.random() * rect.width + 'px';
                    particle.style.top = Math.random() * rect.height + 'px';
                    particleBtn.appendChild(particle);
                    
                    setTimeout(() => particle.remove(), 2000);
                }
            });

            // Enhanced toggles
            const toggles = [
                { btn: 'toggle1', active: false },
                { btn: 'toggle2', active: false }
            ];

            toggles.forEach(toggle => {
                const btn = document.getElementById(toggle.btn);
                const handle = btn.querySelector('div');

                btn.addEventListener('click', () => {
                    toggle.active = !toggle.active;
                    if (toggle.active) {
                        btn.classList.remove('bg-zinc-600');
                        btn.classList.add('bg-violet-600');
                        if (toggle.btn === 'toggle1') {
                            handle.style.transform = 'translateX(24px)';
                        } else {
                            handle.style.transform = 'translateX(28px)';
                        }
                    } else {
                        btn.classList.remove('bg-violet-600');
                        btn.classList.add('bg-zinc-600');
                        handle.style.transform = 'translateX(0)';
                    }
                });
            });

            // Icon toggle
            const iconToggle = document.getElementById('iconToggle');
            let iconToggleActive = false;
            iconToggle.addEventListener('click', () => {
                iconToggleActive = !iconToggleActive;
                const handle = iconToggle.querySelector('div');
                const volumeX = iconToggle.querySelector('[data-lucide="volume-x"]');
                const volume2 = iconToggle.querySelector('[data-lucide="volume-2"]');
                
                if (iconToggleActive) {
                    iconToggle.classList.remove('bg-zinc-600');
                    iconToggle.classList.add('bg-green-600');
                    handle.style.transform = 'translateX(28px)';
                    volumeX.classList.add('opacity-0');
                    volume2.classList.remove('opacity-0');
                } else {
                    iconToggle.classList.remove('bg-green-600');
                    iconToggle.classList.add('bg-zinc-600');
                    handle.style.transform = 'translateX(0)';
                    volumeX.classList.remove('opacity-0');
                    volume2.classList.add('opacity-0');
                }
            });

            // Multi-state toggle
            const multiToggle = document.getElementById('multiToggle');
            const multiToggleText = document.getElementById('multiToggleText');
            let multiState = 0; // 0: Auto, 1: Light, 2: Dark
            const states = ['Auto', 'Light', 'Dark'];
            const colors = ['bg-zinc-600', 'bg-yellow-600', 'bg-indigo-600'];

            multiToggle.addEventListener('click', () => {
                multiState = (multiState + 1) % 3;
                const handle = multiToggle.querySelector('div');
                
                multiToggle.classList.remove(...colors);
                multiToggle.classList.add(colors[multiState]);
                multiToggleText.textContent = states[multiState];
                
                handle.style.transform = `translateX(${multiState * 22}px)`;
            });

            // Checkbox
            const checkbox1 = document.getElementById('checkbox1');
            let checkboxActive = false;

            checkbox1.addEventListener('click', () => {
                checkboxActive = !checkboxActive;
                const icon = checkbox1.querySelector('i');
                
                if (checkboxActive) {
                    checkbox1.classList.remove('border-zinc-400');
                    checkbox1.classList.add('border-violet-600', 'bg-violet-600');
                    icon.classList.remove('opacity-0');
                    checkbox1.classList.add('scale-110');
                    setTimeout(() => checkbox1.classList.remove('scale-110'), 200);
                } else {
                    checkbox1.classList.remove('border-violet-600', 'bg-violet-600');
                    checkbox1.classList.add('border-zinc-400');
                    icon.classList.add('opacity-0');
                }
            });

            // Heart toggle
            const heartToggle = document.getElementById('heartToggle');
            let heartActive = false;
            heartToggle.addEventListener('click', () => {
                heartActive = !heartActive;
                const heart = heartToggle.querySelector('i');
                
                if (heartActive) {
                    heart.classList.remove('text-zinc-400');
                    heart.classList.add('text-red-500');
                    heartToggle.classList.add('animate-pulse');
                    setTimeout(() => heartToggle.classList.remove('animate-pulse'), 1000);
                } else {
                    heart.classList.remove('text-red-500');
                    heart.classList.add('text-zinc-400');
                }
            });

            // Enhanced sliders
            const volumeSlider = document.getElementById('volumeSlider');
            const volumeValue = document.getElementById('volumeValue');
            const volumeProgress = document.getElementById('volumeProgress');

            volumeSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                volumeValue.textContent = `${value}%`;
                volumeProgress.style.width = `${value}%`;
            });

            // Color slider
            const colorSlider = document.getElementById('colorSlider');
            const colorPreview = document.getElementById('colorPreview');

            colorSlider.addEventListener('input', (e) => {
                const hue = e.target.value;
                colorPreview.style.background = `hsl(${hue}, 100%, 50%)`;
            });

            // Range slider
            const minPrice = document.getElementById('minPrice');
            const maxPrice = document.getElementById('maxPrice');
            const priceRange = document.getElementById('priceRange');
            const sliderTrack = document.getElementById('sliderTrack');

            function updatePriceRange() {
                const min = parseInt(minPrice.value);
                const max = parseInt(maxPrice.value);
                
                if (min >= max) {
                    if (event.target === minPrice) {
                        minPrice.value = max - 1;
                    } else {
                        maxPrice.value = min + 1;
                    }
                    return;
                }
                
                priceRange.textContent = `$${min} - $${max}`;
                
                const minPercent = (min / 100) * 100;
                const maxPercent = (max / 100) * 100;
                
                sliderTrack.style.left = `${minPercent}%`;
                sliderTrack.style.width = `${maxPercent - minPercent}%`;
            }

            minPrice.addEventListener('input', updatePriceRange);
            maxPrice.addEventListener('input', updatePriceRange);
            updatePriceRange();

            // Brightness slider
            const brightnessSlider = document.getElementById('brightnessSlider');
            const brightnessValue = document.getElementById('brightnessValue');
            const brightnessProgress = document.getElementById('brightnessProgress');
            const brightnessIcon = document.getElementById('brightnessIcon');
            const brightnessContainer = document.getElementById('brightnessContainer');

            brightnessSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                brightnessValue.textContent = `${value}%`;
                brightnessProgress.style.width = `${value}%`;
                
                // Change icon based on brightness
                if (value < 30) {
                    brightnessIcon.setAttribute('data-lucide', 'moon');
                } else if (value < 70) {
                    brightnessIcon.setAttribute('data-lucide', 'sun');
                } else {
                    brightnessIcon.setAttribute('data-lucide', 'sun');
                }
                
                // Adjust container opacity
                brightnessContainer.style.opacity = 0.5 + (value / 100) * 0.5;
                
                lucide.createIcons();
            });

            // Temperature slider
            const tempSlider = document.getElementById('tempSlider');
            const tempValue = document.getElementById('tempValue');
            const tempProgress = document.getElementById('tempProgress');

            tempSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                tempValue.textContent = `${value}°C`;
                
                const percentage = ((value - 10) / 25) * 100;
                tempProgress.style.width = `${percentage}%`;
            });

            // Circular progress
            const circularSlider = document.getElementById('circularSlider');
            const circularValue = document.getElementById('circularValue');
            const progressCircle = document.getElementById('progressCircle');

            circularSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                circularValue.textContent = `${value}%`;
                
                const circumference = 2 * Math.PI * 16;
                const offset = circumference - (value / 100) * circumference;
                progressCircle.style.strokeDashoffset = offset;
            });

            // Animations
            const shakeBtn = document.getElementById('shakeBtn');
            shakeBtn.addEventListener('click', () => {
                shakeBtn.classList.add('shake');
                setTimeout(() => shakeBtn.classList.remove('shake'), 500);
            });

            // Flip card
            const flipCard = document.getElementById('flipCard');
            flipCard.addEventListener('click', () => {
                flipCard.classList.toggle('flipped');
            });

            // Morphing icon
            const morphIconBtn = document.getElementById('morphIconBtn');
            const morphIconElement = morphIconBtn.querySelector('i');
            let isPlaying = false;

            morphIconBtn.addEventListener('click', () => {
                isPlaying = !isPlaying;
                morphIconElement.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
                lucide.createIcons();
            });

            // Interactive Elements

            // Drag and Drop
            const dragItem = document.getElementById('dragItem');
            const dropZone = document.getElementById('dropZone');
            let isDragging = false;

            dragItem.addEventListener('dragstart', (e) => {
                isDragging = true;
                dragItem.classList.add('opacity-50');
                dropZone.classList.add('border-violet-500', 'bg-violet-500/10');
            });

            dragItem.addEventListener('dragend', () => {
                isDragging = false;
                dragItem.classList.remove('opacity-50');
                dropZone.classList.remove('border-violet-500', 'bg-violet-500/10');
            });

            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('scale-105');
            });

            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('scale-105');
            });

            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('scale-105');
                dropZone.innerHTML = '<span class="text-green-400 text-sm">Dropped!</span>';
                
                setTimeout(() => {
                    dropZone.innerHTML = '<span class="text-zinc-400 text-sm">Drop here</span>';
                }, 2000);
            });

            dragItem.draggable = true;

            // Fixed Star Rating
            const stars = document.querySelectorAll('.star');
            const ratingText = document.getElementById('ratingText');
            let currentRating = 0;

            stars.forEach((star, index) => {
                star.addEventListener('mouseenter', () => {
                    highlightStars(index + 1);
                });

                star.addEventListener('mouseleave', () => {
                    highlightStars(currentRating);
                });

                star.addEventListener('click', () => {
                    currentRating = index + 1;
                    highlightStars(currentRating);
                    updateRatingText(currentRating);
                    
                    // Add wiggle effect
                    star.classList.add('wiggle');
                    setTimeout(() => star.classList.remove('wiggle'), 500);
                });
            });

            function highlightStars(count) {
                stars.forEach((star, index) => {
                    const icon = star.querySelector('.star-icon');
                    if (index < count) {
                        icon.classList.remove('empty');
                        icon.classList.add('filled');
                    } else {
                        icon.classList.remove('filled');
                        icon.classList.add('empty');
                    }
                });
            }

            function updateRatingText(rating) {
                const texts = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
                ratingText.textContent = texts[rating] || 'Click to rate';
            }

            // Counter
            const counterValue = document.getElementById('counterValue');
            const incrementBtn = document.getElementById('incrementBtn');
            const decrementBtn = document.getElementById('decrementBtn');
            let counter = 0;

            function animateCounter(newValue) {
                const startValue = counter;
                const duration = 200;
                const startTime = performance.now();

                function animate(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const currentValue = Math.round(startValue + (newValue - startValue) * progress);
                    counterValue.textContent = currentValue;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
                
                requestAnimationFrame(animate);
                counter = newValue;
            }

            incrementBtn.addEventListener('click', () => {
                animateCounter(counter + 1);
                incrementBtn.classList.add('scale-110');
                setTimeout(() => incrementBtn.classList.remove('scale-110'), 150);
            });

            decrementBtn.addEventListener('click', () => {
                animateCounter(counter - 1);
                decrementBtn.classList.add('scale-110');
                setTimeout(() => decrementBtn.classList.remove('scale-110'), 150);
            });

            // Progress Steps
            const steps = document.querySelectorAll('.step');
            const stepProgress = document.querySelectorAll('.step-progress');
            const prevStepBtn = document.getElementById('prevStep');
            const nextStepBtn = document.getElementById('nextStep');
            let currentStep = 1;

            function updateSteps() {
                steps.forEach((step, index) => {
                    if (index < currentStep) {
                        step.classList.remove('bg-zinc-600');
                        step.classList.add('bg-violet-600');
                    } else {
                        step.classList.remove('bg-violet-600');
                        step.classList.add('bg-zinc-600');
                    }
                });

                stepProgress.forEach((progress, index) => {
                    if (index < currentStep - 1) {
                        progress.style.width = '100%';
                    } else {
                        progress.style.width = '0%';
                    }
                });

                prevStepBtn.disabled = currentStep === 1;
                nextStepBtn.disabled = currentStep === 3;
                
                if (prevStepBtn.disabled) {
                    prevStepBtn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    prevStepBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
                
                if (nextStepBtn.disabled) {
                    nextStepBtn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    nextStepBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            }

            nextStepBtn.addEventListener('click', () => {
                if (currentStep < 3) {
                    currentStep++;
                    updateSteps();
                }
            });

            prevStepBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateSteps();
                }
            });

            updateSteps();
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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
<div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
</div>

<header className="relative z-50 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
<div className="max-w-7xl sm:px-6 lg:px-8 border-slate-50/5 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset] floating-element">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</span>
<span className="text-lg font-semibold tracking-tight">UI Playground</span>
</a>
<nav className="hidden md:flex gap-1 border border-slate-50/5 rounded-full px-4 items-center">
<a className="hover:text-white text-sm font-medium text-zinc-300 px-3 py-2" href="#buttons">Buttons</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#toggles">Toggles</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#sliders">Sliders</a>
<a className="hover:text-white text-sm font-medium text-zinc-300 px-3 py-2" href="#animations">Animations</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#interactive">Interactive</a>
</nav>
<div className="flex gap-2 items-center">
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md p-[1px] items-center justify-center" style={{backgroundImage: `linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)`}}>
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md px-4 py-2">
<i className="h-4 w-4" data-lucide="heart"></i>
<span>Enjoy</span>
</span>
</button>
</div>
</div>
</div>
</header>

<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

<div className="text-center mb-16">
<h1 className="text-5xl sm:text-6xl font-semibold text-white tracking-tight mb-4">
                Interactive UI Elements
            </h1>
<p className="text-xl text-zinc-300 mb-8">
                Explore satisfying buttons, toggles, sliders, and animations
            </p>
</div>

<section className="mb-20" id="buttons">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Satisfying Buttons</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Gradient Glow</h3>
<button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-medium hover:scale-105 glow-on-hover transition-all duration-300 ease-out">
                        Click me!
                    </button>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Ripple Effect</h3>
<button className="w-full py-3 px-6 rounded-xl bg-emerald-600 text-white font-medium ripple transition-all duration-200">
                        Press & Hold
                    </button>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Morphing</h3>
<button className="w-full py-3 px-6 rounded-xl bg-orange-600 text-white font-medium transition-all duration-500 hover:rounded-full" id="morphBtn">
<span id="morphText">Hover me</span>
<i className="w-4 h-4 ml-2 opacity-0 transition-opacity duration-300" data-lucide="arrow-right" id="morphIcon"></i>
</button>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Loading State</h3>
<button className="w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-medium transition-all duration-300" id="loadingBtn">
<span id="loadingText">Start Process</span>
<div className="hidden inline-block w-4 h-4 border-2 border-white border-r-transparent rounded-full animate-spin ml-2" id="loadingSpinner"></div>
</button>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Success Feedback</h3>
<button className="w-full py-3 px-6 rounded-xl bg-red-600 hover:bg-green-600 text-white font-medium transition-all duration-300" id="successBtn">
<span id="successText">Save Changes</span>
<i className="w-4 h-4 ml-2 opacity-0 transition-opacity duration-300" data-lucide="check" id="successIcon"></i>
</button>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Particle Effect</h3>
<button className="relative overflow-hidden w-full py-3 px-6 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300" id="particleBtn">
                        Magic Click
                    </button>
</div>
</div>
</section>

<section className="mb-20" id="toggles">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Interactive Toggles</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Smooth Toggle</h3>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Dark Mode</span>
<button className="relative w-14 h-8 rounded-full bg-zinc-600 transition-colors duration-300" id="toggle1">
<div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300"></div>
</button>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">iOS Style</h3>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Notifications</span>
<button className="relative w-16 h-9 rounded-full bg-zinc-600 transition-colors duration-300" id="toggle2">
<div className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg transform transition-transform duration-300"></div>
</button>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Icon Toggle</h3>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Sound</span>
<button className="relative w-16 h-9 rounded-full bg-zinc-600 transition-colors duration-300 flex items-center" id="iconToggle">
<div className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-600 transition-opacity duration-300" data-lucide="volume-x"></i>
<i className="absolute w-4 h-4 text-zinc-600 opacity-0 transition-opacity duration-300" data-lucide="volume-2"></i>
</div>
</button>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Multi-State</h3>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Theme</span>
<button className="relative w-20 h-9 rounded-full bg-zinc-600 transition-colors duration-300" id="multiToggle">
<div className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg transform transition-transform duration-300"></div>
<span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white font-medium" id="multiToggleText">Auto</span>
</button>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Animated Check</h3>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Enable Feature</span>
<button className="w-6 h-6 rounded border-2 border-zinc-400 bg-transparent transition-all duration-300 flex items-center justify-center" id="checkbox1">
<i className="w-4 h-4 text-white opacity-0 transition-opacity duration-300" data-lucide="check"></i>
</button>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Heart Like</h3>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Favorite</span>
<button className="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110" id="heartToggle">
<i className="w-6 h-6 text-zinc-400 hover:text-red-500 transition-colors duration-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>
</section>

<section className="mb-20" id="sliders">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Smooth Interactive Sliders</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Volume Control</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="volume-2"></i>
                                Volume
                            </span>
<span className="text-white font-medium bg-violet-600/20 px-2 py-1 rounded-lg text-sm" id="volumeValue">50%</span>
</div>
<div className="relative">
<input className="w-full custom-slider" id="volumeSlider" max="100" min="0" type="range" value="50" />
<div className="absolute top-0 h-6 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full pointer-events-none" id="volumeProgress" style={{width: `50%`, height: `6px`}}></div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Color Picker</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-zinc-300">Hue</span>
<div className="w-8 h-8 rounded-lg border-2 border-white/20" id="colorPreview" style={{background: `hsl(180, 100%, 50%)`}}></div>
</div>
<div className="relative">
<input className="w-full custom-slider color-slider" id="colorSlider" max="360" min="0" type="range" value="180" />
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Price Range</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-zinc-300">Budget</span>
<span className="text-white font-medium bg-cyan-600/20 px-2 py-1 rounded-lg text-sm" id="priceRange">$20 - $80</span>
</div>
<div className="multi-range-slider">
<div className="slider-track" id="sliderTrack"></div>
<input className="custom-slider" id="minPrice" max="100" min="0" type="range" value="20" />
<input className="custom-slider" id="maxPrice" max="100" min="0" type="range" value="80" />
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Brightness</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sun" id="brightnessIcon"></i>
                                Level
                            </span>
<span className="text-white font-medium bg-yellow-600/20 px-2 py-1 rounded-lg text-sm" id="brightnessValue">75%</span>
</div>
<div className="relative" id="brightnessContainer">
<input className="w-full custom-slider" id="brightnessSlider" max="100" min="0" type="range" value="75" />
<div className="absolute top-0 h-6 bg-gradient-to-r from-gray-800 to-yellow-400 rounded-full pointer-events-none" id="brightnessProgress" style={{width: `75%`, height: `6px`}}></div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Temperature</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="thermometer"></i>
                                Climate
                            </span>
<span className="text-white font-medium bg-orange-600/20 px-2 py-1 rounded-lg text-sm" id="tempValue">22°C</span>
</div>
<div className="relative">
<input className="w-full custom-slider" id="tempSlider" max="35" min="10" type="range" value="22" />
<div className="absolute top-0 h-6 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-full pointer-events-none" id="tempProgress" style={{width: `48%`, height: `6px`}}></div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Circular Progress</h3>
<div className="flex flex-col items-center space-y-4">
<div className="relative w-24 h-24">
<svg className="w-24 h-24" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="#52525b" strokeWidth="2"></circle>
<circle className="progress-ring" cx="18" cy="18" fill="none" id="progressCircle" r="16" stroke="#8b5cf6" strokeDasharray="100" strokeDashoffset="25" strokeWidth="2"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-medium text-lg" id="circularValue">75%</span>
</div>
</div>
<input className="w-full custom-slider" id="circularSlider" max="100" min="0" type="range" value="75" />
</div>
</div>
</div>
</section>

<section className="mb-20" id="animations">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Delightful Animations</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-pointer floating-card">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="heart"></i>
</div>
<h3 className="text-lg font-medium text-white">Floating Card</h3>
</div>
<p className="text-zinc-300 text-sm">Hover me for a smooth lift effect</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center animate-pulse cursor-pointer" id="pulseCircle">
<i className="w-5 h-5 text-white" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium text-white">Pulse Effect</h3>
</div>
<p className="text-zinc-300 text-sm">Indicates activity or loading</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<div className="flex items-center gap-3 mb-3">
<button className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center hover:animate-bounce" id="bounceBtn">
<i className="w-5 h-5 text-white" data-lucide="star"></i>
</button>
<h3 className="text-lg font-medium text-white">Bounce Click</h3>
</div>
<p className="text-zinc-300 text-sm">Click the star for bounce effect</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<div className="flex items-center gap-3 mb-3">
<button className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center" id="shakeBtn">
<i className="w-5 h-5 text-white" data-lucide="alert-triangle"></i>
</button>
<h3 className="text-lg font-medium text-white">Shake Alert</h3>
</div>
<p className="text-zinc-300 text-sm">Click for error shake animation</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur cursor-pointer flip-card" id="flipCard">
<div className="flip-card-inner">
<div className="flip-card-front">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="rotate-3d"></i>
</div>
<h3 className="text-lg font-medium text-white">Flip Card</h3>
</div>
<p className="text-zinc-300 text-sm">Click to flip me!</p>
</div>
<div className="flip-card-back">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="check-circle"></i>
</div>
<h3 className="text-lg font-medium text-white">Flipped!</h3>
</div>
<p className="text-zinc-300 text-sm">Click again to flip back</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<div className="flex items-center gap-3 mb-3">
<button className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center transition-all duration-300" id="morphIconBtn">
<i className="w-5 h-5 text-white transition-all duration-300" data-lucide="play"></i>
</button>
<h3 className="text-lg font-medium text-white">Icon Morph</h3>
</div>
<p className="text-zinc-300 text-sm">Play/Pause icon transition</p>
</div>
</div>
</section>

<section className="mb-20" id="interactive">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Interactive Elements</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Drag & Drop</h3>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center cursor-move transition-all duration-200 hover:scale-110" id="dragItem">
<i className="w-6 h-6 text-white" data-lucide="move"></i>
</div>
<div className="flex-1 h-16 border-2 border-dashed border-zinc-500 rounded-xl flex items-center justify-center transition-all duration-200" id="dropZone">
<span className="text-zinc-400 text-sm">Drop here</span>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Star Rating</h3>
<div className="space-y-4">
<div className="flex gap-1" id="starRating">
<button className="star w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110" data-rating="1">
<svg className="star-icon empty w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</button>
<button className="star w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110" data-rating="2">
<svg className="star-icon empty w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</button>
<button className="star w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110" data-rating="3">
<svg className="star-icon empty w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</button>
<button className="star w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110" data-rating="4">
<svg className="star-icon empty w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</button>
<button className="star w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110" data-rating="5">
<svg className="star-icon empty w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</button>
</div>
<p className="text-zinc-300 text-sm" id="ratingText">Click to rate</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Animated Counter</h3>
<div className="flex items-center justify-between">
<button className="w-10 h-10 rounded-lg bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors duration-200" id="decrementBtn">
<i className="w-4 h-4 text-white" data-lucide="minus"></i>
</button>
<span className="text-3xl font-bold text-white" id="counterValue">0</span>
<button className="w-10 h-10 rounded-lg bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors duration-200" id="incrementBtn">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<h3 className="text-lg font-medium text-white mb-4">Progress Steps</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="step flex items-center justify-center w-8 h-8 rounded-full bg-violet-600 text-white text-sm font-medium">1</div>
<div className="w-16 h-1 bg-zinc-600 rounded-full">
<div className="step-progress w-0 h-1 bg-violet-600 rounded-full transition-all duration-500"></div>
</div>
<div className="step flex items-center justify-center w-8 h-8 rounded-full bg-zinc-600 text-white text-sm font-medium">2</div>
<div className="w-16 h-1 bg-zinc-600 rounded-full">
<div className="step-progress w-0 h-1 bg-violet-600 rounded-full transition-all duration-500"></div>
</div>
<div className="step flex items-center justify-center w-8 h-8 rounded-full bg-zinc-600 text-white text-sm font-medium">3</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-zinc-600 hover:bg-zinc-700 text-white rounded-lg transition-colors duration-200" disabled id="prevStep">Previous</button>
<button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors duration-200" id="nextStep">Next</button>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
