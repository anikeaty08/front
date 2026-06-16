import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        document.addEventListener('DOMContentLoaded', () => {
            new WOW().init();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="dashboard-sales-chart-panel animate__animated animate__fadeIn">
<div className="sales-chart-visual animate__animated animate__fadeInLeft" style={{animationDelay: '0.2s'}}>
<h4>Monthly Sales ($K)</h4>
<div className="css-bar-chart">
<div className="bar animate__animated animate__fadeInUp" data-label="Jan" style={{height: '60%', animationDelay: '0.3s'}}><span>6</span></div>
<div className="bar animate__animated animate__fadeInUp" data-label="Feb" style={{height: '80%', animationDelay: '0.4s'}}><span>8</span></div>
<div className="bar animate__animated animate__fadeInUp" data-label="Mar" style={{height: '50%', animationDelay: '0.5s'}}><span>5</span></div>
<div className="bar animate__animated animate__fadeInUp" data-label="Apr" style={{height: '90%', animationDelay: '0.6s'}}><span>9</span></div>
<div className="bar animate__animated animate__fadeInUp" data-label="May" style={{height: '70%', animationDelay: '0.7s'}}><span>7</span></div>
</div>
</div>
<div className="sales-stats-content animate__animated animate__fadeInRight" style={{animationDelay: '0.2s'}}>
<div className="stat-item">
<span className="stat-label">Total Revenue</span>
<span className="stat-value">$35,000</span>
</div>
<div className="stat-item">
<span className="stat-label">Average Sale</span>
<span className="stat-value">$150.75</span>
</div>
<h4>Top Products</h4>
<ul className="product-list">
<li>Product Alpha <span className="product-sales">120 units</span></li>
<li>Product Beta <span className="product-sales">95 units</span></li>
<li>Product Gamma <span className="product-sales">80 units</span></li>
</ul>
</div>
</div>



    </>
  );
}
