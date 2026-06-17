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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'work': ['Work Sans', 'sans-serif'],
                        'manrope': ['Manrope', 'sans-serif'],
                    }
                }
            }
        }
    


        (function (H) {
            H.seriesTypes.pie.prototype.animate = function (init) {
                const series = this, chart = series.chart, points = series.points,
                      { animation } = series.options, { startAngleRad } = series;
                function fanAnimate(point, startAngleRad) {
                    const graphic = point.graphic, args = point.shapeArgs;
                    if (graphic && args) {
                        graphic
                          .attr({ start: startAngleRad, end: startAngleRad, opacity: 1 })
                          .animate({ start: args.start, end: args.end }, {
                            duration: animation.duration / points.length
                          }, function () {
                            if (points[point.index + 1]) {
                                fanAnimate(points[point.index + 1], args.end);
                            }
                            if (point.index === series.points.length - 1) {
                                series.dataLabelsGroup?.animate({ opacity: 1 }, void 0, function () {
                                    points.forEach(point => { point.opacity = 1; });
                                    series.update({ enableMouseTracking: true }, false);
                                    chart.update({
                                        plotOptions: {
                                            pie: {
                                                innerSize: '60%',
                                                borderRadius: 8
                                            }
                                        }
                                    });
                                });
                            }
                          });
                    }
                }
                if (init) {
                    points.forEach(point => { point.opacity = 0; });
                } else {
                    fanAnimate(points[0], startAngleRad);
                }
            };
        }(Highcharts));

        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');
            const dots = document.querySelectorAll('.progress-dot');
            const magneticElements = document.querySelectorAll('.magnetic');
            let currentIndex = 0;
            let isScrolling = false;
            let chartInitialized = false;

            updateActiveDot(currentIndex);

            Highcharts.setOptions({
                chart: { backgroundColor: "rgba(0,0,0,0)" },
                colors: ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333"]
            });

            function initializeChart() {
                if (chartInitialized) return;
                chartInitialized = true;
                
                Highcharts.chart('container', {
                    chart: { type: 'pie', height: 300, spacing: [0, 0, 0, 0] },
                    credits: { enabled: false },
                    exporting: { enabled: false },
                    title: { text: null },
                    tooltip: {
                        backgroundColor: "#111111",
                        borderColor: "#333333",
                        style: { color: "#fff", fontSize: "14px" },
                        headerFormat: "",
                        pointFormat: `<span style="color:{point.color}">\u25CF</span> <span class="font-semibold">{point.name}</span>: <b>{point.percentage:.1f}%</b>`
                    },
                    accessibility: { point: { valueSuffix: "%" } },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            borderWidth: 0,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                color: "#fff",
                                connectorColor: "#666",
                                style: { fontWeight: 500, textShadow: "none", fontSize: "12px" },
                                format: '<span>{point.name}</span><br><span class="font-bold">{point.percentage:.1f}%</span>',
                                distance: 20,
                                connectorShape: 'crookedLine'
                            }
                        }
                    },
                    legend: { enabled: false },
                    series: [{
                        enableMouseTracking: false,
                        animation: { duration: 1800 },
                        colorByPoint: true,
                        data: [
                            { name: 'Equities', y: 45.2 },
                            { name: 'Fixed Income', y: 25.8 },
                            { name: 'Real Estate', y: 15.3 },
                            { name: 'Commodities', y: 8.7 },
                            { name: 'Cash', y: 5.0 }
                        ]
                    }]
                });
            }

            magneticElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    el.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
                });
                el.addEventListener('mouseleave', () => {
                    el.style.transform = 'translate(0px, 0px)';
                });
            });

            window.addEventListener('wheel', (e) => {
                if (isScrolling) return;
                isScrolling = true;
                if (e.deltaY > 0) {
                    if (currentIndex < sections.length - 1) {
                        currentIndex++;
                        changeSection(currentIndex);
                    }
                } else {
                    if (currentIndex > 0) {
                        currentIndex--;
                        changeSection(currentIndex);
                    }
                }
                setTimeout(() => { isScrolling = false; }, 1000);
            });

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    currentIndex = index;
                    changeSection(currentIndex);
                });
            });

            function changeSection(index) {
                sections.forEach(section => section.classList.remove('active'));
                sections[index].classList.add('active');
                updateActiveDot(index);

                if (index === 1) {
                    setTimeout(() => {
                        initializeChart();
                    }, 500);
                }

                const reveals = sections[index].querySelectorAll('.reveal');
                reveals.forEach((el, i) => {
                    setTimeout(() => el.classList.add('active'), i * 100);
                });

                sections.forEach((section, i) => {
                    if (i !== index) {
                        const otherReveals = section.querySelectorAll('.reveal');
                        otherReveals.forEach(el => el.classList.remove('active'));
                    }
                });
            }

            function updateActiveDot(index) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
            }
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
      

<nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 nav-minimal">
<div className="text-3xl font-work font-light tracking-[0.2em] magnetic">MERIDIAN</div>
<div className="space-x-16 hidden md:block font-manrope text-sm tracking-wide uppercase">
<a className="magnetic hover:opacity-50 transition-all duration-300" href="#">Services</a>
<a className="magnetic hover:opacity-50 transition-all duration-300" href="#">Insights</a>
<a className="magnetic hover:opacity-50 transition-all duration-300" href="#">Contact</a>
</div>
<div className="md:hidden">
<button className="text-2xl magnetic">☰</button>
</div>
</nav>

<div className="progress-bar">
<div className="progress-dot" data-index="0"></div>
<div className="progress-dot" data-index="1"></div>
<div className="progress-dot" data-index="2"></div>
<div className="progress-dot" data-index="3"></div>
</div>

<div className="geometric-accent top-1/4 left-1/4"></div>
<div className="geometric-accent top-3/4 right-1/3"></div>
<div className="geometric-accent bottom-1/4 left-2/3"></div>

<section className="section active" data-index="0">
<div className="content-overlay container mx-auto h-full flex flex-col justify-center px-8">
<div className="max-w-6xl">
<h1 className="font-work font-light mb-8 reveal active tracking-tight headline-emphasis" style={{fontSize: 'clamp(60px, 8vw, 100px)', lineHeight: '0.95'}}>
                    Secure Your Financial<br/>Future with Confidence
                </h1>
<div className="minimal-line reveal active max-w-md" style={{transitionDelay: '0.2s'}}></div>
<p className="font-manrope text-gray-300 max-w-2xl text-2xl leading-relaxed mb-12 reveal active" style={{transitionDelay: '0.3s'}}>
                    Expert wealth management tailored to your goals, lifestyle, and legacy.
                </p>

<div className="mb-16 reveal active" style={{transitionDelay: '0.4s'}}>
<button className="cta-primary px-12 py-5 font-manrope magnetic text-lg tracking-wide uppercase font-medium">
                        Start Your Wealth Journey
                    </button>
<p className="text-gray-500 text-sm mt-4 font-manrope">Free consultation • No obligation • Confidential</p>
</div>
<div className="grid grid-cols-3 gap-12 max-w-4xl reveal active" style={{transitionDelay: '0.5s'}}>
<div className="text-center stat-minimal p-6">
<div className="text-3xl font-work font-light">$2.4B</div>
<div className="text-xs text-gray-500 font-manrope uppercase tracking-wider mt-2">Assets Under Management</div>
</div>
<div className="text-center stat-minimal p-6">
<div className="text-3xl font-work font-light">15%</div>
<div className="text-xs text-gray-500 font-manrope uppercase tracking-wider mt-2">Average Annual Return</div>
</div>
<div className="text-center stat-minimal p-6">
<div className="text-3xl font-work font-light">500+</div>
<div className="text-xs text-gray-500 font-manrope uppercase tracking-wider mt-2">Satisfied Clients</div>
</div>
</div>
<div className="mt-12 reveal active" style={{transitionDelay: '0.6s'}}>
<button className="pulse-minimal px-8 py-3 font-manrope magnetic text-sm tracking-wide uppercase">
                        Learn More About Our Process
                    </button>
</div>
</div>
</div>
</section>
<section className="section" data-index="1">
<div className="content-overlay container mx-auto h-full flex flex-col justify-center px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
<div>
<h2 className="font-work font-light mb-8 reveal tracking-tight" style={{fontSize: 'clamp(50px, 6vw, 70px)', lineHeight: '0.9'}}>Proven<br/>Performance</h2>
<div className="minimal-line reveal" style={{transitionDelay: '0.1s'}}></div>
<p className="font-manrope text-gray-400 mb-12 reveal text-lg leading-relaxed" style={{transitionDelay: '0.2s'}}>
                        Our disciplined investment approach has consistently delivered superior risk-adjusted returns for our clients across all market conditions.
                    </p>
<div className="space-y-4 reveal" style={{transitionDelay: '0.3s'}}>
<div className="flex justify-between items-center py-4 border-b border-gray-800">
<span className="font-manrope text-sm uppercase tracking-wide">5-Year Return</span>
<span className="font-work font-light text-xl">+127%</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-gray-800">
<span className="font-manrope text-sm uppercase tracking-wide">Risk-Adjusted Return</span>
<span className="font-work font-light text-xl">2.8 Sharpe</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-gray-800">
<span className="font-manrope text-sm uppercase tracking-wide">Max Drawdown</span>
<span className="font-work font-light text-xl">-4.2%</span>
</div>
</div>
<div className="mt-8 reveal" style={{transitionDelay: '0.4s'}}>
<button className="pulse-minimal px-8 py-3 font-manrope magnetic text-sm tracking-wide uppercase">
                            View Detailed Performance
                        </button>
</div>
</div>
<div className="reveal floating" style={{transitionDelay: '0.4s'}}>
<div className="w-full max-w-xl bg-transparent border border-gray-800 rounded-2xl minimal-card px-7 py-7">
<div className="flex items-center mb-6">
<div className="w-9 h-9 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mr-3 shadow">
<svg fill="none" height="22" viewbox="0 0 24 24" width="22">
<path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="#000"></path>
</svg>
</div>
<div>
<div className="text-base font-bold text-white tracking-tight">Portfolio Allocation</div>
<div className="text-xs text-gray-400">Based on risk-adjusted returns</div>
</div>
</div>
<div className="min-w-[320px] max-w-full mx-auto" id="container"></div>
</div>
</div>
</div>
</div>
</section>
<section className="section" data-index="2">
<div className="content-overlay container mx-auto h-full flex flex-col justify-center px-8">
<div className="max-w-6xl mx-auto">
<h2 className="font-work font-light mb-4 text-center reveal tracking-tight" style={{fontSize: 'clamp(50px, 6vw, 70px)', lineHeight: '0.9'}}>Our Services</h2>
<div className="minimal-line reveal mx-auto max-w-xs" style={{transitionDelay: '0.1s'}}></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
<div className="minimal-card p-8 text-center reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-16 h-16 mx-auto mb-6 border border-gray-600 flex items-center justify-center">
<span className="text-2xl">01</span>
</div>
<h3 className="font-work font-light mb-4 text-xl uppercase tracking-wide">Wealth Planning</h3>
<p className="font-manrope text-gray-400 text-sm leading-relaxed mb-6">Comprehensive financial strategies designed to grow and protect your wealth for generations.</p>
<button className="pulse-minimal px-4 py-2 font-manrope text-xs tracking-wide uppercase">Learn More</button>
</div>
<div className="minimal-card p-8 text-center reveal" style={{transitionDelay: '0.3s'}}>
<div className="w-16 h-16 mx-auto mb-6 border border-gray-600 flex items-center justify-center">
<span className="text-2xl">02</span>
</div>
<h3 className="font-work font-light mb-4 text-xl uppercase tracking-wide">Investment Management</h3>
<p className="font-manrope text-gray-400 text-sm leading-relaxed mb-6">Sophisticated portfolio management with institutional-grade research and risk management.</p>
<button className="pulse-minimal px-4 py-2 font-manrope text-xs tracking-wide uppercase">Learn More</button>
</div>
<div className="minimal-card p-8 text-center reveal" style={{transitionDelay: '0.4s'}}>
<div className="w-16 h-16 mx-auto mb-6 border border-gray-600 flex items-center justify-center">
<span className="text-2xl">03</span>
</div>
<h3 className="font-work font-light mb-4 text-xl uppercase tracking-wide">Legacy Planning</h3>
<p className="font-manrope text-gray-400 text-sm leading-relaxed mb-6">Tax-efficient strategies to preserve and transfer wealth to future generations.</p>
<button className="pulse-minimal px-4 py-2 font-manrope text-xs tracking-wide uppercase">Learn More</button>
</div>
</div>
</div>
</div>
</section>
<section className="section" data-index="3">
<div className="content-overlay container mx-auto h-full flex flex-col justify-center items-center px-8 text-center">
<div className="max-w-4xl">
<h2 className="font-work font-light mb-8 reveal floating tracking-tight" style={{fontSize: 'clamp(50px, 6vw, 70px)', lineHeight: '0.9'}}>Ready to Take<br/>Control?</h2>
<div className="minimal-line reveal mx-auto max-w-xs" style={{transitionDelay: '0.1s'}}></div>
<p className="font-manrope text-gray-400 max-w-2xl mb-12 reveal text-lg leading-relaxed" style={{transitionDelay: '0.2s'}}>
                    Schedule your complimentary consultation today and discover how we can help secure your financial future.
                </p>
<div className="reveal mb-12" style={{transitionDelay: '0.3s'}}>
<button className="cta-primary px-16 py-6 font-manrope magnetic text-xl tracking-wide uppercase font-medium mb-4">
                        Schedule Free Consultation
                    </button>
<p className="text-gray-500 text-sm font-manrope">No cost • No commitment • Completely confidential</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 reveal" style={{transitionDelay: '0.4s'}}>
<div className="stat-minimal p-6 text-center">
<div className="text-xl font-work font-light">24/7</div>
<div className="text-xs text-gray-500 uppercase tracking-wider mt-2">Portfolio Access</div>
</div>
<div className="stat-minimal p-6 text-center">
<div className="text-xl font-work font-light">$500K</div>
<div className="text-xs text-gray-500 uppercase tracking-wider mt-2">Minimum Investment</div>
</div>
<div className="stat-minimal p-6 text-center">
<div className="text-xl font-work font-light">1:1</div>
<div className="text-xs text-gray-500 uppercase tracking-wider mt-2">Dedicated Advisor</div>
</div>
</div>
<div className="reveal" style={{transitionDelay: '0.5s'}}>
<p className="text-gray-600 text-sm font-manrope">Call us at <span className="text-white">(555) 123-4567</span> or email <span className="text-white">info@meridianwealth.com</span></p>
</div>
</div>
</div>
</section>


    </>
  );
}
