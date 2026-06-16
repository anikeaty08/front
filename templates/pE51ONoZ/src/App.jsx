import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 10, // Trigger animations a bit earlier
            mobile: true,
            live: true
        }).init();
        console.log("How It Works Section Initialized (HTML BG).");
    });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main>
<section className="section-padding section-content-bg" id="how-it-works"> 
<div className="container">
<h2 className="section-title wow animate__animated animate__fadeInDown" data-wow-delay="0.1s">How It Works</h2>
<p className="section-subtitle wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                    Our streamlined process ensures a smooth experience from start to finish. Discover the simple steps to achieve your goals with us.
                </p>
<div className="process-steps-container">

<div className="process-step-item wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.6s">
<div className="process-step-icon-wrapper">
<span className="step-number">1</span>
<i className="fas fa-clipboard-list"></i>
</div>
<div className="process-step-content">
<h3 className="process-step-title">Discovery &amp; Planning</h3>
<p className="process-step-description">
                                We begin by understanding your unique needs, goals, and challenges. Thorough planning ensures a tailored solution that aligns perfectly with your vision.
                            </p>
</div>
</div>

<div className="process-step-item wow animate__animated animate__fadeInUp" data-wow-delay="0.45s" data-wow-duration="0.6s">
<div className="process-step-icon-wrapper">
<span className="step-number">2</span>
<i className="fas fa-drafting-compass"></i>
</div>
<div className="process-step-content">
<h3 className="process-step-title">Design &amp; Prototyping</h3>
<p className="process-step-description">
                                Our expert designers craft intuitive and engaging user interfaces. We create prototypes to visualize the solution and gather your valuable feedback early on.
                            </p>
</div>
</div>

<div className="process-step-item wow animate__animated animate__fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.6s">
<div className="process-step-icon-wrapper">
<span className="step-number">3</span>
<i className="fas fa-code"></i>
</div>
<div className="process-step-content">
<h3 className="process-step-title">Development &amp; Testing</h3>
<p className="process-step-description">
                                Skilled developers bring the approved designs to life using cutting-edge technologies. Rigorous testing at every stage guarantees quality and performance.
                            </p>
</div>
</div>

<div className="process-step-item wow animate__animated animate__fadeInUp" data-wow-delay="0.75s" data-wow-duration="0.6s">
<div className="process-step-icon-wrapper">
<span className="step-number">4</span>
<i className="fas fa-rocket"></i>
</div>
<div className="process-step-content">
<h3 className="process-step-title">Deployment &amp; Launch</h3>
<p className="process-step-description">
                                We handle the deployment process seamlessly, ensuring a smooth transition. Your solution goes live, ready to make an impact and achieve your objectives.
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>
 



    </>
  );
}
