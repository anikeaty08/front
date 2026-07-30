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



        document.addEventListener('DOMContentLoaded', () => {
            new WOW().init();
        });
    
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
      
<div className="dashboard-kpi-overview animate__animated animate__fadeInUp">
<div className="kpi-card-row">
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: `0.1s`}}>
<div className="kpi-icon"><i className="fas fa-users"></i></div>
<div className="kpi-value">1,234</div>
<div className="kpi-label">Active Users</div>
<div className="kpi-trend up"><i className="fas fa-arrow-up"></i> 5.2%</div>
</div>
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: `0.2s`}}>
<div className="kpi-icon"><i className="fas fa-dollar-sign"></i></div>
<div className="kpi-value">$9,876</div>
<div className="kpi-label">Revenue</div>
<div className="kpi-trend up"><i className="fas fa-arrow-up"></i> 12.1%</div>
</div>
</div>
<div className="kpi-card-row">
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: `0.3s`}}>
<div className="kpi-icon"><i className="fas fa-shopping-cart"></i></div>
<div className="kpi-value">582</div>
<div className="kpi-label">New Orders</div>
<div className="kpi-trend down"><i className="fas fa-arrow-down"></i> 1.5%</div>
</div>
<div className="kpi-card animate__animated animate__zoomIn" style={{animationDelay: `0.4s`}}>
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
