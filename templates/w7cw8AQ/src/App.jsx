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
      
<div className="dashboard-activity-stream animate__animated animate__fadeInUp" style={{animationDuration: '0.7s', animationDelay: '0.1s'}}>
<h4>Recent Activity</h4>
<ul className="activity-list">
<li className="activity-item animate__animated animate__fadeInRight" style={{animationDelay: '0.2s'}}>
<img alt="User Alex" className="activity-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=40&amp;h=40&amp;q=80"/>
<div className="activity-content">
<span className="activity-user">Alex J.</span> uploaded a new file: "Quarterly_Report_Q3_Final.pdf"
                    <span className="activity-time">2 mins ago</span>
</div>
</li>
<li className="activity-item animate__animated animate__fadeInRight" style={{animationDelay: '0.3s'}}>
<img alt="User Maria" className="activity-avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=40&amp;h=40&amp;q=80"/>
<div className="activity-content">
<span className="activity-user">Maria G.</span> commented on "Project Phoenix Marketing Plan"
                    <span className="activity-time">15 mins ago</span>
</div>
</li>
<li className="activity-item animate__animated animate__fadeInRight" style={{animationDelay: '0.4s'}}>
<div className="activity-icon"><i className="fas fa-check-circle"></i></div>
<div className="activity-content">
                    Task "Deploy to Staging Environment" completed successfully.
                    <span className="activity-time">1 hour ago</span>
</div>
</li>
<li className="activity-item animate__animated animate__fadeInRight" style={{animationDelay: '0.5s'}}>
<div className="activity-icon"><i className="fas fa-user-plus"></i></div>
<div className="activity-content">
<span className="activity-user">New User</span> "john.doe@example.com" signed up.
                    <span className="activity-time">3 hours ago</span>
</div>
</li>
</ul>
</div>



    </>
  );
}
