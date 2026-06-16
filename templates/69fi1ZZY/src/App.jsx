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
      
<div className="dashboard-kpi-overview animate__animated animate__fadeInUp">
<div className="kpi-card-row">
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: '0.1s'}}>
<div className="kpi-icon"><i className="fas fa-users"></i></div>
<div className="kpi-value">1,234</div>
<div className="kpi-label">Active Users</div>
<div className="kpi-trend up"><i className="fas fa-arrow-up"></i> 5.2%</div>
</div>
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: '0.2s'}}>
<div className="kpi-icon"><i className="fas fa-dollar-sign"></i></div>
<div className="kpi-value">$9,876</div>
<div className="kpi-label">Revenue</div>
<div className="kpi-trend up"><i className="fas fa-arrow-up"></i> 12.1%</div>
</div>
</div>
<div className="kpi-card-row">
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: '0.3s'}}>
<div className="kpi-icon"><i className="fas fa-shopping-cart"></i></div>
<div className="kpi-value">582</div>
<div className="kpi-label">New Orders</div>
<div className="kpi-trend down"><i className="fas fa-arrow-down"></i> 1.5%</div>
</div>
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: '0.4s'}}>
<div className="kpi-icon"><i className="fas fa-chart-line"></i></div>
<div className="kpi-value">23.4%</div>
<div className="kpi-label">Conversion Rate</div>
<div className="kpi-trend up"><i className="fas fa-arrow-up"></i> 0.8%</div>
</div>
</div>
</div>



    </>
  );
}
