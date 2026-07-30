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



        // Simple JavaScript for tab and time selector functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Time selector functionality
            const timeOptions = document.querySelectorAll('.time-option');
            timeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    timeOptions.forEach(o => o.classList.remove('active'));
                    this.classList.add('active');
                });
            });
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
      

<header className="header">
<div className="container">
<div className="header-content">
<h1>Payment Analytics Dashboard</h1>
<p className="subtitle">Get actionable insights into your payment operations and optimize your conversion rates.</p>
<div className="tabs">
<div className="tab active">Overview</div>
<div className="tab">Transactions</div>
<div className="tab">Conversion</div>
<div className="tab">Reports</div>
</div>
</div>
</div>
</header>

<section className="metrics-section">
<div className="container">
<div className="metrics-grid">
<div className="metric-card">
<div className="metric-title">Total Transactions</div>
<div className="metric-value">24,892</div>
<div className="metric-trend trend-positive">
<svg fill="none" height="16" style={{marginRight: `4px`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        12.4% from previous period
                    </div>
</div>
<div className="metric-card">
<div className="metric-title">Conversion Rate</div>
<div className="metric-value">87.6%</div>
<div className="metric-trend trend-positive">
<svg fill="none" height="16" style={{marginRight: `4px`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        3.2% from previous period
                    </div>
</div>
<div className="metric-card">
<div className="metric-title">Revenue</div>
<div className="metric-value">$1.42M</div>
<div className="metric-trend trend-positive">
<svg fill="none" height="16" style={{marginRight: `4px`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        8.7% from previous period
                    </div>
</div>
<div className="metric-card">
<div className="metric-title">Average Transaction</div>
<div className="metric-value">$57.24</div>
<div className="metric-trend trend-negative">
<svg fill="none" height="16" style={{marginRight: `4px`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7L7 17M7 17H17M7 17V7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        2.1% from previous period
                    </div>
</div>
</div>
</div>
</section>

<section className="chart-section">
<div className="container">
<div className="chart-header">
<h2 className="chart-title">Transaction Volume Over Time</h2>
<div className="time-selector">
<div className="time-option">Day</div>
<div className="time-option active">Week</div>
<div className="time-option">Month</div>
<div className="time-option">Year</div>
</div>
</div>
<div className="chart-area">
<div className="chart-placeholder"></div>
</div>
</div>
</section>

<section className="features-section">
<div className="container">
<h2 className="section-title">Analytics Features</h2>
<p className="section-subtitle">Powerful tools to help you understand and optimize your payment processes</p>
<div className="features-grid">
<div className="feature-card">
<div className="feature-icon icon-1">
<svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="feature-title">Real-time Monitoring</h3>
<p className="feature-description">Track payment performance as it happens with live dashboards and instant alerts.</p>
</div>
<div className="feature-card">
<div className="feature-icon icon-2">
<svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8L8 16M8.5 8H16V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="feature-title">Conversion Analysis</h3>
<p className="feature-description">Identify conversion bottlenecks and optimize your payment flow for maximum success.</p>
</div>
<div className="feature-card">
<div className="feature-icon icon-3">
<svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="feature-title">Custom Reports</h3>
<p className="feature-description">Build tailored reports with the metrics that matter most to your business goals.</p>
</div>
<div className="feature-card">
<div className="feature-icon icon-4">
<svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17L3 11M3 11L9 5M3 11H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="feature-title">Provider Comparison</h3>
<p className="feature-description">Compare performance across payment providers to optimize your payment routing.</p>
</div>
</div>
</div>
</section>

<section className="cta-section">
<div className="container">
<div className="cta-content">
<h2 className="cta-title">Ready to optimize your payment analytics?</h2>
<p className="cta-description">Get started with Corefy Analytics to make data-driven decisions that boost your conversion rates and revenue.</p>
<a className="btn btn-primary" href="#">Get Started</a>
<a className="cta-link" href="#">Learn more about our analytics features</a>
</div>
</div>
</section>


    </>
  );
}
