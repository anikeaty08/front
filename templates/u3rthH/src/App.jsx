import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('testimonial-blur');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.testimonial-card').forEach(card => observer.observe(card));
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<section className="py-24 min-h-screen relative overflow-hidden flex items-center">
<div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
<div className="absolute -top-32 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/5 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
</div>
<div className="max-w-5xl mx-auto px-4 relative z-10 w-full">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-light mb-4 testimonial-card testimonial-delay-1" style={{letterSpacing: '-0.02em'}}>
<span className="bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent">
            What Our Clients Say
          </span>
</h2>
<p className="text-purple-200 text-lg md:text-xl max-w-xl mx-auto testimonial-card testimonial-delay-2">Real feedback from our valued customers worldwide</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass rounded-2xl p-8 flex flex-col items-center testimonial-card testimonial-delay-1">
<img alt="Emily R." className="w-16 h-16 rounded-full mb-4 border-2 border-purple-400 shadow-lg" src="https://randomuser.me/api/portraits/women/54.jpg"/>
<p className="text-lg text-white mb-3 font-medium text-center">
            “Absolutely stunning platform—easy to use, powerful, and the support team is always available when I need them.”
          </p>
<div className="mt-2 text-left">
<span className="block text-purple-300 font-semibold">Emily R.</span>
<span className="block text-gray-400 text-sm">Product Manager, Delicate Labs</span>
</div>
</div>

<div className="glass rounded-2xl p-8 flex flex-col items-center testimonial-card testimonial-delay-2">
<img alt="Michael B." className="w-16 h-16 rounded-full mb-4 border-2 border-purple-400 shadow-lg" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<p className="text-lg text-white mb-3 font-medium text-center">
            “The customizable themes and seamless integration have transformed the way our team collaborates—can’t recommend enough!”
          </p>
<div className="mt-2 text-left">
<span className="block text-purple-300 font-semibold">Michael B.</span>
<span className="block text-gray-400 text-sm">CTO, CreativeFlow</span>
</div>
</div>

<div className="glass rounded-2xl p-8 flex flex-col items-center testimonial-card testimonial-delay-3">
<img alt="Sara A." className="w-16 h-16 rounded-full mb-4 border-2 border-purple-400 shadow-lg" src="https://randomuser.me/api/portraits/women/67.jpg"/>
<p className="text-lg text-white mb-3 font-medium text-center">
            “The analytics dashboard is a true game-changer. Insightful and intuitive—our decision making has never been more data-driven.”
          </p>
<div className="mt-2 text-left">
<span className="block text-purple-300 font-semibold">Sara A.</span>
<span className="block text-gray-400 text-sm">CEO, Visionary Inc.</span>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
