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
                          borderRadius: 12
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

    Highcharts.setOptions({
      chart: { backgroundColor: "rgba(0,0,0,0)" },
      colors: [
        "#7B61FF",
        "#FFAD61",
        "#37D5D6",
        "#E847AE",
        "#9E9E9E"
      ]
    });

    Highcharts.chart('container', {
      chart: { type: 'pie', height: 300, spacing: [0, 0, 0, 0] },
      credits: { enabled: false },
      exporting: { enabled: false }, // Export button removed
      title: { text: null },
      tooltip: {
        backgroundColor: "#18181B",
        borderColor: "#26272B",
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
            connectorColor: "#444",
            style: { fontWeight: 500, textShadow: "none", fontSize: "13px" },
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
          { name: 'Figma', y: 44.2 },
          { name: 'Adobe XD', y: 22.1 },
          { name: 'Sketch', y: 17.7 },
          { name: 'Illustrator', y: 9.2 },
          { name: 'Other', y: 6.8 }
        ]
      }]
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
      
<div className="w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl px-7 py-7">
<div className="flex items-center mb-6">
<div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-3 shadow">

<svg fill="none" height="22" viewbox="0 0 24 24" width="22">
<path d="M15.232 5.232a2.5 2.5 0 0 1 3.536 3.536l-9.036 9.036a2 2 0 0 1-.878.51l-3.382.964a.5.5 0 0 1-.621-.621l.964-3.382a2 2 0 0 1 .51-.878l9.036-9.036zm2.828-2.828a4.5 4.5 0 0 1 0 6.364l-9.036 9.036a4 4 0 0 1-1.756 1.022l-3.382.964a2 2 0 0 1-2.483-2.483l.964-3.382a4 4 0 0 1 1.022-1.756l9.036-9.036a4.5 4.5 0 0 1 6.364 0z" fill="#fff"></path>
</svg>
</div>
<div>
<div className="text-base font-bold text-white tracking-tight">Most Popular Design Tools</div>
<div className="text-xs text-neutral-400">Based on 2024 user surveys</div>
</div>
</div>
<div className="min-w-[320px] max-w-full mx-auto" id="container"></div>
</div>


    </>
  );
}
