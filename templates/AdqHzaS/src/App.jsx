import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Lora', 'serif'],
          },
        }
      }
    }
  


    // Add hover effect for the image scaling
    document.addEventListener('DOMContentLoaded', function() {
      const container = document.querySelector('.flex');
      const visual = container.querySelector('div:first-child');
      
      container.addEventListener('mouseenter', function() {
        visual.style.transform = 'scale(1.03)';
      });
      
      container.addEventListener('mouseleave', function() {
        visual.style.transform = 'scale(1)';
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
<div className="md:w-2/5 min-h-[200px] md:min-h-[300px] bg-blue-500 bg-cover bg-center relative transition-transform duration-500 ease-out group-hover:scale-103" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp'}}>
</div>
<div className="md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
<div className="text-yellow-500 text-xl mb-5">★★★★★</div>
<blockquote className="font-serif text-lg leading-relaxed text-gray-800 mb-6">
        Integrating this platform was seamless. We saw a 40% increase in productivity within the first quarter. It's become an indispensable tool for our entire team.
      </blockquote>
<p className="font-semibold text-lg text-blue-900 mb-1">Samantha Lee</p>
<span className="text-sm text-gray-600">Operations Manager, Global Solutions Ltd.</span>
</div>
</div>


    </>
  );
}
