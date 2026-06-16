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
            // Age Gate Logic
            // Version 2 intentionally ignores the previous test key so the corrected
            // gate is shown once again after deployment.
            const AGE_GATE_KEY = 'aurora_age_verified_v2';
            const LEGACY_AGE_GATE_KEY = 'aurora_age_verified_v1';
            const AGE_GATE_COOKIE = 'aurora_age_verified_v2';
            const AGE_GATE_DAYS = 30;
            const AGE_GATE_DURATION = AGE_GATE_DAYS * 24 * 60 * 60 * 1000;

            const ageGate = document.getElementById('age-gate');
            const yesBtn = document.getElementById('age-gate-yes');
            const noBtn = document.getElementById('age-gate-no');
            const focusableSelector = 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])';
            let removeAgeGateListeners = null;

            const safeLocalStorageGet = (key) => {
              try {
                return window.localStorage.getItem(key);
              } catch (error) {
                return null;
              }
            };

            const safeLocalStorageSet = (key, value) => {
              try {
                window.localStorage.setItem(key, value);
                return true;
              } catch (error) {
                return false;
              }
            };

            const safeLocalStorageRemove = (key) => {
              try {
                window.localStorage.removeItem(key);
              } catch (error) {
                // Storage may be unavailable in some preview/privacy environments.
              }
            };

            const readCookie = (name) => {
              const prefix = `${encodeURIComponent(name)}=`;
              const cookie = document.cookie
                .split(';')
                .map((part) => part.trim())
                .find((part) => part.startsWith(prefix));
              return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : null;
            };

            const removeVerification = () => {
              safeLocalStorageRemove(AGE_GATE_KEY);
              safeLocalStorageRemove(LEGACY_AGE_GATE_KEY);
              document.cookie = `${encodeURIComponent(AGE_GATE_COOKIE)}=; Max-Age=0; Path=/; SameSite=Lax`;
            };

            const setAgeVerified = () => {
              const expiresAt = Date.now() + AGE_GATE_DURATION;
              const value = JSON.stringify({ verified: true, expiresAt });

              safeLocalStorageSet(AGE_GATE_KEY, value);
              document.cookie = `${encodeURIComponent(AGE_GATE_COOKIE)}=${encodeURIComponent(String(expiresAt))}; Max-Age=${Math.floor(AGE_GATE_DURATION / 1000)}; Path=/; SameSite=Lax`;
            };

            const isStoredVerificationValid = (rawValue) => {
              if (!rawValue) return false;

              try {
                const data = JSON.parse(rawValue);
                return Boolean(
                  data &&
                  data.verified === true &&
                  Number.isFinite(Number(data.expiresAt)) &&
                  Date.now() < Number(data.expiresAt)
                );
              } catch (error) {
                return false;
              }
            };

            const isAgeVerified = () => {
              const storedValue = safeLocalStorageGet(AGE_GATE_KEY);

              if (isStoredVerificationValid(storedValue)) {
                return true;
              }

              if (storedValue) {
                safeLocalStorageRemove(AGE_GATE_KEY);
              }

              const cookieExpiresAt = Number(readCookie(AGE_GATE_COOKIE));
              return Number.isFinite(cookieExpiresAt) && Date.now() < cookieExpiresAt;
            };

            const showAgeGate = () => {
              if (!ageGate) return;

              ageGate.hidden = false;
              ageGate.classList.remove('hidden');
              ageGate.style.display = 'block';
              ageGate.setAttribute('aria-hidden', 'false');
              document.body.classList.add('age-gate-active');

              const trapFocus = (event) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  event.stopPropagation();
                  return;
                }

                if (event.key !== 'Tab') return;

                const focusable = Array.from(ageGate.querySelectorAll(focusableSelector))
                  .filter((element) => !element.hasAttribute('disabled') && element.offsetParent !== null);

                if (!focusable.length) {
                  event.preventDefault();
                  return;
                }

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                  event.preventDefault();
                  last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                  event.preventDefault();
                  first.focus();
                }
              };

              document.addEventListener('keydown', trapFocus, true);
              removeAgeGateListeners = () => {
                document.removeEventListener('keydown', trapFocus, true);
              };

              window.setTimeout(() => {
                const firstFocusable = ageGate.querySelector(focusableSelector);
                if (firstFocusable) firstFocusable.focus({ preventScroll: true });
              }, 50);
            };

            const hideAgeGate = () => {
              if (!ageGate) return;

              if (typeof removeAgeGateListeners === 'function') {
                removeAgeGateListeners();
                removeAgeGateListeners = null;
              }

              ageGate.setAttribute('aria-hidden', 'true');
              ageGate.hidden = true;
              ageGate.classList.add('hidden');
              ageGate.style.display = 'none';
              document.body.classList.remove('age-gate-active');
            };

            // Add ?reset-age-gate=1 to the URL whenever you need to test the popup again.
            const ageGateParams = new URLSearchParams(window.location.search);
            if (ageGateParams.get('reset-age-gate') === '1') {
              removeVerification();
            }

            if (isAgeVerified()) {
              hideAgeGate();
            } else {
              showAgeGate();
            }

            if (yesBtn) {
              yesBtn.addEventListener('click', () => {
                setAgeVerified();
                hideAgeGate();
              });
            }

            if (noBtn) {
              noBtn.addEventListener('click', () => {
                const exitUrl = 'https://www.google.com/';

                try {
                  if (window.top && window.top !== window) {
                    window.top.location.href = exitUrl;
                  } else {
                    window.location.href = exitUrl;
                  }
                } catch (error) {
                  window.location.href = exitUrl;
                }
              });
            }

            // Loader Logic
            const loader = document.getElementById('loader');
            const loaderLogo = document.getElementById('loader-logo');

            setTimeout(() => { loaderLogo.style.opacity = '1'; }, 100);

            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    document.body.classList.remove('overflow-hidden');
                    initScrollTriggers();
                }, 400);
            }, 1000);

            // Custom Cursor Logic
            const cursorDot = document.getElementById('cursor-dot');
            const cursorRing = document.getElementById('cursor-ring');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let cursorX = mouseX;
            let cursorY = mouseY;
            let isTouch = window.matchMedia("(pointer: coarse)").matches;

            if(!isTouch) {
                window.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                });

                const renderCursor = () => {
                    cursorX += (mouseX - cursorX) * 0.12;
                    cursorY += (mouseY - cursorY) * 0.12;
                    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                    cursorRing.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
                    requestAnimationFrame(renderCursor);
                };
                requestAnimationFrame(renderCursor);

                // Hover states
                document.querySelectorAll('a, button, .hover-trigger, input').forEach(el => {
                    el.addEventListener('mouseenter', () => { cursorRing.classList.add('hovered'); cursorDot.classList.add('hovered'); });
                    el.addEventListener('mouseleave', () => { cursorRing.classList.remove('hovered'); cursorDot.classList.remove('hovered'); });
                });

                document.querySelectorAll('.img-hover-trigger').forEach(el => {
                    el.addEventListener('mouseenter', () => { cursorRing.classList.add('crosshair'); cursorDot.classList.add('hovered'); });
                    el.addEventListener('mouseleave', () => { cursorRing.classList.remove('crosshair'); cursorDot.classList.remove('hovered'); });
                });
            }

            // Navbar Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(10,10,10,0.85)';
                    navbar.style.backdropFilter = 'blur(20px)';
                    navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
                } else {
                    navbar.style.background = 'transparent';
                    navbar.style.backdropFilter = 'blur(0px)';
                    navbar.style.borderBottomColor = 'transparent';
                }
            });

            // Intersection Observer for scroll animations
            const initScrollTriggers = () => {
                const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
                const staggerObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const elements = entry.target.querySelectorAll('.fade-up');
                            elements.forEach((el, index) => {
                                setTimeout(() => el.classList.add('is-visible'), index * 100);
                            });
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                document.querySelectorAll('.section-stagger').forEach(section => staggerObserver.observe(section));

                const generalObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.2 });
                document.querySelectorAll('.scroll-trigger, .section-trigger').forEach(el => generalObserver.observe(el));

                // Number Counter
                const easeOutQuart = t => 1 - (--t) * t * t * t;
                const counterObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const targetVal = parseInt(entry.target.getAttribute('data-target'));
                            const suffix = entry.target.getAttribute('data-suffix') || '';
                            const duration = 2000;
                            let start = null;
                            const step = timestamp => {
                                if (!start) start = timestamp;
                                const progress = Math.min((timestamp - start) / duration, 1);
                                const easedProgress = easeOutQuart(progress);
                                entry.target.innerText = Math.floor(easedProgress * targetVal) + suffix;
                                if (progress < 1) requestAnimationFrame(step);
                            };
                            requestAnimationFrame(step);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                document.querySelectorAll('.number-counter').forEach(el => counterObserver.observe(el));
            };

            // Sticky Image Subtle Scale Scroll
            const stickyImages = document.querySelectorAll('.sticky-img-inner');
            window.addEventListener('scroll', () => {
                stickyImages.forEach(img => {
                    const rect = img.parentElement.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const progress = 1 - (rect.top / window.innerHeight);
                        const clamped = Math.min(Math.max(progress, 0), 1);
                        const scale = 1.06 - (0.06 * clamped);
                        img.style.transform = `scale(${scale})`;
                    }
                });
            });
        });
  


    document.addEventListener('DOMContentLoaded', function () {
        var newsletterForm = document.getElementById('newsletter-form');
        var newsletterStatus = document.getElementById('newsletter-status');

        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', function (event) {
          event.preventDefault();
          event.stopPropagation();

          var endpoint = newsletterForm.getAttribute('data-endpoint');
          var emailInput = newsletterForm.querySelector('input[name="email"]');
          var submitButton = newsletterForm.querySelector('button[type="submit"]');
          var buttonText = submitButton ? submitButton.querySelector('span') : null;

          if (!emailInput) return false;

          if (emailInput.checkValidity && !emailInput.checkValidity()) {
            emailInput.reportValidity();
            return false;
          }

          if (newsletterStatus) {
            newsletterStatus.textContent = '';
            newsletterStatus.classList.remove('text-red-400');
            newsletterStatus.classList.add('text-[#4CAF72]');
          }

          if (submitButton) submitButton.disabled = true;
          if (buttonText) buttonText.textContent = 'SENDING...';

          fetch(endpoint, {
            method: 'POST',
            body: new FormData(newsletterForm),
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(function (response) {
            if (!response.ok) throw new Error('Formspree submission failed');

            newsletterForm.reset();
            if (newsletterStatus) {
              newsletterStatus.textContent = "Thanks. You're on the list.";
              newsletterStatus.classList.remove('text-red-400');
              newsletterStatus.classList.add('text-[#4CAF72]');
            }
          })
          .catch(function () {
            if (newsletterStatus) {
              newsletterStatus.textContent = 'Something went wrong. Please try again.';
              newsletterStatus.classList.remove('text-[#4CAF72]');
              newsletterStatus.classList.add('text-red-400');
            }
          })
          .finally(function () {
            if (submitButton) submitButton.disabled = false;
            if (buttonText) buttonText.textContent = 'JOIN THE LIST';
          });

          return false;
        });
      });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div aria-describedby="age-gate-desc" aria-hidden="false" aria-labelledby="age-gate-title" aria-modal="true" className="fixed inset-0 z-[2000]" id="age-gate" role="dialog" style={{display: 'block'}}>
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 pointer-events-none" style={{backdropFilter: 'blur(22px)'}}></div>
<div className="relative z-10 h-full w-full flex items-center justify-center px-6 lg:px-12">
<div className="w-full max-w-[34rem] bg-[#0e0e0e]/70 border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.75)]" data-age-gate-panel="">
<div className="px-6 sm:px-10 pt-10 pb-8 text-center">
<div className="w-[7.5rem] mx-auto text-white/90">
<svg className="w-full h-auto" fill="none" viewbox="0 0 1443 408" xmlns="http://www.w3.org/2000/svg">
<path d="M0.540039 0.960938V314.031L1.32007 309.611C98.6901 331.911 238.89 290.311 283.32 227.511C311.02 188.361 284.88 157.781 234.83 144.871L261.03 232.201L217.94 155.271L216.72 153.091L214.08 148.381L212.92 146.311L209.45 140.111L209.33 139.901L208.87 140.041L200.15 142.661L193.34 144.711L193.17 144.761L191.33 145.311L177.75 149.391L165.8 152.971L157.75 155.391L141.45 160.281L133.92 162.541L114.07 168.491L112.2 169.051L110.3 169.621L107.99 170.311L112.5 167.781L112.88 167.561L130.75 157.551L147.62 148.101L152.48 145.381L153.32 144.911L161.2 140.501L161.96 140.071L165.03 138.351L173.35 133.691L173.88 133.391L179.52 130.231L182.51 128.551H182.53L182.57 128.521L186.58 126.271L187.68 125.661L189.03 124.901L190.22 124.241L191.67 123.431L193.87 122.201L194.91 121.611L198.83 119.411L200.28 118.601L199.87 117.251L199.22 115.081L198.38 112.271L197.4 108.991L169.87 17.2709L221.57 109.561L322.9 79.1509L249.87 120.061C339.37 131.221 406.96 175.271 379.45 242.991C348.82 318.361 236.11 380.711 116.48 402.211H401.79V0.960938H0.52002H0.540039Z" fill="currentColor"></path>
<path d="M354.36 238.23C383.93 177.05 324.27 135.69 241.16 124.98L236.45 127.62C316.22 138.03 371.88 178.06 341.46 236.19C297.91 319.41 131.69 379.91 0.550049 364.07V377.74C139.31 392.01 311.64 326.59 354.37 238.22L354.36 238.23Z" fill="currentColor"></path>
<path d="M318.99 233.481C349.88 181.321 303.15 143.961 231.35 133.301L232.71 137.831C294.46 149.631 331.05 183.821 301.2 229.661C256.51 298.331 108.62 345.411 0.540039 325.551V342.881C118.68 361.241 274.55 308.491 318.99 233.481Z" fill="currentColor"></path>
<path d="M549.06 223.32H492.68L485.63 241.3H434.13L492.68 114.16H549.06L607.61 241.3H556.11L549.06 223.32ZM536.05 190.63L520.87 151.76L505.69 190.63H536.05Z" fill="currentColor"></path>
<path d="M760.48 114.16V188.99C760.48 238.94 725.97 244.03 686.75 244.03C647.53 244.03 613.02 238.94 613.02 188.99V114.16H662.71V186.63C662.71 205.16 669.76 211.51 686.74 211.51C703.72 211.51 710.77 205.15 710.77 186.63V114.16H760.46H760.48Z" fill="currentColor"></path>
<path d="M851.92 201.712H824.63V241.312H774.94V114.172H869.99C906.49 114.172 925.11 127.972 925.11 157.042C925.11 176.662 915.17 189.012 899.63 195.552L928.9 241.322H876.5L851.92 201.722V201.712ZM824.63 169.192H859.33C869.99 169.192 875.41 165.742 875.41 157.572C875.41 149.402 869.99 147.042 859.33 147.042H824.63V169.202V169.192Z" fill="currentColor"></path>
<path d="M1104 177.731C1104 227.501 1060.99 244.031 1018.16 244.031C975.33 244.031 932.51 227.501 932.51 177.731C932.51 127.961 975.34 111.621 1018.16 111.621C1060.98 111.621 1104 128.151 1104 177.731ZM1053.58 177.731C1053.58 157.391 1041.29 144.131 1018.16 144.131C995.03 144.131 982.74 157.391 982.74 177.731C982.74 198.071 995.03 211.511 1018.16 211.511C1041.29 211.511 1053.58 198.251 1053.58 177.731Z" fill="currentColor"></path>
<path d="M1191.82 201.712H1164.53V241.312H1114.84V114.172H1209.89C1246.39 114.172 1265.01 127.972 1265.01 157.042C1265.01 176.662 1255.07 189.012 1239.53 195.552L1268.8 241.322H1216.4L1191.82 201.722V201.712ZM1164.53 169.192H1199.23C1209.89 169.192 1215.31 165.742 1215.31 157.572C1215.31 149.402 1209.89 147.042 1199.23 147.042H1164.53V169.202V169.192Z" fill="currentColor"></path>
<path d="M1383.73 223.32H1327.35L1320.3 241.3H1268.8L1327.35 114.16H1383.73L1442.28 241.3H1390.78L1383.73 223.32ZM1370.72 190.63L1355.54 151.76L1340.36 190.63H1370.72Z" fill="currentColor"></path>
<path d="M502.05 289.183V310.923H595.83V348.853H502.05V404.303H441.37V249.043H602.24V289.193H502.06L502.05 289.183Z" fill="currentColor"></path>
<path d="M727.12 382.343H658.27L649.66 404.303H586.77L658.27 249.043H727.12L798.62 404.303H735.73L727.12 382.343ZM711.23 342.413L692.69 294.943L674.15 342.413H711.22H711.23Z" fill="currentColor"></path>
<path d="M901.44 355.941H868.12V404.291H807.44V249.031H923.51C968.09 249.031 990.81 265.891 990.81 301.381C990.81 325.331 978.67 340.421 959.7 348.401L995.45 404.291H931.46L901.45 355.941H901.44ZM868.12 316.241H910.49C923.51 316.241 930.13 312.031 930.13 302.041C930.13 292.051 923.51 289.181 910.49 289.181H868.12V316.241Z" fill="currentColor"></path>
<path d="M1237.96 249.043V404.303H1177.28V320.463L1146.39 404.303H1096.08L1064.97 320.463V404.303H1004.29V249.043H1087.04L1121.24 345.303L1155.22 249.043H1237.97H1237.96Z" fill="currentColor"></path>
<path d="M1440.75 355.06C1440.75 396.09 1404.56 407.63 1343.88 407.63C1274.15 407.63 1248.99 387.67 1248.99 353.95H1312.32C1312.32 365.93 1322.47 370.14 1347.41 370.14C1367.49 370.14 1376.1 367.26 1376.1 359.72C1376.1 351.51 1369.7 351.51 1320.93 345.3C1272.82 339.09 1253.18 328.66 1253.18 296.5C1253.18 262.34 1281.87 245.93 1341.67 245.93C1407.43 245.93 1430.6 267.22 1430.6 296.5H1369.25C1369.25 287.63 1361.53 283.19 1341.22 283.19C1320.91 283.19 1313.2 287.4 1313.2 293.84C1313.2 302.27 1324.45 302.93 1352.48 305.82C1405 311.14 1440.75 313.8 1440.75 355.06Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="font-heading text-[clamp(2.25rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em] text-white mt-8" id="age-gate-title">
            Are you 21 or older?
          </h2>
<p className="text-[0.9375rem] sm:text-[1rem] text-[#bdbdbd] leading-[1.7] mt-5 max-w-[28rem] mx-auto" id="age-gate-desc">
            In compliance with Thai cannabis regulations, you must be at least
            21 years old to enter this website.
          </p>
<div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
<button aria-label="Confirm you are 21 years or older" className="btn btn-age-yes hover-trigger w-full sm:w-auto" id="age-gate-yes" type="button">
                Yes, I am 21+
              </button>
<button aria-label="Decline and leave the website" className="btn btn-ghost btn-age-no hover-trigger w-full sm:w-auto" id="age-gate-no" type="button">
                No
              </button>
</div>
<div className="mt-8 text-[0.6875rem] text-[#666666] uppercase tracking-[0.16em]">
            Adults only. Enjoy responsibly.
          </div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-400" id="loader" style={{display: 'none'}}>
<div className="w-[12rem] opacity-0 transition-opacity duration-300" id="loader-logo">
<svg className="w-full h-auto" fill="none" viewbox="0 0 1443 408" xmlns="http://www.w3.org/2000/svg">
<path d="M0.540039 0.960938V314.031L1.32007 309.611C98.6901 331.911 238.89 290.311 283.32 227.511C311.02 188.361 284.88 157.781 234.83 144.871L261.03 232.201L217.94 155.271L216.72 153.091L214.08 148.381L212.92 146.311L209.45 140.111L209.33 139.901L208.87 140.041L200.15 142.661L193.34 144.711L193.17 144.761L191.33 145.311L177.75 149.391L165.8 152.971L157.75 155.391L141.45 160.281L133.92 162.541L114.07 168.491L112.2 169.051L110.3 169.621L107.99 170.311L112.5 167.781L112.88 167.561L130.75 157.551L147.62 148.101L152.48 145.381L153.32 144.911L161.2 140.501L161.96 140.071L165.03 138.351L173.35 133.691L173.88 133.391L179.52 130.231L182.51 128.551H182.53L182.57 128.521L186.58 126.271L187.68 125.661L189.03 124.901L190.22 124.241L191.67 123.431L193.87 122.201L194.91 121.611L198.83 119.411L200.28 118.601L199.87 117.251L199.22 115.081L198.38 112.271L197.4 108.991L169.87 17.2709L221.57 109.561L322.9 79.1509L249.87 120.061C339.37 131.221 406.96 175.271 379.45 242.991C348.82 318.361 236.11 380.711 116.48 402.211H401.79V0.960938H0.52002H0.540039Z" fill="white"></path>
<path d="M354.36 238.23C383.93 177.05 324.27 135.69 241.16 124.98L236.45 127.62C316.22 138.03 371.88 178.06 341.46 236.19C297.91 319.41 131.69 379.91 0.550049 364.07V377.74C139.31 392.01 311.64 326.59 354.37 238.22L354.36 238.23Z" fill="white"></path>
<path d="M318.99 233.481C349.88 181.321 303.15 143.961 231.35 133.301L232.71 137.831C294.46 149.631 331.05 183.821 301.2 229.661C256.51 298.331 108.62 345.411 0.540039 325.551V342.881C118.68 361.241 274.55 308.491 318.99 233.481Z" fill="white"></path>
<path d="M549.06 223.32H492.68L485.63 241.3H434.13L492.68 114.16H549.06L607.61 241.3H556.11L549.06 223.32ZM536.05 190.63L520.87 151.76L505.69 190.63H536.05Z" fill="white"></path>
<path d="M760.48 114.16V188.99C760.48 238.94 725.97 244.03 686.75 244.03C647.53 244.03 613.02 238.94 613.02 188.99V114.16H662.71V186.63C662.71 205.16 669.76 211.51 686.74 211.51C703.72 211.51 710.77 205.15 710.77 186.63V114.16H760.46H760.48Z" fill="white"></path>
<path d="M851.92 201.712H824.63V241.312H774.94V114.172H869.99C906.49 114.172 925.11 127.972 925.11 157.042C925.11 176.662 915.17 189.012 899.63 195.552L928.9 241.322H876.5L851.92 201.722V201.712ZM824.63 169.192H859.33C869.99 169.192 875.41 165.742 875.41 157.572C875.41 149.402 869.99 147.042 859.33 147.042H824.63V169.202V169.192Z" fill="white"></path>
<path d="M1104 177.731C1104 227.501 1060.99 244.031 1018.16 244.031C975.33 244.031 932.51 227.501 932.51 177.731C932.51 127.961 975.34 111.621 1018.16 111.621C1060.98 111.621 1104 128.151 1104 177.731ZM1053.58 177.731C1053.58 157.391 1041.29 144.131 1018.16 144.131C995.03 144.131 982.74 157.391 982.74 177.731C982.74 198.071 995.03 211.511 1018.16 211.511C1041.29 211.511 1053.58 198.251 1053.58 177.731Z" fill="white"></path>
<path d="M1191.82 201.712H1164.53V241.312H1114.84V114.172H1209.89C1246.39 114.172 1265.01 127.972 1265.01 157.042C1265.01 176.662 1255.07 189.012 1239.53 195.552L1268.8 241.322H1216.4L1191.82 201.722V201.712ZM1164.53 169.192H1199.23C1209.89 169.192 1215.31 165.742 1215.31 157.572C1215.31 149.402 1209.89 147.042 1199.23 147.042H1164.53V169.202V169.192Z" fill="white"></path>
<path d="M1383.73 223.32H1327.35L1320.3 241.3H1268.8L1327.35 114.16H1383.73L1442.28 241.3H1390.78L1383.73 223.32ZM1370.72 190.63L1355.54 151.76L1340.36 190.63H1370.72Z" fill="white"></path>
<path d="M502.05 289.183V310.923H595.83V348.853H502.05V404.303H441.37V249.043H602.24V289.193H502.06L502.05 289.183Z" fill="white"></path>
<path d="M727.12 382.343H658.27L649.66 404.303H586.77L658.27 249.043H727.12L798.62 404.303H735.73L727.12 382.343ZM711.23 342.413L692.69 294.943L674.15 342.413H711.22H711.23Z" fill="white"></path>
<path d="M901.44 355.941H868.12V404.291H807.44V249.031H923.51C968.09 249.031 990.81 265.891 990.81 301.381C990.81 325.331 978.67 340.421 959.7 348.401L995.45 404.291H931.46L901.45 355.941H901.44ZM868.12 316.241H910.49C923.51 316.241 930.13 312.031 930.13 302.041C930.13 292.051 923.51 289.181 910.49 289.181H868.12V316.241Z" fill="white"></path>
<path d="M1237.96 249.043V404.303H1177.28V320.463L1146.39 404.303H1096.08L1064.97 320.463V404.303H1004.29V249.043H1087.04L1121.24 345.303L1155.22 249.043H1237.97H1237.96Z" fill="white"></path>
<path d="M1440.75 355.06C1440.75 396.09 1404.56 407.63 1343.88 407.63C1274.15 407.63 1248.99 387.67 1248.99 353.95H1312.32C1312.32 365.93 1322.47 370.14 1347.41 370.14C1367.49 370.14 1376.1 367.26 1376.1 359.72C1376.1 351.51 1369.7 351.51 1320.93 345.3C1272.82 339.09 1253.18 328.66 1253.18 296.5C1253.18 262.34 1281.87 245.93 1341.67 245.93C1407.43 245.93 1430.6 267.22 1430.6 296.5H1369.25C1369.25 287.63 1361.53 283.19 1341.22 283.19C1320.91 283.19 1313.2 287.4 1313.2 293.84C1313.2 302.27 1324.45 302.93 1352.48 305.82C1405 311.14 1440.75 313.8 1440.75 355.06Z" fill="white"></path>
</svg>
</div>
</div>

<div className="" id="cursor-dot"></div>
<div className="" id="cursor-ring"></div>

<nav className="fixed top-0 w-full h-[4.5rem] z-[100] flex items-center justify-between px-6 lg:px-12 transition-all duration-400 border-b border-transparent text-white" id="navbar" style={{background: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(20px)', borderBottomColor: 'rgba(255, 255, 255, 0.08)'}}>
<div className="flex-shrink-0 w-[7.5rem] mt-1 cursor-pointer hover-trigger">
<svg className="w-full h-auto" fill="none" viewbox="0 0 1443 408" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M0.540039 0.960938V314.031L1.32007 309.611C98.6901 331.911 238.89 290.311 283.32 227.511C311.02 188.361 284.88 157.781 234.83 144.871L261.03 232.201L217.94 155.271L216.72 153.091L214.08 148.381L212.92 146.311L209.45 140.111L209.33 139.901L208.87 140.041L200.15 142.661L193.34 144.711L193.17 144.761L191.33 145.311L177.75 149.391L165.8 152.971L157.75 155.391L141.45 160.281L133.92 162.541L114.07 168.491L112.2 169.051L110.3 169.621L107.99 170.311L112.5 167.781L112.88 167.561L130.75 157.551L147.62 148.101L152.48 145.381L153.32 144.911L161.2 140.501L161.96 140.071L165.03 138.351L173.35 133.691L173.88 133.391L179.52 130.231L182.51 128.551H182.53L182.57 128.521L186.58 126.271L187.68 125.661L189.03 124.901L190.22 124.241L191.67 123.431L193.87 122.201L194.91 121.611L198.83 119.411L200.28 118.601L199.87 117.251L199.22 115.081L198.38 112.271L197.4 108.991L169.87 17.2709L221.57 109.561L322.9 79.1509L249.87 120.061C339.37 131.221 406.96 175.271 379.45 242.991C348.82 318.361 236.11 380.711 116.48 402.211H401.79V0.960938H0.52002H0.540039Z" fill="currentColor"></path>
<path d="M354.36 238.23C383.93 177.05 324.27 135.69 241.16 124.98L236.45 127.62C316.22 138.03 371.88 178.06 341.46 236.19C297.91 319.41 131.69 379.91 0.550049 364.07V377.74C139.31 392.01 311.64 326.59 354.37 238.22L354.36 238.23Z" fill="currentColor"></path>
<path d="M318.99 233.481C349.88 181.321 303.15 143.961 231.35 133.301L232.71 137.831C294.46 149.631 331.05 183.821 301.2 229.661C256.51 298.331 108.62 345.411 0.540039 325.551V342.881C118.68 361.241 274.55 308.491 318.99 233.481Z" fill="currentColor"></path>
<path d="M549.06 223.32H492.68L485.63 241.3H434.13L492.68 114.16H549.06L607.61 241.3H556.11L549.06 223.32ZM536.05 190.63L520.87 151.76L505.69 190.63H536.05Z" fill="currentColor"></path>
<path className="" d="M760.48 114.16V188.99C760.48 238.94 725.97 244.03 686.75 244.03C647.53 244.03 613.02 238.94 613.02 188.99V114.16H662.71V186.63C662.71 205.16 669.76 211.51 686.74 211.51C703.72 211.51 710.77 205.15 710.77 186.63V114.16H760.46H760.48Z" fill="currentColor"></path>
<path className="" d="M851.92 201.712H824.63V241.312H774.94V114.172H869.99C906.49 114.172 925.11 127.972 925.11 157.042C925.11 176.662 915.17 189.012 899.63 195.552L928.9 241.322H876.5L851.92 201.722V201.712ZM824.63 169.192H859.33C869.99 169.192 875.41 165.742 875.41 157.572C875.41 149.402 869.99 147.042 859.33 147.042H824.63V169.202V169.192Z" fill="currentColor"></path>
<path className="" d="M1104 177.731C1104 227.501 1060.99 244.031 1018.16 244.031C975.33 244.031 932.51 227.501 932.51 177.731C932.51 127.961 975.34 111.621 1018.16 111.621C1060.98 111.621 1104 128.151 1104 177.731ZM1053.58 177.731C1053.58 157.391 1041.29 144.131 1018.16 144.131C995.03 144.131 982.74 157.391 982.74 177.731C982.74 198.071 995.03 211.511 1018.16 211.511C1041.29 211.511 1053.58 198.251 1053.58 177.731Z" fill="currentColor"></path>
<path className="" d="M1191.82 201.712H1164.53V241.312H1114.84V114.172H1209.89C1246.39 114.172 1265.01 127.972 1265.01 157.042C1265.01 176.662 1255.07 189.012 1239.53 195.552L1268.8 241.322H1216.4L1191.82 201.722V201.712ZM1164.53 169.192H1199.23C1209.89 169.192 1215.31 165.742 1215.31 157.572C1215.31 149.402 1209.89 147.042 1199.23 147.042H1164.53V169.202V169.192Z" fill="currentColor"></path>
<path d="M1383.73 223.32H1327.35L1320.3 241.3H1268.8L1327.35 114.16H1383.73L1442.28 241.3H1390.78L1383.73 223.32ZM1370.72 190.63L1355.54 151.76L1340.36 190.63H1370.72Z" fill="currentColor"></path>
<path d="M502.05 289.183V310.923H595.83V348.853H502.05V404.303H441.37V249.043H602.24V289.193H502.06L502.05 289.183Z" fill="currentColor"></path>
<path d="M727.12 382.343H658.27L649.66 404.303H586.77L658.27 249.043H727.12L798.62 404.303H735.73L727.12 382.343ZM711.23 342.413L692.69 294.943L674.15 342.413H711.22H711.23Z" fill="currentColor"></path>
<path className="" d="M901.44 355.941H868.12V404.291H807.44V249.031H923.51C968.09 249.031 990.81 265.891 990.81 301.381C990.81 325.331 978.67 340.421 959.7 348.401L995.45 404.291H931.46L901.45 355.941H901.44ZM868.12 316.241H910.49C923.51 316.241 930.13 312.031 930.13 302.041C930.13 292.051 923.51 289.181 910.49 289.181H868.12V316.241Z" fill="currentColor"></path>
<path d="M1237.96 249.043V404.303H1177.28V320.463L1146.39 404.303H1096.08L1064.97 320.463V404.303H1004.29V249.043H1087.04L1121.24 345.303L1155.22 249.043H1237.97H1237.96Z" fill="currentColor"></path>
<path d="M1440.75 355.06C1440.75 396.09 1404.56 407.63 1343.88 407.63C1274.15 407.63 1248.99 387.67 1248.99 353.95H1312.32C1312.32 365.93 1322.47 370.14 1347.41 370.14C1367.49 370.14 1376.1 367.26 1376.1 359.72C1376.1 351.51 1369.7 351.51 1320.93 345.3C1272.82 339.09 1253.18 328.66 1253.18 296.5C1253.18 262.34 1281.87 245.93 1341.67 245.93C1407.43 245.93 1430.6 267.22 1430.6 296.5H1369.25C1369.25 287.63 1361.53 283.19 1341.22 283.19C1320.91 283.19 1313.2 287.4 1313.2 293.84C1313.2 302.27 1324.45 302.93 1352.48 305.82C1405 311.14 1440.75 313.8 1440.75 355.06Z" fill="currentColor"></path>
</svg>
</div>
<div className="hidden md:flex space-x-8 text-[0.6875rem] uppercase tracking-[0.14em]">
<a className="hover:text-[#4CAF72] transition-colors duration-300 hover-trigger" href="/#about">
        About
      </a>
<a className="hover:text-[#4CAF72] transition-colors duration-300 hover-trigger" href="/#strains">
        Strains
      </a>
<a className="hover:text-[#4CAF72] transition-colors duration-300 hover-trigger" href="/#pilosophy">
        Philosophy
      </a>
<a className="hover:text-[#4CAF72] transition-colors duration-300 hover-trigger" href="/contact">
        Contact
      </a>
</div>
<div className="">
<a className="btn btn-ghost hover-trigger" href="/contact">Contact</a>
</div>
</nav>

<section className="flex flex-col lg:px-12 overflow-hidden bg-center bg-[#0a0a0a] h-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddf6161a-a4e7-4294-a4de-0aa10f369b0c_3840w.jpg)] bg-cover pr-6 pl-6 relative justify-center">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Hero Background" className="w-full h-full object-cover object-[70%_center] opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddf6161a-a4e7-4294-a4de-0aa10f369b0c_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
</div>
<div className="relative z-10 max-w-[55rem] animate-hero">
<h1 className="text-[3.5rem] lg:text-[5.5rem] leading-[0.9] text-white tracking-[-0.03em] font-heading mb-6 drop-shadow-xl">
        Friends Don’t Let Friends Smoke Mids
      </h1>
<p className="text-[1.125rem] lg:text-[1.25rem] text-[#e0e0e0] leading-[1.6] mb-10 max-w-[35rem] drop-shadow-md">
        Most people smoke whatever's available. We grow for the ones who know
        the difference.
      </p>
<a className="btn btn-primary hover-trigger" href="/contact">Contact us</a>
</div>
<div className="absolute bottom-12 right-12 font-heading text-[12.5rem] leading-none text-white/5 pointer-events-none tracking-[-0.05em]">
      01
    </div>
<style className="">
      .animate-hero {
        opacity: 0;
        transform: translateY(1.25rem);
        animation: fadeUpHero 0.7s ease-out forwards;
      }

      @keyframes fadeUpHero {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .transition-delay-600 {
        transition-delay: 0.6s;
      }

      .transition-delay-720 {
        transition-delay: 0.72s;
      }
    </style>
</section>

<section className="h-[3.25rem] bg-[#0a0a0a] border-y border-white/10 flex items-center overflow-hidden whitespace-nowrap marquee-container">
<div className="marquee-track text-[0.75rem] font-heading uppercase tracking-[0.12em] text-white">

<span className="mx-4 flex items-center gap-8">
          AURORA FARMS
          <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      PHUKET, THAILAND
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      INDOOR GROWN
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      TOP-SHELF
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      EST. 2023
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      LOUD TERPS
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      WHITE ASH
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      THICK OIL RING
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
</span>

<span className="mx-4 flex items-center gap-8">
          AURORA FARMS
          <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      PHUKET, THAILAND
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      INDOOR GROWN
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      TOP-SHELF
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      EST. 2023
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      LOUD TERPS
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      WHITE ASH
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
      THICK OIL RING
      <span className="text-[#4CAF72] text-[0.5rem]">✦</span>
</span>
</div>
</section>

<section className="flex flex-col lg:flex-row relative w-full border-b border-white/5 bg-[#0a0a0a]">

<div className="lg:w-[55vw] lg:h-screen sticky overflow-hidden img-hover-trigger w-full h-[50vh] top-0">
<div className="sticky-img-inner origin-center bg-[#111] w-full h-full border-white/5 border-r relative" data-src="aurora-grow-room-1.jpg" id="about" style={{transform: 'scale(1.06)'}}>
<img alt="Aurora Farms Cannabis Packaging and Mobile App Interface" className="absolute inset-0 w-full h-full object-cover z-10 select-none pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba6fa913-e041-46af-8b35-974429601b6b_3840w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/90 via-transparent to-transparent z-20 pointer-events-none hidden lg:block">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent z-20 pointer-events-none lg:hidden block">
</div>
</div>
</div>

<div className="w-full lg:w-[45vw] min-h-screen flex items-center px-6 lg:px-[3.75rem] py-24 z-10 bg-black" style={{backgroundColor: '#000000'}}>
<div className="max-w-[26.25rem] w-full mx-auto lg:mx-0 scroll-trigger section-stagger">
<div className="text-[#4CAF72] text-[0.6875rem] uppercase tracking-[0.16em] mb-6 fade-up">
          The Grow
        </div>
<h2 className="font-heading text-[4rem] leading-[0.92] tracking-[-0.03em] mb-8 fade-up">
          GROWN DIFFERENTLY.
        </h2>
<p className="text-[1.0625rem] text-[#888888] leading-[1.7] mb-12 fade-up">
          Plenty of weed looks good on Instagram. We grow flower that smokes
          as good as it looks.
        </p>
<div className="w-[3.75rem] h-[1px] bg-white/10 mb-12 fade-up"></div>
<div className="flex gap-8 lg:gap-12 fade-up">
<div className="">
<div className="font-heading text-[2.25rem] text-white">100%</div>
<div className="text-[0.75rem] text-[#666666] mt-2">Indoor grown</div>
</div>
<div className="">
<div className="font-heading text-[2.25rem] text-white">3</div>
<div className="text-[0.75rem] text-[#666666] mt-2">
              Premium strains
            </div>
</div>
<div className="">
<div className="font-heading text-[2.25rem] text-white">0%</div>
<div className="text-[0.75rem] text-[#666666] mt-2">Compromise</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0a0a0a] py-[7.5rem] px-6 lg:px-[5rem]" id="strains">
<div className="max-w-[90rem] mx-auto scroll-trigger section-stagger">
<div className="text-[#4CAF72] text-[0.6875rem] uppercase tracking-[0.2em] mb-6 fade-up">
        The Lineup
      </div>
<h2 className="font-heading text-[3rem] lg:text-[4.5rem] leading-[0.9] tracking-[-0.03em] max-w-[50rem] mb-16 fade-up">
        STRAINS WORTH TALKING ABOUT.
      </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/5 border border-white/5 p-[2px]">

<div className="strain-card group fade-up img-hover-trigger">
<div className="w-full h-[18.5rem] sm:h-[20rem] lg:h-[21rem] bg-black relative strain-img-wrap overflow-hidden flex items-center justify-center" data-src="Marksalot.webp" style={{backgroundColor: '#000000'}}>
<img alt="Marksalot product image" className="strain-img absolute inset-0 w-full h-full object-contain p-0 sm:p-1 lg:p-2 scale-[1.12] transition-transform duration-700 ease-out group-hover:scale-[1.18] select-none pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60a65f37-ca53-4535-a172-19d6779b3d79_800w.jpg" style={{mixBlendMode: 'normal', backgroundColor: '#000000'}}/>
<div className="absolute inset-0 bg-black pointer-events-none -z-10" style={{backgroundColor: '#000000'}}></div>
</div>
<div className="p-7">
<div className="flex justify-between items-start mb-4 gap-4">
<div className="text-[0.625rem] text-[#555] uppercase tracking-[0.1em] font-normal max-w-[60%] leading-relaxed">
                PERMANENT MARKER × WHITE TAFFY
              </div>
<div className="text-[#4CAF72] text-[0.625rem] uppercase bg-[#4CAF72]/10 border border-[#4CAF72]/30 px-2.5 py-[3px] whitespace-nowrap">
                Aurora Farms
              </div>
</div>
<h3 className="font-heading text-[2.375rem] leading-none mb-3 tracking-[-0.02em]">
              MARKSALOT
            </h3>
<p className="text-[0.8125rem] text-[#666] tracking-[0.08em] mb-8">
              LEMON — EARTHY — SWEET
            </p>
<div className="flex border-white/5 border-t mt-auto pt-5 gap-x-4 gap-y-4 items-center justify-between">
<span className="text-xs text-[#555] uppercase tracking-wider">
                  SATIVA DOMINANT
                </span>
<a className="text-[0.75rem] font-heading uppercase tracking-[0.1em] text-white group-hover:text-[#4CAF72] transition-colors flex items-center gap-2 whitespace-nowrap" href="/contact">
                Learn More
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="strain-card group fade-up img-hover-trigger">
<div className="w-full h-[18.5rem] sm:h-[20rem] lg:h-[21rem] bg-black relative strain-img-wrap overflow-hidden flex items-center justify-center" data-src="Red Taffy.webp" style={{backgroundColor: '#000000'}}>
<img alt="Red Taffy product image" className="strain-img absolute inset-0 w-full h-full object-contain p-0 sm:p-1 lg:p-2 scale-[1.12] transition-transform duration-700 ease-out group-hover:scale-[1.18] select-none pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a58dfa7f-34ed-4e5d-9fa4-6cbdf9163409_800w.jpg" style={{mixBlendMode: 'normal', backgroundColor: '#000000'}}/>
<div className="absolute inset-0 bg-black pointer-events-none -z-10" style={{backgroundColor: '#000000'}}></div>
</div>
<div className="p-7">
<div className="flex justify-between items-start mb-4 gap-4">
<div className="text-[0.625rem] text-[#555] uppercase tracking-[0.1em] font-normal max-w-[60%] leading-relaxed">
                LEMON CHERRY GELATO × WHITE TAFFY
              </div>
<div className="text-[#4CAF72] text-[0.625rem] uppercase bg-[#4CAF72]/10 border border-[#4CAF72]/30 px-2.5 py-[3px] whitespace-nowrap">
                Aurora Farms
              </div>
</div>
<h3 className="font-heading text-[2.375rem] leading-none mb-3 tracking-[-0.02em]">
              RED TAFFY
            </h3>
<p className="text-[0.8125rem] text-[#666] tracking-[0.08em] mb-8">
              CANDY — GAS — CHEESE
            </p>
<div className="flex justify-between items-center border-t border-white/5 pt-5 mt-auto gap-4">
<span className="text-xs text-[#555] uppercase tracking-wider">
                  HYBRID
                </span>
<a className="text-[0.75rem] font-heading uppercase tracking-[0.1em] text-white group-hover:text-[#4CAF72] transition-colors flex items-center gap-2 whitespace-nowrap" href="/contact">
                Learn More
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="strain-card group fade-up img-hover-trigger">
<div className="w-full h-[18.5rem] sm:h-[20rem] lg:h-[21rem] bg-black relative strain-img-wrap overflow-hidden flex items-center justify-center" data-src="Marksalot.webp" style={{backgroundColor: '#000000'}}>
<img alt="Kut Throat Candy product image" className="strain-img absolute inset-0 w-full h-full object-contain p-0 sm:p-1 lg:p-2 scale-[1.12] transition-transform duration-700 ease-out group-hover:scale-[1.18] select-none pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25216414-6376-4580-9847-298ea37b1414_800w.jpg" style={{mixBlendMode: 'normal', backgroundColor: 'rgb(0, 0, 0)'}}/>
<div className="absolute inset-0 bg-black pointer-events-none -z-10" style={{backgroundColor: '#000000'}}></div>
</div>
<div className="p-7">
<div className="flex justify-between items-start mb-4 gap-4">
<div className="text-[0.625rem] text-[#555] uppercase tracking-[0.1em] font-normal max-w-[60%] leading-relaxed">
                Chauffer X Runtz
              </div>
<div className="text-[#4CAF72] text-[0.625rem] uppercase bg-[#4CAF72]/10 border border-[#4CAF72]/30 px-2.5 py-[3px] whitespace-nowrap">
                Aurora Farms
              </div>
</div>
<h3 className="font-heading text-[2.375rem] leading-none mb-3 tracking-[-0.02em]">
              Kut Throat Candy
            </h3>
<p className="text-[0.8125rem] text-[#666] tracking-[0.08em] mb-8">
              CITRUSY — LEMON — CANDY
            </p>
<div className="flex justify-between items-center border-t border-white/5 pt-5 mt-auto gap-4">
<span className="text-xs text-[#555] uppercase tracking-wider">
                  INDICA DOMINANT
                </span>
<a className="text-[0.75rem] font-heading uppercase tracking-[0.1em] text-white group-hover:text-[#4CAF72] transition-colors flex items-center gap-2 whitespace-nowrap" href="/contact">
                Learn More
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col-reverse lg:flex-row bg-[#0a0a0a] w-full z-10 border-white/5 border-t relative" id="pilosophy">

<div className="w-full lg:w-[45vw] min-h-screen flex items-center px-6 lg:px-[5rem] py-24 z-10 bg-[#0a0a0a]">
<div className="max-w-[26.25rem] w-full mx-auto lg:mx-0 lg:ml-auto scroll-trigger section-stagger">
<div className="text-[#4CAF72] text-[0.6875rem] uppercase tracking-[0.16em] mb-6 fade-up">
          The Standard
        </div>
<h2 className="font-heading text-[4rem] leading-[0.92] tracking-[-0.03em] mb-8 fade-up">
          FOR PEOPLE WHO KNOW.
        </h2>
<p className="text-[1.0625rem] text-[#888888] leading-[1.7] mb-12 fade-up">
          Anyone can grow flower that looks good. The hard part is making it
          smoke right.
        </p>
<div className="fade-up">
<a className="btn btn-primary hover-trigger" href="/#strains">
            See Our Strains
          </a>
</div>
</div>
</div>

<div className="w-full lg:w-[55vw] h-[50vh] lg:h-screen sticky top-0 overflow-hidden img-hover-trigger">
<div className="sticky-img-inner origin-center bg-[#111] w-full h-full border-white/5 border-l relative" data-src="aurora-product-closeup.jpg" style={{transform: 'scale(1.06)'}}>
<img alt="Aurora Farms Product and Mobile App Interface Display" className="absolute inset-0 w-full h-full object-cover z-10 select-none pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb11c64b-2f16-4e2e-9f95-63e03d6c5679_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-transparent z-20 pointer-events-none hidden lg:block">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent z-20 pointer-events-none lg:hidden block">
</div>
</div>
</div>
</section>


<section className="flex flex-col lg:px-12 overflow-hidden bg-[#0a0a0a] h-screen pr-6 pl-6 relative items-center justify-center">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Tropical Sunset Over Ocean with Palm Trees" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04be12db-70ab-4cdf-877e-06fc01022404_3840w.webp"/>
<div className="absolute inset-0 bg-[#0a0a0a]/70"></div>
<div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
</div>
<div className="max-w-[56.25rem] w-full text-center relative z-10 section-trigger">
<h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-[-0.03em] text-white text-center">
<span className="block overflow-hidden pb-1">
<span className="block line-reveal">NOT CALI. NOT CANADA. PHUKET.</span>
</span>
<span className="block overflow-hidden pb-1">
<span className="block line-reveal">
              GREAT FLOWER ISN'T ABOUT WHERE
            </span>
</span>
<span className="block overflow-hidden pb-1">
<span className="block line-reveal">IT'S ABOUT HOW IT'S GROWN.</span>
</span>
</h2>
<div className="fade-up">
<div className="w-[2rem] h-[2px] bg-[#4CAF72] mx-auto mt-10 mb-10"></div>
<div className="text-[0.9375rem] text-[#cccccc] italic">
          — Aurora Farms, Phuket
        </div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] py-[7.5rem] px-6 lg:px-[5rem] text-center border-t border-white/5">
<div className="scroll-trigger section-stagger max-w-[43.75rem] mr-auto ml-auto">
<h2 className="font-heading text-[4.5rem] leading-[0.9] tracking-[-0.03em] text-white fade-up">
        STAY IN THE KNOW
      </h2>
<p className="text-[1.125rem] text-[#666666] mt-6 fade-up">
        Be the first to hear about new drops, fresh genetics, and everything
        smoking at Aurora.
      </p>
<form className="mt-12 flex flex-col sm:flex-row justify-center items-center fade-up hover-trigger w-full sm:w-auto mx-auto max-w-lg sm:max-w-none" data-endpoint="https://formspree.io/f/mredwlvb" id="newsletter-form" onsubmit="return false;">
<input className="h-[3.25rem] bg-[#111] border border-white/15 text-white px-6 w-full sm:w-[20rem] text-[0.9375rem] rounded-none placeholder:text-[#444] transition-colors focus:ring-0" name="email" placeholder="Enter your email" required="" type="email"/>
<input name="_subject" type="hidden" value="New Aurora Farms newsletter signup"/>
<button className="h-[3.25rem] bg-white text-black font-heading text-[0.8125rem] uppercase tracking-[0.1em] px-8 rounded-none relative overflow-hidden group w-full sm:w-auto border border-white sm:border-l-0 mt-2 sm:mt-0" type="submit">
<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              JOIN THE LIST
            </span>
<div className="absolute inset-0 bg-[#0a0a0a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
</button>
</form>
<p aria-live="polite" className="mt-4 min-h-[1.25rem] text-[0.875rem] text-[#4CAF72]" id="newsletter-status"></p>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 fade-up">
<a className="flex items-center gap-2 text-[0.875rem] text-[#555] hover:text-white transition-colors hover-trigger" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
          @aurorafarms.th
        </a>
<a className="btn btn-ghost hover-trigger !h-auto !py-2 !px-4 text-[0.8125rem]" href="/contact">
<iconify-icon className="text-lg mr-2" icon="solar:chat-line-linear"></iconify-icon>
          Contact Us
        </a>
<div className="flex items-center gap-2 text-[0.875rem] text-[#555]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
          Phuket Island, Thailand 🇹🇭
        </div>
</div>
<div className="mt-16 text-[0.6875rem] text-[#333333] fade-up uppercase tracking-widest">
        Adults only. Know your local laws. Enjoy responsibly.
      </div>
</div>
</section>

<footer className="bg-[#0a0a0a] py-[3.75rem] px-6 lg:px-[5rem] border-t border-white/[0.07]">
<div className="flex flex-col text-center max-w-[580px] mr-auto ml-auto gap-x-12 gap-y-12 items-center justify-center">

<div className="w-[6.25rem] text-white/80">
<svg className="hover:opacity-100 transition-opacity opacity-50 w-[100px] h-[28px]" fill="none" strokeWidth="2" style={{width: '100px', height: '28px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 1443 408" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M0.540039 0.960938V314.031L1.32007 309.611C98.6901 331.911 238.89 290.311 283.32 227.511C311.02 188.361 284.88 157.781 234.83 144.871L261.03 232.201L217.94 155.271L216.72 153.091L214.08 148.381L212.92 146.311L209.45 140.111L209.33 139.901L208.87 140.041L200.15 142.661L193.34 144.711L193.17 144.761L191.33 145.311L177.75 149.391L165.8 152.971L157.75 155.391L141.45 160.281L133.92 162.541L114.07 168.491L112.2 169.051L110.3 169.621L107.99 170.311L112.5 167.781L112.88 167.561L130.75 157.551L147.62 148.101L152.48 145.381L153.32 144.911L161.2 140.501L161.96 140.071L165.03 138.351L173.35 133.691L173.88 133.391L179.52 130.231L182.51 128.551H182.53L182.57 128.521L186.58 126.271L187.68 125.661L189.03 124.901L190.22 124.241L191.67 123.431L193.87 122.201L194.91 121.611L198.83 119.411L200.28 118.601L199.87 117.251L199.22 115.081L198.38 112.271L197.4 108.991L169.87 17.2709L221.57 109.561L322.9 79.1509L249.87 120.061C339.37 131.221 406.96 175.271 379.45 242.991C348.82 318.361 236.11 380.711 116.48 402.211H401.79V0.960938H0.52002H0.540039Z" fill="currentColor"></path>
<path d="M354.36 238.23C383.93 177.05 324.27 135.69 241.16 124.98L236.45 127.62C316.22 138.03 371.88 178.06 341.46 236.19C297.91 319.41 131.69 379.91 0.550049 364.07V377.74C139.31 392.01 311.64 326.59 354.37 238.22L354.36 238.23Z" fill="currentColor"></path>
<path d="M318.99 233.481C349.88 181.321 303.15 143.961 231.35 133.301L232.71 137.831C294.46 149.631 331.05 183.821 301.2 229.661C256.51 298.331 108.62 345.411 0.540039 325.551V342.881C118.68 361.241 274.55 308.491 318.99 233.481Z" fill="currentColor"></path>
<path d="M549.06 223.32H492.68L485.63 241.3H434.13L492.68 114.16H549.06L607.61 241.3H556.11L549.06 223.32ZM536.05 190.63L520.87 151.76L505.69 190.63H536.05Z" fill="currentColor"></path>
<path className="" d="M760.48 114.16V188.99C760.48 238.94 725.97 244.03 686.75 244.03C647.53 244.03 613.02 238.94 613.02 188.99V114.16H662.71V186.63C662.71 205.16 669.76 211.51 686.74 211.51C703.72 211.51 710.77 205.15 710.77 186.63V114.16H760.46H760.48Z" fill="currentColor"></path>
<path d="M851.92 201.712H824.63V241.312H774.94V114.172H869.99C906.49 114.172 925.11 127.972 925.11 157.042C925.11 176.662 915.17 189.012 899.63 195.552L928.9 241.322H876.5L851.92 201.722V201.712ZM824.63 169.192H859.33C869.99 169.192 875.41 165.742 875.41 157.572C875.41 149.402 869.99 147.042 859.33 147.042H824.63V169.202V169.192Z" fill="currentColor"></path>
<path d="M1104 177.731C1104 227.501 1060.99 244.031 1018.16 244.031C975.33 244.031 932.51 227.501 932.51 177.731C932.51 127.961 975.34 111.621 1018.16 111.621C1060.98 111.621 1104 128.151 1104 177.731ZM1053.58 177.731C1053.58 157.391 1041.29 144.131 1018.16 144.131C995.03 144.131 982.74 157.391 982.74 177.731C982.74 198.071 995.03 211.511 1018.16 211.511C1041.29 211.511 1053.58 198.251 1053.58 177.731Z" fill="currentColor"></path>
<path d="M1191.82 201.712H1164.53V241.312H1114.84V114.172H1209.89C1246.39 114.172 1265.01 127.972 1265.01 157.042C1265.01 176.662 1255.07 189.012 1239.53 195.552L1268.8 241.322H1216.4L1191.82 201.722V201.712ZM1164.53 169.192H1199.23C1209.89 169.192 1215.31 165.742 1215.31 157.572C1215.31 149.402 1209.89 147.042 1199.23 147.042H1164.53V169.202V169.192Z" fill="currentColor"></path>
<path d="M1383.73 223.32H1327.35L1320.3 241.3H1268.8L1327.35 114.16H1383.73L1442.28 241.3H1390.78L1383.73 223.32ZM1370.72 190.63L1355.54 151.76L1340.36 190.63H1370.72Z" fill="currentColor"></path>
<path d="M502.05 289.183V310.923H595.83V348.853H502.05V404.303H441.37V249.043H602.24V289.193H502.06L502.05 289.183Z" fill="currentColor"></path>
<path d="M727.12 382.343H658.27L649.66 404.303H586.77L658.27 249.043H727.12L798.62 404.303H735.73L727.12 382.343ZM711.23 342.413L692.69 294.943L674.15 342.413H711.22H711.23Z" fill="currentColor"></path>
<path className="" d="M901.44 355.941H868.12V404.291H807.44V249.031H923.51C968.09 249.031 990.81 265.891 990.81 301.381C990.81 325.331 978.67 340.421 959.7 348.401L995.45 404.291H931.46L901.45 355.941H901.44ZM868.12 316.241H910.49C923.51 316.241 930.13 312.031 930.13 302.041C930.13 292.051 923.51 289.181 910.49 289.181H868.12V316.241Z" fill="currentColor"></path>
<path className="" d="M1237.96 249.043V404.303H1177.28V320.463L1146.39 404.303H1096.08L1064.97 320.463V404.303H1004.29V249.043H1087.04L1121.24 345.303L1155.22 249.043H1237.97H1237.96Z" fill="currentColor"></path>
<path d="M1440.75 355.06C1440.75 396.09 1404.56 407.63 1343.88 407.63C1274.15 407.63 1248.99 387.67 1248.99 353.95H1312.32C1312.32 365.93 1322.47 370.14 1347.41 370.14C1367.49 370.14 1376.1 367.26 1376.1 359.72C1376.1 351.51 1369.7 351.51 1320.93 345.3C1272.82 339.09 1253.18 328.66 1253.18 296.5C1253.18 262.34 1281.87 245.93 1341.67 245.93C1407.43 245.93 1430.6 267.22 1430.6 296.5H1369.25C1369.25 287.63 1361.53 283.19 1341.22 283.19C1320.91 283.19 1313.2 287.4 1313.2 293.84C1313.2 302.27 1324.45 302.93 1352.48 305.82C1405 311.14 1440.75 313.8 1440.75 355.06Z" fill="currentColor"></path>
</svg>
</div>

<div className="flex flex-col w-full mt-4 items-center gap-x-5 gap-y-5">
<a className="flex items-center gap-2 text-[0.875rem] text-[#555] hover:text-white transition-colors hover-trigger" href="https://www.instagram.com/aurorafarms.th/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
          @aurorafarms.th
        </a>

<div className="flex gap-y-2 justify-center gap-x-2 sm:gap-4">
<a className="sm:w-[120px] sm:h-[120px] flex items-center justify-center hover:opacity-80 transition-opacity bg-center bg-[#1a1a1a] w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/339a46e5-49f6-45ec-9dd2-e089174d5081_320w.jpg)] bg-cover" href="https://www.instagram.com/aurorafarms.th/" rel="noopener noreferrer" target="_blank">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="sm:w-[120px] sm:h-[120px] flex items-center justify-center hover:opacity-80 transition-opacity bg-center bg-[#1a1a1a] w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/957c8208-4d30-448d-ab6e-a5bb8a829f44_320w.jpg)] bg-cover" href="https://www.instagram.com/aurorafarms.th/" rel="noopener noreferrer" target="_blank">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="sm:w-[120px] sm:h-[120px] flex items-center justify-center hover:opacity-80 transition-opacity bg-center bg-[#1a1a1a] w-[100px] h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a016817-7315-4f21-8a89-0e979a65b4ed_320w.jpg)] bg-cover" href="https://www.instagram.com/aurorafarms.th/" rel="noopener noreferrer" target="_blank">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>

<a className="flex items-center justify-center w-full max-w-[380px] h-[3.25rem] border border-white text-white font-heading text-[0.8125rem] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors duration-300 group" href="https://t.me/aurorafarms710" rel="noopener noreferrer" target="_blank">
<svg className="mr-2 group-hover:text-black transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
        CONTACT US ON TELEGRAM
      </a>

<div className="flex flex-col items-center gap-8 pt-4 w-full">
<div className="flex flex-col items-center gap-3">
<div className="text-xs text-[#333333] font-heading uppercase tracking-[0.1em]">
            Design by:
          </div>
<a className="inline-flex opacity-70 hover:opacity-100 transition-opacity" href="https://webwolf.co.th/" rel="noopener noreferrer" target="_blank">
<img alt="Webwolf" className="h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87770e4a-bbaa-4018-a0ff-10ee032eac99_original.gif"/>
</a>
</div>
<div className="flex flex-col items-center gap-2">
<div className="text-[0.6875rem] text-[#333333] font-heading uppercase tracking-[0.1em]">
            GROWN WITH INTENTION. ENJOYED RESPONSIBLY.
          </div>
<div className="text-[#444444] text-[0.75rem]">
            © 2026 Aurora Farms, Phuket
          </div>
</div>
</div>
</div>
</footer>



    </>
  );
}
