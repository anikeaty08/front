import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function initChart() {
            const canvas = document.querySelector('[data-chart="donut"]');
            const ctx = canvas.getContext('2d');
            
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Organic', 'Direct', 'Referral', 'Social'],
                    datasets: [{
                        data: [300, 50, 100, 80],
                        backgroundColor: ['#007bff', '#17a2b8', '#ffc107', '#28a745'],
                        borderWidth: 0,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#e0e0e0'
                            }
                        }
                    }
                }
            });
        }

        new WOW().init();
        document.addEventListener('DOMContentLoaded', initChart);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="dashboard-widget wow animate__animated animate__pulse">
<h3 className="widget-title">Traffic Sources</h3>
<canvas data-chart="donut"></canvas>
</div>




    </>
  );
}
