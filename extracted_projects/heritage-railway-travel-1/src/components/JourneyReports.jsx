import React from 'react';

export default function JourneyReports() {
  const reports = [
    {
      id: 1,
      vol: "Vol.01",
      season: "October 2025 — Summit Route",
      title: "Autumn Foliage Journey",
      text: "Two days of autumn splendor along our Summit Route — golden maples, crisp mountain air, and a complimentary cider service as the valley turns amber below.",
      img: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1000&q=80",
      delay: "0.12"
    },
    {
      id: 2,
      vol: "Vol.02",
      season: "August 2025 — Roundhouse, Cascade Depot",
      title: "Engineer for a Day",
      text: "Hands-on with our 1928 Baldwin locomotive — fire the boiler, read the gauges, sound the whistle. A full morning inside a living museum of steam and steel.",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80",
      delay: "0.24"
    },
    {
      id: 3,
      vol: "Vol.03",
      season: "September 2025 — Cascade Dining Car",
      title: "Harvest Table",
      text: "Thirty local producers. Five courses. One restored Pullman dining car rolling at sixty miles per hour through the harvest valley as the light fades over the peaks.",
      img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80",
      delay: "0.36"
    }
  ];

  return (
    <section className="top-event-report top-event-report--remix" data-animate-section="">
      <div className="top-event-report__bg" aria-hidden="true"></div>
      <div className="top-event-report__gradient"></div>

      <div className="report-remix__wrap">
        <header className="report-remix__header" data-anim="" data-anim-delay="0">
          <span className="report-remix__eyebrow">Field Notes</span>
          <h3 className="report-remix__title">Journey Reports</h3>
          <div className="report-remix__rule"></div>
        </header>

        <div className="report-remix__grid">
          {reports.map((report) => (
            <a href="#reports" key={report.id} className="report-remix__card" data-anim="rise" data-anim-delay={report.delay}>
              <div className="report-remix__card-img">
                <figure>
                  <img src={report.img} alt={report.title} loading="lazy" />
                </figure>
                <div className="report-remix__vol">{report.vol}</div>
              </div>
              <div className="report-remix__card-body">
                <p className="report-remix__card-season">{report.season}</p>
                <h4 className="report-remix__card-title">{report.title}</h4>
                <p className="report-remix__card-text">{report.text}</p>
                <span className="report-remix__read">Read Field Report</span>
              </div>
            </a>
          ))}
        </div>

        <div className="report-remix__cta" data-anim="" data-anim-delay="0.46">
          <a className="c-button__circle--black" href="#reports"><span className="label">ALL REPORTS</span></a>
        </div>
      </div>
    </section>
  );
}