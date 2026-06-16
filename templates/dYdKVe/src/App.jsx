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
                    colors: {
                        blue: {
                            light: '#007bff',
                            dark: '#004085',
                        }
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="testimonial-quote-focus bg-white p-10 md:p-12 rounded-lg shadow-md border border-gray-200 max-w-2xl w-full text-center relative overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-102">
<p className="quote-mark font-serif text-2xl md:text-3xl leading-relaxed font-medium text-gray-800 mb-6 relative z-10">The level of detail and customer care is unparalleled. They didn't just provide a service; they provided a partnership.</p>
<p className="text-gray-600">— <strong className="text-blue-dark font-semibold">David Chen</strong>, Founder of Evergreen Consulting</p>
</div>

    </>
  );
}
