import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let ticking = false;
        
        function updateCards() {
            const cards = document.querySelectorAll('.card .card-content');
            const cardsContainer = document.getElementById('cards');
            const containerRect = cardsContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            const scrollStart = containerRect.top;
            const scrollRange = containerRect.height + windowHeight;
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - scrollStart) / scrollRange));
            
            cards.forEach((cardContent, index) => {
                const cardIndex = index + 1;
                const numCards = cards.length;
                const reverseIndex = numCards - index;
                
                const minScale = 1 - (reverseIndex * 0.1);
                const scale = 1 - (scrollProgress * (1 - minScale));
                
                cardContent.style.transform = `scale(${Math.max(minScale, scale)})`;
            });
            
            ticking = false;
        }
        
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateCards);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll);
        updateCards();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="w-4/5 mx-auto h-96 flex items-center justify-center mb-20">
<div>
<h1 className="font-light text-5xl mb-4 text-gray-900">Stacking Cards Animation</h1>
<p className="font-normal text-lg leading-relaxed text-gray-600">Scroll down to stack the cards. Scroll back up to unstack them.</p>
</div>
</header>
<main className="w-4/5 mx-auto">
<ul className="list-none card-grid" id="cards">
<li className="card" data-index="1">
<div className="card-content bevel-shadow bg-white rounded-2xl overflow-hidden grid grid-cols-2 items-stretch p-8 border border-gray-100">
<div className="w-11/12 max-w-3xl place-self-center text-left grid gap-4 items-start">
<h2 className="font-semibold text-4xl m-0 text-gray-900">Digital Innovation</h2>
<p className="font-normal leading-relaxed text-lg text-gray-600">Explore cutting-edge technology solutions that transform businesses and enhance user experiences through innovative digital platforms.</p>
</div>
<figure className="overflow-hidden bg-blue-50 rounded-lg">
<div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
<div className="w-8 h-8 bg-blue-500 rounded"></div>
</div>
</div>
</figure>
</div>
</li>
<li className="card" data-index="2">
<div className="card-content bevel-shadow bg-white rounded-2xl overflow-hidden grid grid-cols-2 items-stretch p-8 border border-gray-100">
<div className="w-11/12 max-w-3xl place-self-center text-left grid gap-4 items-start">
<h2 className="font-semibold text-4xl m-0 text-gray-900">Creative Design</h2>
<p className="font-normal leading-relaxed text-lg text-gray-600">Beautiful and functional design principles that create memorable brand experiences and engaging user interfaces.</p>
</div>
<figure className="overflow-hidden bg-green-50 rounded-lg">
<div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
<div className="w-8 h-8 bg-green-500 rounded"></div>
</div>
</div>
</figure>
</div>
</li>
<li className="card" data-index="3">
<div className="card-content bevel-shadow bg-white rounded-2xl overflow-hidden grid grid-cols-2 items-stretch p-8 border border-gray-100">
<div className="w-11/12 max-w-3xl place-self-center text-left grid gap-4 items-start">
<h2 className="font-semibold text-4xl m-0 text-gray-900">Data Analytics</h2>
<p className="font-normal leading-relaxed text-lg text-gray-600">Transform raw data into actionable insights that drive strategic decision-making and business growth opportunities.</p>
</div>
<figure className="overflow-hidden bg-purple-50 rounded-lg">
<div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
<div className="w-8 h-8 bg-purple-500 rounded"></div>
</div>
</div>
</figure>
</div>
</li>
<li className="card" data-index="4">
<div className="card-content bevel-shadow bg-white rounded-2xl overflow-hidden grid grid-cols-2 items-stretch p-8 border border-gray-100">
<div className="w-11/12 max-w-3xl place-self-center text-left grid gap-4 items-start">
<h2 className="font-semibold text-4xl m-0 text-gray-900">Future Growth</h2>
<p className="font-normal leading-relaxed text-lg text-gray-600">Build sustainable strategies for long-term success with scalable solutions that adapt to evolving market demands.</p>
</div>
<figure className="overflow-hidden bg-orange-50 rounded-lg">
<div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
<div className="w-8 h-8 bg-orange-500 rounded"></div>
</div>
</div>
</figure>
</div>
</li>
</ul>
</main>


    </>
  );
}
