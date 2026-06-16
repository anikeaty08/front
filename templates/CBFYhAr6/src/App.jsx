import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            new WOW().init();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="dashboard-project-progress animate__animated animate__pulse" style={{animationDuration: '1.2s'}}>
<h3>Project Alpha Status</h3>
<div className="progress-bar-container">
<div className="progress-bar-label">Overall Progress: <span>75%</span></div>
<div className="progress-bar">
<div className="progress-bar-fill animate__animated animate__slideInLeft" style={{width: '75%', animationDuration: '1.5s'}}></div>
</div>
</div>
<div className="project-stats-grid">
<div className="project-stat-item animate__animated animate__bounceIn" style={{animationDelay: '0.2s'}}>
<i className="fas fa-tasks"></i>
<span className="stat-value">30/40</span>
<span className="stat-label">Tasks Done</span>
</div>
<div className="project-stat-item animate__animated animate__bounceIn" style={{animationDelay: '0.3s'}}>
<i className="far fa-calendar-alt"></i>
<span className="stat-value">12 Days</span>
<span className="stat-label">Remaining</span>
</div>
<div className="project-stat-item animate__animated animate__bounceIn" style={{animationDelay: '0.4s'}}>
<i className="fas fa-exclamation-triangle"></i>
<span className="stat-value">2</span>
<span className="stat-label">Alerts</span>
</div>
</div>
<p className="project-manager-info">Manager: <strong>Sarah Miller</strong></p>
</div>



    </>
  );
}
