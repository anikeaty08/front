import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Mobile menu toggle logic (unchanged, just references the button by id)
  (function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggleBtn || !menu) return;

    const icon = toggleBtn.querySelector('iconify-icon');

    function openMenu() {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'false');
      if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'true');
      if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
      document.body.style.overflow = '';
    }

    function isOpen() {
      return !menu.classList.contains('opacity-0');
    }

    toggleBtn.addEventListener('click', () => {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });
  })();



        // Simple Carousel Logic
        const cards = document.querySelectorAll('.slider-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalCards = cards.length;

        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }

        function nextCard() {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }

        function prevCard() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }

        nextBtn.addEventListener('click', () => {
            nextCard();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevCard();
            resetInterval();
        });

        let autoSlide = setInterval(nextCard, 4000);

        function resetInterval() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextCard, 4000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="md:px-12 animate-enter z-[500] w-full pt-6 pr-6 pb-6 pl-6 relative">
</nav><section className="md:py-32 md:px-12 animate-enter z-40 w-full pt-24 pr-6 pb-24 pl-6 relative" id="process">
<p className="leading-relaxed text-5xl font-extrabold text-gray-600 font-manrope text-center pr-4" style={{}}>YOU HAVE A NEW DOCUMENT!</p><p className="" style={{textAlign: 'center'}}>YOU HAVE A NEW DOCUMENT!</p><p className="leading-relaxed text-base font-normal text-gray-600 font-manrope text-center pr-4">Proceed to review document shared with you by James Bonddd.</p><p className="leading-relaxed cursor-pointer text-base font-normal text-gray-600 font-manrope text-center pr-4" onclick="window.location.href='https://google.com'" role="button">VIEW DOCUMENT</p></section>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-white opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/about">About</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/services">Services</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/pricing">Pricing</a>
</div>




    </>
  );
}
