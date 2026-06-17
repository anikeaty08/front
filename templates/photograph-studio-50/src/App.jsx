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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
display: ['Instrument Serif', 'serif'],
},
colors: {
beige: {
50: '#F9F9F7',
100: '#F4F4F0',
200: '#EAEAE5',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Ce script surveille le scroll pour animer le logo
      document.addEventListener("scroll", function() {
        const header = document.getElementById("main-header");

        // Si on scrolle de plus de 50 pixels vers le bas
        if (window.scrollY > 600) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    


      (function() {
          // --- Navigation Morphing & Menu Logic ---
          const header = document.getElementById('main-header');
          const menuBtn = document.getElementById('menu-toggle-btn');
          const menuOverlay = document.getElementById('app-menu-overlay');
          const menuIcon = menuBtn.querySelector('iconify-icon');
          let isMenuOpen = false;

          const scrolledClasses = [
            '!top-4',
            'md:!w-[60%]',
            '!w-[calc(100%-3rem)]',
            '!rounded-full',
            '!h-14',
            '!shadow-md'
          ];

          const updateHeaderState = () => {
              if (isMenuOpen) {
                  header.classList.remove(...scrolledClasses);
                  return;
              }
              const scrolledPastHero = window.scrollY > window.innerHeight * 0.8;
              if (scrolledPastHero) {
                  header.classList.add(...scrolledClasses);
              } else {
                  header.classList.remove(...scrolledClasses);
              }
          };

          window.addEventListener('scroll', updateHeaderState, { passive: true });
          updateHeaderState();

          if (menuBtn && menuOverlay) {
              menuBtn.addEventListener('click', () => {
                  isMenuOpen = !isMenuOpen;
                  if (isMenuOpen) {
                      menuOverlay.classList.remove('translate-x-full');
                      document.body.style.overflow = 'hidden';
                      menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                      updateHeaderState();
                  } else {
                      menuOverlay.classList.add('translate-x-full');
                      document.body.style.overflow = '';
                      menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                      updateHeaderState();
                  }
              });

              // --- Fermer le menu lors du clic sur un lien ---
              const navLinks = menuOverlay.querySelectorAll('nav a');
              navLinks.forEach(link => {
                  link.addEventListener('click', (e) => {
                      const targetId = link.getAttribute('href');
                      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                          e.preventDefault();
                          const targetElement = document.querySelector(targetId);

                          isMenuOpen = false;
                          menuOverlay.classList.add('translate-x-full');
                          document.body.style.overflow = '';
                          menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                          updateHeaderState();

                          if (targetElement) {
                              setTimeout(() => {
                                  targetElement.scrollIntoView({ behavior: 'smooth' });
                              }, 150);
                          }
                      }
                  });
              });
          }

          // --- Scroll Reveal Animations ---
          const observerOptions = {
              root: null,
              threshold: 0,
              rootMargin: '0px 0px -15% 0px'
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.remove('opacity-0', 'translate-y-6');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal-on-scroll').forEach(el => {
              el.classList.add('opacity-0', 'translate-y-6');
              observer.observe(el);
          });

          // --- Horizontal Scroll Gallery Logic ---
          document.addEventListener('scroll', () => {
              const section = document.getElementById('horizontal-scroll-section');
              const container = document.getElementById('horizontal-scroll-container');
              if (!section || !container) return;

              const rect = section.getBoundingClientRect();
              const sectionTop = rect.top;
              const sectionHeight = rect.height;
              const windowHeight = window.innerHeight;

              if (sectionTop <= 0 && sectionTop > -(sectionHeight - windowHeight)) {
                  const scrollProgress = -sectionTop / (sectionHeight - windowHeight);
                  const viewportWidth = container.parentElement.clientWidth;
                  const maxScroll = container.scrollWidth - viewportWidth;
                  container.style.transform = `translate3d(-${Math.max(0, scrollProgress * maxScroll)}px, 0, 0)`;
              } else if (sectionTop > 0) {
                  container.style.transform = `translate3d(0, 0, 0)`;
              } else {
                  const viewportWidth = container.parentElement.clientWidth;
                  const maxScroll = container.scrollWidth - viewportWidth;
                  container.style.transform = `translate3d(-${Math.max(0, maxScroll)}px, 0, 0)`;
              }
          }, { passive: true });

          // --- Modal Logic ---
          const initModal = () => {
            const modal = document.getElementById('project-modal');
            const container = document.getElementById('modal-image-container');
            const closeBtn = document.getElementById('close-modal');
            const cards = document.querySelectorAll('#horizontal-scroll-container > .group.cursor-pointer');

            if(!modal || !container || !closeBtn) return;

            const openModal = (images) => {
                container.innerHTML = '';
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.className = 'max-w-full md:max-w-5xl w-full h-auto object-cover rounded-sm shadow-2xl';
                    img.alt = 'Project Image';
                    container.appendChild(img);
                });
                modal.classList.remove('hidden');
                void modal.offsetWidth;
                modal.classList.remove('opacity-0');
                document.body.style.overflow = 'hidden';
            };

            const closeModal = () => {
                modal.classList.add('opacity-0');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 500);
            };

            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const imagesData = card.getAttribute('data-images');
                    if (imagesData) {
                        try {
                            const images = JSON.parse(imagesData);
                            if (images.length) openModal(images);
                        } catch (e) { console.error('Error parsing images JSON', e); }
                    }
                });
            });

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target === container) closeModal();
            });
          };

          if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initModal);
          } else {
              initModal();
          }
      })();
    
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
      
<style className="">
        /* --- ANIMATION LOGO BELOMBRE (FONDU CROISÉ) --- */
      .logo-container {
        position: relative;
        width: 140px; /* Ajuste la largeur générale ici */
        height: 40px; /* Ajuste la hauteur si besoin */
        display: flex;
        align-items: center;
      }

      .logo-complet, .logo-reduit {
        position: absolute;
        top: 50%;
        transform: translateY(-50%); /* Centrage vertical */
        transition: opacity 0.5s ease-in-out;
        width: 100%;
        height: auto;
      }

      /* État initial (En haut de la page) */
      .logo-complet {
        opacity: 1; /* Le grand logo est visible */
        left: 0;
      }

      .logo-reduit {
        opacity: 0; /* Le petit logo est caché */
        /* On décale un peu le petit logo vers la gauche pour qu'il s'aligne avec le 'B' du grand logo */
        left: 0;
        width: 60px; /* Le petit logo est physiquement plus petit, ajuste cette valeur pour matcher la taille du "B" initial */
      }

      /* État "Scrollé" (Quand on descend) */
      #main-header.scrolled .logo-complet {
        opacity: 0; /* Le grand logo s'efface */
        pointer-events: none;
      }

      #main-header.scrolled .logo-reduit {
        opacity: 1; /* Le petit logo apparaît */
      }
    </style>
<header className="fixed z-[60] -translate-x-1/2 w-[calc(100%-2.5rem)] md:w-[95%] transition-all duration-[800ms] ease-[0.16,1,0.3,1] md:!w-[30%] !w-[80%] !rounded-none bg-white/95 h-16 top-5 left-1/2 shadow-sm backdrop-blur-md" id="main-header" style={{borderRadius: '0px !important'}}>
<div className="flex transition-all duration-[800ms] w-[100%] h-full mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="logo-container flex-shrink-0" href="#">
<svg className="logo-complet" fill="none" viewbox="0 0 1127 208" xmlns="http://www.w3.org/2000/svg">
<g className="" clipPath="url(#clip0_112_2)">
<path d="M64.2827 205.418C37.9852 204.653 16.5416 204.558 0 205.131V195.88C9.1522 194.135 15.5273 192.222 19.1496 190.095C22.7477 187.967 25.0418 184.214 26.0077 178.812C26.9736 173.409 27.4566 163.966 27.4566 150.46V81.6127C27.4566 68.1062 26.9736 58.6636 26.0077 53.261C25.0176 47.8584 22.7477 44.1053 19.1496 41.9777C15.5515 39.8501 9.1522 37.9377 0 36.1926V26.9413C12.871 26.9413 32.4311 26.6544 58.7527 26.0807C65.1762 25.8894 71.6238 25.7938 78.0472 25.7938C99.2736 25.7938 115.501 29.2123 126.706 36.0731C137.911 42.9339 143.513 52.4243 143.513 64.5682C143.513 75.3734 139.287 84.5291 130.811 92.0593C122.335 99.5895 110.02 104.896 93.8402 107.98V110.873C113.521 112.427 128.662 117.184 139.287 125.192C149.912 133.2 155.225 143.862 155.225 157.153C155.225 172.19 148.85 184.047 136.076 192.748C123.301 201.426 105.431 205.777 82.4422 205.777L64.331 205.49L64.2827 205.418ZM96.3033 95.9081C104.2 89.8361 108.136 81.2063 108.136 70.0186C108.136 58.8309 104.224 50.7749 96.4482 45.2766C88.6483 39.7784 77.0571 37.1249 61.6747 37.3162C60.9019 50.4402 60.5156 65.5722 60.5156 82.7362V105.877C76.4776 105.303 88.431 101.98 96.3275 95.9081H96.3033ZM66.4802 183.569C70.4647 190.812 77.3469 194.422 87.0787 194.422C96.8104 194.422 103.693 191.529 108.86 185.744C114.028 179.959 116.612 171.951 116.612 161.743C116.612 147.663 111.686 136.81 101.857 129.184C92.0049 121.558 78.2404 117.757 60.5156 117.757V149.575C60.5156 165.018 62.5199 176.325 66.5043 183.569H66.4802Z" fill="#18181B"></path>
<path d="M194.901 200.35C185.652 195.235 178.335 188.111 172.974 178.931C167.613 169.775 164.933 159.496 164.933 148.117C164.933 135.591 168.048 124.164 174.278 113.837C180.508 103.534 188.888 95.3822 199.416 89.382C209.945 83.4056 221.536 80.4175 234.19 80.4175C248.027 80.4175 258.773 84.1228 266.476 91.5573C274.179 98.9919 278.019 109.152 278.019 122.084C278.019 124.977 277.826 128.443 277.439 132.507L275.387 133.965L194.442 133.678C194.249 142.547 196.06 150.89 199.851 158.707C203.642 166.524 209.003 172.74 215.934 177.377C222.84 182.015 230.882 184.31 240.034 184.31C246.65 184.31 253.001 182.971 259.038 180.27C265.075 177.569 270.919 173.624 276.57 168.413L281.834 172.764C274.614 184.908 266.283 193.848 256.841 199.514C247.399 205.203 237.015 208.048 225.714 208.048C214.412 208.048 204.125 205.49 194.876 200.374L194.901 200.35ZM243.849 120.794C244.622 119.55 245.008 117.279 245.008 114.004C245.008 107.263 243.342 101.813 240.034 97.6532C236.725 93.5176 232.041 91.4378 226.004 91.4378C218.59 91.4378 212.118 94.2826 206.564 99.972C201.01 105.661 197.267 113.431 195.311 123.256L239.43 122.682C241.579 122.682 243.028 122.061 243.825 120.794H243.849Z" fill="#18181B"></path>
<path d="M288.934 192.39C291.566 190.86 293.329 187.967 294.198 183.712C295.068 179.481 295.502 171.855 295.502 160.859C295.502 106.474 295.309 72.8155 294.923 59.8828C294.73 49.6513 294.295 42.145 293.619 37.3162C292.943 32.4873 291.759 28.782 290.117 26.1763C288.451 23.5706 285.891 21.4909 282.366 19.9609L279.444 18.2158V12.1439L321.824 0L327.378 1.74509C326.412 22.3754 325.905 45.9221 325.905 72.3374V160.859C325.905 171.855 326.291 179.481 327.064 183.712C327.837 187.967 329.551 190.86 332.184 192.39C334.816 193.944 339.525 195.378 346.359 196.741V205.131C341.674 205.131 337.689 205.036 334.381 204.844L310.426 204.558L285.288 204.844C282.366 205.036 278.671 205.131 274.179 205.131V196.741C281.376 195.402 286.302 193.944 288.934 192.39Z" fill="#18181B"></path>
<path d="M374.854 199.92C364.228 194.517 355.897 187.011 349.86 177.353C343.823 167.72 340.805 156.914 340.805 144.962C340.805 133.009 343.872 121.821 350.005 111.972C356.139 102.123 364.518 94.4259 375.144 88.832C385.769 83.2382 397.698 80.4413 410.955 80.4413C424.213 80.4413 435.538 83.1426 446.164 88.5452C456.789 93.9478 465.048 101.526 471.012 111.255C476.953 121.009 479.923 131.933 479.923 144.101C479.923 156.269 476.953 166.907 471.012 176.66C465.072 186.413 456.789 194.063 446.164 199.657C435.538 205.251 423.609 208.048 410.352 208.048C397.094 208.048 385.455 205.346 374.854 199.944V199.92ZM438.267 183.712C443.628 175.8 446.309 165.305 446.309 152.181C446.309 141.376 444.449 131.503 440.754 122.539C437.06 113.574 432.085 106.426 425.855 101.119C419.625 95.8124 412.694 93.1589 405.112 93.1589C395.573 93.1589 388.063 96.9598 382.605 104.586C377.148 112.211 374.419 122.658 374.419 135.973C374.419 146.778 376.182 156.747 379.683 165.927C383.185 175.082 388.111 182.326 394.438 187.633C400.765 192.94 407.84 195.593 415.616 195.593C425.348 195.593 432.906 191.649 438.267 183.736V183.712Z" fill="#18181B"></path>
<path className="" d="M576.926 191.242C579.462 188.924 581.152 185.648 582.046 181.417C582.915 177.186 583.35 170.803 583.35 162.317V135.113C583.35 124.116 581.249 115.773 577.071 110.084C572.87 104.394 566.398 101.55 557.632 101.55C551.402 101.55 545.751 103.008 540.68 105.9C535.609 108.793 531.334 113.335 527.809 119.503C527.422 132.435 527.229 146.229 527.229 160.883C527.229 171.688 527.664 179.242 528.533 183.593C529.403 187.943 531.069 190.884 533.508 192.414C535.947 193.968 540.366 195.402 546.814 196.764V205.155C543.119 205.155 539.69 205.06 536.575 204.868C528.388 204.868 520.202 204.773 512.016 204.582L487.167 204.868C484.632 205.06 480.937 205.155 476.059 205.155V196.764C483.062 195.426 487.843 193.968 490.379 192.414C492.915 190.884 494.605 187.991 495.498 183.736C496.368 179.505 496.802 171.879 496.802 160.883V133.105C496.416 125.79 495.933 120.291 495.329 116.61C494.75 112.952 493.711 110.203 492.263 108.363C490.79 106.522 488.713 104.944 485.984 103.582L480.72 100.689V94.3303L519.888 81.3019L526.312 82.7362L525.442 108.195C531.866 99.1352 539.134 92.2266 547.224 87.5173C555.314 82.784 564.321 80.4413 574.246 80.4413C584.171 80.4413 591.971 82.8079 598.201 87.5173C604.431 92.2505 608.633 99.1352 610.758 108.195C617.761 98.7527 625.271 91.7485 633.264 87.2304C641.257 82.7123 650.41 80.4413 660.745 80.4413C674.196 80.4413 684.072 84.29 690.399 92.0114C696.726 99.7329 699.889 111.112 699.889 126.148L699.6 165.209C699.6 174.078 699.986 180.342 700.759 184.023C701.531 187.68 703.246 190.382 705.878 192.127C708.51 193.872 713.123 195.402 719.763 196.764V205.155L705.444 204.868L683.807 204.582L663.353 204.868L650.482 205.155V196.764C655.746 195.426 659.683 193.585 662.315 191.266C664.947 188.947 666.71 185.577 667.579 181.13C668.448 176.684 668.883 170.421 668.883 162.317V134.252C668.883 122.682 666.541 114.339 661.88 109.223C657.195 104.108 650.965 101.55 643.165 101.55C636.935 101.55 631.332 103.056 626.358 106.044C621.383 109.032 617.157 113.239 613.656 118.618C613.656 130.953 613.559 144.268 613.366 158.54C613.366 169.728 613.704 177.592 614.38 182.111C615.057 186.653 616.626 189.88 619.065 191.792C621.504 193.728 625.827 195.354 632.057 196.717V205.107L618.317 204.821L598.153 204.534L577.989 204.821L564.828 205.107V196.717C570.286 195.378 574.27 193.537 576.806 191.218L576.926 191.242Z" fill="#18181B"></path>
<path className="" d="M768.519 205.418C761.395 203.673 755.213 201.067 749.973 197.601L735.074 207.139L728.94 204.821C730.292 189.402 731.234 174.772 731.717 161.002C732.2 147.209 732.441 127.296 732.441 101.263C732.441 75.23 732.345 57.8747 732.152 49.7708C731.765 42.8144 731.282 37.5791 730.703 33.9933C730.123 30.4314 729.23 27.778 728.071 26.0329C726.911 24.2878 725.149 22.7578 722.806 21.3952L716.383 18.2158V12.1439L758.763 0L763.738 1.74509C762.772 28.3517 762.289 59.309 762.289 94.6172C769.099 89.9795 776.029 86.4655 783.032 84.051C790.059 81.6366 797.159 80.4413 804.355 80.4413C815.656 80.4413 825.726 83.047 834.613 88.2584C843.475 93.4697 850.333 100.737 855.211 110.108C860.089 119.455 862.528 130.212 862.528 142.356C862.528 155.48 859.51 167.002 853.473 176.923C847.435 186.868 838.959 194.517 828.044 199.92C817.129 205.323 804.765 208.024 790.929 208.024C783.129 208.024 775.691 207.163 768.567 205.418H768.519ZM770.137 180.246C775.788 190.86 784.167 196.167 795.275 196.167C805.804 196.167 814.377 191.888 820.993 183.282C827.61 174.7 830.918 163.751 830.918 150.436C830.918 140.42 828.914 131.479 824.929 123.686C820.921 115.869 815.487 109.797 808.557 105.47C801.626 101.143 793.706 98.9679 784.747 98.9679C776.753 98.9679 769.268 100.809 762.24 104.466C762.047 113.718 761.854 123.088 761.661 132.531C761.661 153.759 764.486 169.656 770.137 180.27V180.246Z" fill="#18181B"></path>
<path className="" d="M878.997 121.08C878.707 116.347 877.935 112.737 876.655 110.227C875.375 107.717 873.395 105.709 870.666 104.155L863.663 100.402V94.3303L902.228 79.007L908.072 81.0389L903.677 120.961L905.44 121.248C912.636 107.167 919.518 96.912 926.038 90.4337C932.558 83.9554 939.223 80.752 946.057 80.752C950.935 80.752 954.919 82.3059 958.035 85.3897C961.15 88.4735 962.719 92.4417 962.719 97.2467C962.719 101.095 961.802 104.729 959.942 108.1C958.083 111.47 956.006 114.028 953.664 115.773C949.172 113.646 944.946 111.972 940.962 110.705C936.977 109.462 933.403 108.817 930.288 108.817C925.024 108.817 920.846 110.849 917.731 114.889C914.616 118.929 912.467 125.312 911.308 133.989C910.921 138.244 910.583 143.097 910.293 148.595C910.004 154.094 909.859 160.118 909.859 166.668C909.859 175.345 910.39 181.465 911.477 185.027C912.539 188.589 914.785 191.195 918.19 192.844C921.595 194.493 927.777 195.784 936.736 196.741V205.131C930.892 205.131 926.207 205.036 922.706 204.844L895.539 204.558L870.111 204.844C867.189 205.036 863.397 205.131 858.713 205.131V196.741C865.522 195.784 870.256 194.374 872.888 192.557C875.52 190.716 877.283 187.68 878.152 183.449C879.021 179.218 879.456 171.688 879.456 160.883V142.069C879.456 132.818 879.311 125.814 879.021 121.104L878.997 121.08Z" fill="#18181B"></path>
<path className="" d="M983.342 200.35C974.093 195.235 966.776 188.111 961.415 178.931C956.054 169.775 953.374 159.496 953.374 148.117C953.374 135.591 956.489 124.164 962.719 113.837C968.949 103.534 977.329 95.3822 987.858 89.382C998.386 83.4056 1009.98 80.4175 1022.63 80.4175C1036.47 80.4175 1047.21 84.1228 1054.92 91.5573C1062.62 98.9919 1066.46 109.152 1066.46 122.084C1066.46 124.977 1066.27 128.443 1065.88 132.507L1063.83 133.965L982.883 133.678C982.69 142.547 984.501 150.89 988.292 158.707C992.084 166.524 997.444 172.74 1004.37 177.377C1011.28 182.015 1019.32 184.31 1028.47 184.31C1035.09 184.31 1041.44 182.971 1047.48 180.27C1053.52 177.569 1059.36 173.624 1065.01 168.413L1070.28 172.764C1063.06 184.908 1054.72 193.848 1045.28 199.514C1035.84 205.203 1025.46 208.048 1014.16 208.048C1002.85 208.048 992.566 205.49 983.318 200.374L983.342 200.35ZM1032.29 120.794C1033.06 119.55 1033.45 117.279 1033.45 114.004C1033.45 107.263 1031.78 101.813 1028.47 97.6532C1025.17 93.5176 1020.48 91.4378 1014.44 91.4378C1007.03 91.4378 1000.56 94.2826 995.005 99.972C989.451 105.661 985.708 113.431 983.752 123.256L1027.87 122.682C1030.02 122.682 1031.47 122.061 1032.27 120.794H1032.29Z" fill="#18181B"></path>
<path d="M1080.39 93.5175C1075.71 91.7007 1072.06 89.1907 1069.43 85.9396C1066.8 82.6885 1065.49 79.0309 1065.49 74.9192C1065.49 70.8075 1066.8 67.1261 1069.43 63.8989C1072.06 60.6717 1075.71 58.1377 1080.39 56.3209C1085.08 54.5041 1090.37 53.5957 1096.26 53.5957C1102.15 53.5957 1107.34 54.5041 1112.08 56.3209C1116.79 58.1377 1120.46 60.6478 1123.09 63.8989C1125.72 67.15 1127.02 70.8075 1127.02 74.9192C1127.02 79.0309 1125.72 82.7124 1123.09 85.9396C1120.46 89.1907 1116.79 91.7007 1112.08 93.5175C1107.37 95.3344 1102.1 96.2428 1096.26 96.2428C1090.42 96.2428 1085.08 95.3344 1080.39 93.5175ZM1109.98 91.1509C1113.98 89.5971 1117.12 87.3978 1119.37 84.577C1121.61 81.7561 1122.75 78.5528 1122.75 74.9192C1122.75 71.2856 1121.61 68.0823 1119.37 65.2615C1117.12 62.4407 1113.98 60.2653 1109.98 58.6875C1105.97 57.1098 1101.38 56.3448 1096.26 56.3448C1091.14 56.3448 1086.55 57.1098 1082.54 58.6636C1078.51 60.2175 1075.39 62.3929 1073.2 65.2376C1070.98 68.0823 1069.86 71.3095 1069.86 74.9192C1069.86 78.5289 1070.98 81.7561 1073.2 84.6009C1075.42 87.4456 1078.53 89.621 1082.54 91.1748C1086.55 92.7048 1091.14 93.4936 1096.26 93.4936C1101.38 93.4936 1105.97 92.7048 1109.98 91.1509ZM1086.09 86.2742C1082.86 85.2224 1080.37 83.7642 1078.63 81.8757C1076.89 79.9872 1076.02 77.8596 1076.02 75.4451C1076.02 73.0307 1076.99 70.6641 1078.92 68.6082C1080.85 66.5524 1083.53 64.9507 1086.99 63.7794C1090.44 62.608 1094.3 62.0343 1098.63 62.0343C1102.95 62.0343 1107.32 62.7036 1111.45 64.0423C1111.64 65.9308 1111.67 67.7237 1111.54 69.4688L1111.45 71.2139H1108.89C1108 69.2059 1106.47 67.5325 1104.32 66.2177C1102.18 64.9029 1099.81 64.2336 1097.2 64.2336C1095.05 64.2336 1093.17 64.6639 1091.55 65.5484C1089.93 66.4328 1088.68 67.652 1087.76 69.2776C1086.84 70.9031 1086.38 72.6482 1086.38 74.5607C1086.38 76.6643 1086.89 78.5528 1087.9 80.2262C1088.92 81.8996 1090.37 83.2144 1092.23 84.1706C1094.09 85.1268 1096.19 85.6049 1098.53 85.6049C1101.38 85.6049 1103.79 84.9356 1105.8 83.5969C1107.8 82.2582 1109.42 80.3696 1110.68 77.9791L1113.14 78.3855C1112.56 80.8956 1111.93 82.9514 1111.23 84.5531L1110.55 85.9635C1108.6 86.585 1106.45 87.0631 1104.16 87.3739C1101.86 87.6847 1099.54 87.852 1097.27 87.852C1093.02 87.852 1089.3 87.3261 1086.07 86.2742H1086.09Z" fill="#18181B"></path>
</g>
<defs>
<clippath id="clip0_112_2">
<rect fill="white" height="208" width="1127"></rect>
</clippath>
</defs>
</svg>
<svg className="logo-reduit" fill="none" viewbox="0 0 445 252" xmlns="http://www.w3.org/2000/svg">
<g className="" clipPath="url(#clip0_112_12)">
<path className="" d="M87.663 248.397C51.8009 247.339 22.5579 247.207 0 248.001V235.209C12.4809 232.796 21.1748 230.152 26.1145 227.21C31.0212 224.268 34.1497 219.079 35.467 211.609C36.7842 204.138 37.4428 191.082 37.4428 172.407V77.213C37.4428 58.5378 36.7842 45.4816 35.467 38.0115C34.1168 30.5414 31.0212 25.352 26.1145 22.4103C21.2077 19.4685 12.4809 16.8242 0 14.4113V1.58657C17.5524 1.58657 44.2267 1.18993 80.1217 0.396642C88.8814 0.132214 97.6741 0 106.434 0C135.38 0 157.51 4.72665 172.79 14.213C188.07 23.6994 195.71 36.8216 195.71 53.6128C195.71 68.553 189.947 81.2125 178.389 91.6243C166.83 102.036 150.035 109.374 127.971 113.638V117.637C154.81 119.786 175.458 126.364 189.947 137.437C204.437 148.509 211.682 163.251 211.682 181.629C211.682 202.42 202.988 218.814 185.568 230.846C168.147 242.844 143.778 248.86 112.427 248.86L87.7289 248.463L87.663 248.397ZM131.33 97.0121C142.098 88.6165 147.466 76.6842 147.466 61.2151C147.466 45.7461 142.131 34.607 131.527 27.0047C120.891 19.4024 105.084 15.7335 84.1064 15.9979C83.0526 34.1443 82.5257 55.0672 82.5257 78.7996V110.795C104.293 110.002 120.594 105.408 131.363 97.0121H131.33ZM90.6597 218.219C96.0934 228.235 105.479 233.226 118.75 233.226C132.021 233.226 141.407 229.226 148.454 221.227C155.501 213.228 159.025 202.155 159.025 188.041C159.025 168.573 152.307 153.567 138.904 143.023C125.468 132.478 106.697 127.223 82.5257 127.223V171.217C82.5257 192.57 85.259 208.204 90.6927 218.219H90.6597Z" fill="#18181B"></path>
<path className="" d="M243.461 240.795C228.971 233.325 217.61 222.946 209.377 209.592C201.144 196.272 197.028 181.332 197.028 164.805C197.028 148.278 201.21 132.809 209.574 119.191C217.939 105.573 229.366 94.9297 243.856 87.1952C258.346 79.4606 274.614 75.5934 292.693 75.5934C310.772 75.5934 326.217 79.3284 340.707 86.7985C355.196 94.2686 366.459 104.747 374.593 118.199C382.694 131.685 386.745 146.791 386.745 163.615C386.745 180.439 382.694 195.148 374.593 208.634C366.492 222.12 355.196 232.697 340.707 240.431C326.217 248.166 309.949 252.033 291.87 252.033C273.79 252.033 257.917 248.298 243.461 240.828V240.795ZM329.938 218.418C337.249 207.477 340.904 192.966 340.904 174.82C340.904 159.88 338.369 146.229 333.33 133.834C328.292 121.439 321.508 111.556 313.011 104.218C304.515 96.8798 295.064 93.2109 284.723 93.2109C271.716 93.2109 261.474 98.4664 254.032 109.01C246.589 119.555 242.868 133.999 242.868 152.41C242.868 167.35 245.272 181.133 250.047 193.826C254.822 206.485 261.54 216.501 270.168 223.838C278.796 231.176 288.445 234.845 299.049 234.845C312.32 234.845 322.627 229.391 329.938 218.451V218.418Z" fill="#18181B"></path>
<path d="M381.443 93.7067C375.054 91.1946 370.081 87.724 366.492 83.2287C362.902 78.7335 361.124 73.6763 361.124 67.9911C361.124 62.3059 362.902 57.2156 366.492 52.7534C370.081 48.2912 375.054 44.7875 381.443 42.2754C387.831 39.7634 395.043 38.5073 403.078 38.5073C411.114 38.5073 418.194 39.7634 424.648 42.2754C431.07 44.7875 436.076 48.2581 439.665 52.7534C443.255 57.2487 445.033 62.3059 445.033 67.9911C445.033 73.6763 443.255 78.7665 439.665 83.2287C436.076 87.724 431.07 91.1946 424.648 93.7067C418.227 96.2188 411.048 97.4748 403.078 97.4748C395.109 97.4748 387.831 96.2188 381.443 93.7067ZM421.75 90.4013C427.217 88.2529 431.498 85.2119 434.561 81.3116C437.623 77.4113 439.171 72.9821 439.171 67.958C439.171 62.9339 437.623 58.5047 434.561 54.6044C431.498 50.7041 427.217 47.6962 421.75 45.5147C416.284 43.3331 410.027 42.2754 403.045 42.2754C396.064 42.2754 389.807 43.3331 384.341 45.4816C378.841 47.6301 374.593 50.638 371.596 54.5713C368.566 58.5047 367.052 62.9669 367.052 67.958C367.052 72.9491 368.566 77.4113 371.596 81.3447C374.626 85.2781 378.874 88.2859 384.341 90.4344C389.807 92.5498 396.064 93.6406 403.045 93.6406C410.027 93.6406 416.284 92.5498 421.75 90.4013ZM389.181 83.6915C384.769 82.2371 381.377 80.2209 379.006 77.6096C376.635 74.9984 375.449 72.0566 375.449 68.7182C375.449 65.3798 376.766 62.1075 379.401 59.2649C382.035 56.4223 385.691 54.2077 390.4 52.5881C395.109 50.9685 400.378 50.1752 406.273 50.1752C412.167 50.1752 418.128 51.1007 423.759 52.9517C424.023 55.5629 424.056 58.042 423.891 60.4549L423.759 62.8678H420.269C419.05 60.0913 416.975 57.7775 414.045 55.9596C411.114 54.1416 407.886 53.2161 404.33 53.2161C401.399 53.2161 398.83 53.8111 396.624 55.0341C394.418 56.2571 392.705 57.9428 391.454 60.1904C390.202 62.4381 389.577 64.851 389.577 67.4953C389.577 70.404 390.268 73.0152 391.651 75.3289C393.034 77.6427 395.01 79.4606 397.546 80.7828C400.082 82.1049 402.947 82.766 406.141 82.766C410.027 82.766 413.32 81.8405 416.053 79.9895C418.787 78.1385 420.993 75.5273 422.705 72.2219L426.064 72.7838C425.274 76.2544 424.418 79.097 423.463 81.3116L422.541 83.2618C419.873 84.1212 416.942 84.7822 413.814 85.2119C410.686 85.6416 407.524 85.873 404.429 85.873C398.633 85.873 393.561 85.1458 389.148 83.6915H389.181Z" fill="#18181B"></path>
</g>
<defs>
<clippath id="clip0_112_12">
<rect fill="white" height="252" width="445"></rect>
</clippath>
</defs>
</svg>
</a>
<button className="hover:bg-zinc-100 transition-colors flex rounded-full pt-2 pr-2 pb-2 pl-2 items-center justify-center" id="menu-toggle-btn">
<iconify-icon className="text-zinc-900" height="24" icon="solar:hamburger-menu-linear" style={{color: 'rgb(24, 24, 27)'}} width="24"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 bg-beige-100 z-50 transform transition-transform duration-[800ms] ease-[0.16,1,0.3,1] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row pt-24 translate-x-full" id="app-menu-overlay">
<div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-200 h-full">
<nav className="flex flex-col gap-6 md:gap-8 mt-4">
<a className="group flex items-center justify-between w-full" href="#horizontal-scroll-section">
<span className="font-display text-5xl md:text-7xl text-zinc-900 group-hover:italic transition-all duration-300">
              Projets
            </span>
<span className="font-sans text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
              01
            </span>
</a>
<a className="group flex items-center justify-between w-full" href="#expertises-section">
<span className="md:text-7xl group-hover:italic transition-all duration-300 text-5xl text-zinc-900 font-display">
              Expertises
            </span>
<span className="font-sans text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
              02
            </span>
</a>
<a className="group flex items-center justify-between w-full" href="#">
<span className="md:text-7xl group-hover:italic transition-all duration-300 text-5xl text-zinc-900 font-display">
              Histoire
            </span>
<span className="font-sans text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
              03
            </span>
</a>
<a className="group flex items-center justify-between w-full" href="#">
<span className="md:text-7xl group-hover:italic transition-all duration-300 text-5xl text-zinc-900 font-display">
              Evénements
            </span>
<span className="font-sans text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
              04
            </span>
</a>
</nav>
<div className="mt-12 md:mt-0 pt-12 md:pt-0 border-t md:border-t-0 border-zinc-200">
<p className="font-serif italic text-zinc-500 mb-4">Suivez-nous</p>
<div className="flex gap-6 text-sm font-medium tracking-wide uppercase">
<a className="hover:underline" href="#">Instagram</a>
<a className="hover:underline" href="#">LinkedIn</a>
<a className="hover:underline" href="#">Pinterest</a>
</div>
</div>
</div>
<div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col bg-white min-h-[50vh] md:min-h-full">
<div className="h-full flex flex-col justify-center items-center text-center space-y-8">
<div className="relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Menu Feature" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://res.cloudinary.com/dqkg33szq/image/upload/v1772699366/Instagram_post_-_63_orgw8u.png"/>
<div className="flex bg-black/10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<button className="bg-white/90 backdrop-blur text-black px-6 py-2 font-serif italic text-lg hover:bg-white transition-colors" onclick="window.location.href='https://calendar.app.google/Dx1SrnqwyMqEqLBD6'">
                Prendre rendez-vous
              </button>
</div>
</div>
<div className="space-y-2">
<p className="font-serif text-2xl">Paris, France</p>
<p className="font-light text-zinc-500">
              25 rue de ponthieu, 75008 Paris
            </p>
<p className="underline decoration-zinc-300 underline-offset-4 font-light text-zinc-500 pt-2">
              kingue@belombre.studio
            </p>
</div>
</div>
</div>
</div>
<section className="overflow-hidden w-full h-screen relative bg-black">
<div className="absolute inset-0 w-full h-full z-0" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" preload="auto" src="https://res.cloudinary.com/dqkg33szq/video/upload/v1772639471/DINNER_1_gitil1.mp4" webkit-playsinline=""></video>
</div>
<div className="flex z-10 w-full absolute bottom-12 left-0 justify-center">
<button className="hover:bg-zinc-100 transition duration-300 cursor-pointer text-lg italic text-black font-serif bg-white rounded-sm pt-3 pr-8 pb-3 pl-8 shadow-lg" onclick="window.location.href='https://calendar.app.google/Dx1SrnqwyMqEqLBD6'" role="button">
          Prendre rdv
        </button>
</div>
</section>
<style>
      @keyframes scrollLogos {
        0% {
          transform: translateX(0);
        }

        /* On déplace la piste de 50% vers la gauche, ce qui boucle parfaitement avec les logos dupliqués */
        100% {
          transform: translateX(-50%);
        }
      }

      .scrolling-track {
        display: flex;
        width: max-content;
        /* Force la piste à prendre toute la largeur nécessaire */
        animation: scrollLogos 30s linear infinite;
        /* 30s = vitesse du défilement */
      }

      /* Met en pause l'animation quand la souris passe sur les logos (effet premium) */
      .scrolling-track:hover {
        animation-play-state: paused;
      }
    </style>
<section className="overflow-hidden bg-beige-50 border-zinc-200/50 border-b pt-2 pb-2">
<div className="max-w-screen-2xl mx-auto px-6 reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] opacity-0 translate-y-6">
<div className="relative w-full overflow-hidden group">
<div className="scrolling-track gap-12 opacity-60 grayscale transition-all duration-500 group-hover:grayscale-0 items-center">
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[230px] h-[23px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772637083/f3cabd8601757697a9a6bac7a14ce088d642ccff_alrbn9.png?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[46px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_15_tn4lti.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[150px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_2_bwokyg.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[58px] h-[53px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_14_yryvps.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[200px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_5_xhl1vb.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[60px] h-[50px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633205/image_13_xdm5uf.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[105px] h-[22px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_1_tlyr6y.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[76px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_11_qyuusu.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[230px] h-[23px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772637083/f3cabd8601757697a9a6bac7a14ce088d642ccff_alrbn9.png?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[46px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_15_tn4lti.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[150px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_2_bwokyg.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[58px] h-[53px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_14_yryvps.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[200px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_5_xhl1vb.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[60px] h-[50px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633205/image_13_xdm5uf.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[105px] h-[22px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_1_tlyr6y.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[76px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_11_qyuusu.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
</div>
</div>
</div>
</section>
<section className="md:py-48 overflow-hidden text-center bg-beige-100 pt-32 pr-6 pb-32 pl-6">
<div className="max-w-4xl mr-auto ml-auto space-y-12 gap-x-6 gap-y-6">
<p className="font-serif italic text-xl md:text-2xl text-zinc-600 reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] opacity-0 translate-y-6">
          Entreprise familiale
        </p>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-normal text-zinc-900 tracking-tight font-serif reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] delay-100 opacity-0 translate-y-6">
          Bureau de conception et
          <span className="font-light italic">production</span>
          pour les événements de
          <span className="italic font-light">prestiges</span>
</h1>
<p className="font-serif italic text-xl md:text-2xl text-zinc-600 pt-4 reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] delay-200 opacity-0 translate-y-6">
          Depuis 1986
        </p>
</div>
</section>
<section className="bg-beige-100 h-[300vh] border-zinc-200 border-t relative gap-x-6 gap-y-6" id="horizontal-scroll-section">
<div className="sticky flex flex-col overflow-hidden w-full h-screen top-0 gap-x-6 gap-y-6 justify-center">
<div className="w-full max-w-[1920px] mr-auto ml-auto gap-x-6 gap-y-6 reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] opacity-0 translate-y-6">
<div className="flex gap-6 md:pl-12 will-change-transform w-max pr-12 pl-12 gap-x-6 gap-y-6" id="horizontal-scroll-container" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="md:w-[28rem] flex-shrink-0 group cursor-pointer w-[85vw] gap-x-6 gap-y-6" data-images='["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff2fcb49-7eb7-4e58-867f-eeb45fd6cedd_1600w.jpg", "https://res.cloudinary.com/dqkg33szq/image/upload/v1772699364/Instagram_post_-_38_dtgwyd.png", "https://res.cloudinary.com/dqkg33szq/image/upload/v1772699369/Instagram_post_-_39_zb8f50.png"]'>
<div className="aspect-[4/3] overflow-hidden mb-6 relative">
<img alt="Project 1" className="transition duration-700 group-hover:scale-105 bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff2fcb49-7eb7-4e58-867f-eeb45fd6cedd_1600w.jpg"/>
</div>
<div className="flex border-zinc-300 border-b mb-3 pb-2 gap-x-6 gap-y-6 items-baseline justify-between">
<h3 className="text-xl font-medium font-serif">
                  Aurela Hoxa (PFW)
                </h3>
<span className="text-sm font-serif">07/03</span>
</div>
<p className="leading-relaxed text-base font-light text-zinc-500">
                Janvier dernier, l'appel de Manon Gautier. Mission :
                immortaliser la nouvelle collection de la déesse Aurela Hoxha.
                Dès les premières notes de 'Viol' de Gesaffelstein, le temps
                s’est arrêté. Nous avons été transcendés. Chaque déclenchement
                de l’obturateur devenait une pulsation, notre corps vibrant à
                l’unisson de la musique, des étoffes et de l’énergie brute de la
                scène. Une immersion totale où l'image se fait écho du son.
              </p>
</div>
<div className="md:w-[28rem] flex-shrink-0 group cursor-pointer w-[85vw] gap-x-6 gap-y-6" data-images='["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35d41fc7-f3a4-4d39-afef-00a19346d2a5_1600w.png", "https://res.cloudinary.com/dqkg33szq/image/upload/v1772699359/Instagram_post_-_73_yjhr6u.png", "https://res.cloudinary.com/dqkg33szq/image/upload/v1772705279/Instagram_post_-_54_r6fb45.png"]'>
<div className="aspect-[4/5] overflow-hidden mb-6 relative">
<img alt="Project 2" className="transition duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35d41fc7-f3a4-4d39-afef-00a19346d2a5_1600w.png"/>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-300 pb-2 mb-3">
<h3 className="text-xl font-medium font-serif">
                  Dîner privé de CEO
                </h3>
<span className="text-sm font-serif">24/02</span>
</div>
<p className="leading-relaxed text-base font-light text-zinc-500">
                Une collaboration de confiance au service de l'excellence. Aux
                côtés de Smooth Studio, nous immortalisons chaque édition des
                'Dîners Privés de CEO'. Notre mission : saisir l'authenticité
                des échanges, la force du réseau et l'atmosphère feutrée de ces
                soirées où l'influence rencontre la convivialité.
              </p>
</div>
<div className="md:w-[28rem] flex-shrink-0 group cursor-pointer w-[85vw] gap-x-6 gap-y-6" data-images='["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ef7ce71-6d00-493d-bd15-0fe0bad6b083_1600w.jpg", "https://res.cloudinary.com/dqkg33szq/image/upload/v1772711278/20250415_VALENTINE_GILLARD_TBC_00039_qbuj2j.jpg"]'>
<div className="aspect-[4/3] overflow-hidden mb-6 relative">
<img alt="Project 3" className="transition duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ef7ce71-6d00-493d-bd15-0fe0bad6b083_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-300 pb-2 mb-3">
<h3 className="text-xl font-medium font-serif">
                  Maison Alfred Sommier
                </h3>
<span className="text-sm font-serif">13/05</span>
</div>
<p className="leading-relaxed text-base font-light text-zinc-500">
                L’élégance confidentielle : immersion au cœur d’un showroom
                privé au sein de l'illustre Maison Alfred Sommier. Entre
                moulures dorées et design contemporain, nous avons immortalisé
                ce moment d'exception où le luxe rencontre l'intimité d'un écrin
                historique. *Cette galerie est disponible en consultation privée
                sur demande.
              </p>
</div>
<div className="md:w-[28rem] flex-shrink-0 group cursor-pointer w-[85vw] gap-x-6 gap-y-6" data-images='["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72f0d225-6909-40c7-abc7-f3666d7f8a4b_1600w.png", "https://res.cloudinary.com/dqkg33szq/image/upload/v1772705275/IMG_1184_j0fa8g.jpg", "https://res.cloudinary.com/dqkg33szq/image/upload/v1772705269/Instagram_post_-_81_jhka6o.png"]'>
<div className="aspect-[4/5] overflow-hidden mb-6 relative">
<img alt="Project 4" className="transition duration-700 group-hover:scale-105 bg-center w-full h-full object-cover" src="https://res.cloudinary.com/dqkg33szq/image/upload/v1772705283/Instagram_post_-_17_dfzt2y.png"/>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-300 pb-2 mb-3">
<h3 className="text-xl font-medium font-serif">
                  Alpine Paris Major
                </h3>
<span className="text-sm font-serif">29/07</span>
</div>
<p className="leading-relaxed text-base font-light text-zinc-500">
                Au cœur de l'Alpine Paris Major : retour en images sur un duel
                intenses. Entre adrénaline et précision, nous avons capturé
                l’essence du padel sur ce court éphémère installé face à
                l'Obélisque.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-beige-100 pt-24 pr-6 pb-24 pl-6 gap-x-6 gap-y-6" id="expertises-section">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-24 reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] opacity-0 translate-y-6">
<h2 className="font-serif text-6xl md:text-7xl font-normal tracking-tight mb-4">
            Notre Métier
          </h2>
<p className="text-2xl italic text-zinc-600 font-serif">
            +40 ans d'expériences
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
<div className="flex flex-col gap-24">
<div className="group reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] opacity-0 translate-y-6">
<div className="aspect-[4/5] overflow-hidden mb-6">
<img alt="Reportage" className="transition duration-700 group-hover:grayscale-0 group-hover:scale-105 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f079cb6-8bd8-4737-afaf-cae2434df0a4_1600w.jpg"/>
</div>
<h3 className="font-serif text-4xl tracking-tight leading-none">
                Reportage
                <br/>
                événementiel
              </h3>
</div>
<div className="group reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] cursor-pointer opacity-0 translate-y-6" onclick="window.location.href='https://belombre.studio/'" role="button">
<div className="aspect-[4/5] overflow-hidden mb-6 relative">
<img alt="Experience Photo" className="transition duration-700 group-hover:scale-105 opacity-100 w-full h-full object-cover brightness-75" src="https://res.cloudinary.com/dqkg33szq/image/upload/v1772706688/K0Hi0PdA_scd8bo.jpg"/>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="font-serif text-red-500 italic text-3xl drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
</div>
</div>
<h3 className="leading-none text-4xl tracking-tight font-serif">
                Expérience
                <br/>
                de prise de vue
              </h3>
</div>
</div>
<div className="flex flex-col md:pt-48 gap-x-24 gap-y-24">
<div className="group reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] delay-100 opacity-0 translate-y-6">
<div className="aspect-[3/4] overflow-hidden mb-6">
<img alt="Co-organisation" className="sepia-[20%] transition duration-700 group-hover:sepia-0 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80b3b40f-eddc-4481-9871-cbfc87b11750_1600w.jpg"/>
</div>
<h3 className="font-serif text-4xl tracking-tight leading-none">
                Co-organisation
                <br/>
                événementiel
              </h3>
</div>
</div>
</div>
</div>
</section>
<style>
      .logo-footer-white {
        filter: brightness(0) invert(1);
        opacity: 0.4;
        transition: opacity 0.4s ease;
      }

      .scrolling-track:hover .logo-footer-white {
        opacity: 0.4;
      }
      .scrolling-track .logo-footer-white:hover {
        opacity: 1 !important;
      }

      @keyframes scrollLogos {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .scrolling-track {
        display: flex;
        width: max-content;
        animation: scrollLogos 30s linear infinite;
      }
      .scrolling-track:hover {
        animation-play-state: paused;
      }
    </style>
<footer className="overflow-hidden text-white bg-black pt-16 pb-0 relative">
<div className="border-y overflow-hidden group reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] w-full border-gray-950 mb-24 relative opacity-0 translate-y-6">
<div className="scrolling-track gap-16 items-center">
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[230px] h-[23px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772637083/f3cabd8601757697a9a6bac7a14ce088d642ccff_alrbn9.png?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[46px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_15_tn4lti.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[150px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_2_bwokyg.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[58px] h-[53px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_14_yryvps.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[200px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_5_xhl1vb.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[60px] h-[50px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633205/image_13_xdm5uf.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[105px] h-[22px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_1_tlyr6y.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[76px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_11_qyuusu.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[230px] h-[23px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772637083/f3cabd8601757697a9a6bac7a14ce088d642ccff_alrbn9.png?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[46px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_15_tn4lti.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[150px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_2_bwokyg.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[58px] h-[53px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633206/image_14_yryvps.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[200px] h-[36px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_5_xhl1vb.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[60px] h-[50px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633205/image_13_xdm5uf.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[105px] h-[22px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633203/Calque_1_tlyr6y.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
<a className="logo-footer-white inline-flex flex-shrink-0 items-center justify-center bg-center w-[120px] h-[76px] bg-[url('https://res.cloudinary.com/dqkg33szq/image/upload/v1772633204/image_11_qyuusu.svg?w=800&amp;q=80')] bg-contain bg-no-repeat rounded-none" href="#"></a>
</div>
</div>
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start mb-20 reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] delay-100 opacity-0 translate-y-6">
<div className="max-w-2xl mb-12 md:mb-0">
<h2 className="font-serif text-5xl md:text-7xl leading-tight mb-12">
            Et vous, quand
            <br/>
            passez vous à l'action ?
          </h2>
<button className="hover:bg-zinc-200 transition duration-300 text-lg italic text-black font-serif bg-white rounded-sm pt-3 pr-8 pb-3 pl-8 cursor-pointer" onclick="window.location.href='https://calendar.app.google/Dx1SrnqwyMqEqLBD6'" role="button">
            Prendre rdv
          </button>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-zinc-400 font-light mb-24 reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] delay-200 opacity-0 translate-y-6">
<div className="col-span-2 md:col-span-2">
<p className="">
            Augmentez la valeur perçue de votre événement
            <br/>
            grâce à Belombre.
          </p>
</div>
<div className="">
<p className="mb-4">Depuis 1986</p>
<p className="">© 2026 Belombre</p>
</div>
<div className="flex flex-col gap-2 text-right md:text-left">
<a className="hover:text-white transition-colors" href="#">Linkedin</a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/belombre.studio/">
            Instagram
          </a>
</div>
</div>
<div className="w-full flex justify-center leading-none select-none pointer-events-none reveal-on-scroll transition-all duration-[1000ms] ease-[0.16,1,0.3,1] delay-300 opacity-0 translate-y-6">
<h1 className="font-serif text-[18vw] md:text-[23vw] text-white tracking-tighter transform translate-y-[15%]">
<img alt="Belombre" className="w-[80vw] md:w-[90vw] h-auto block mx-auto" src="https://res.cloudinary.com/dqkg33szq/image/upload/v1772646238/Logo_Typo_-_2_xmvxkh.svg"/>
</h1>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-zinc-950/95 hidden opacity-0 transition-opacity duration-500 overflow-y-auto cursor-pointer flex flex-col items-center pt-24 pb-24 backdrop-blur-sm" id="project-modal">
<button className="fixed top-8 right-8 text-white hover:text-zinc-300 z-[110] p-2 transition-colors" id="close-modal">
<iconify-icon height="40" icon="solar:close-circle-linear" width="40"></iconify-icon>
</button>
<div className="flex flex-col gap-12 w-full max-w-5xl px-4 md:px-8 cursor-default pb-12" id="modal-image-container"></div>
</div>

    </>
  );
}
