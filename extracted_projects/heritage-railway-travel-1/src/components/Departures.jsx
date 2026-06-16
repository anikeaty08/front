import React from 'react';

export default function Departures() {
  const journeys = [
    {
      id: 1,
      title: "Spring Blossom Express",
      date: "April 12 – May 25, 2026",
      desc: "Wind through cherry-lined valleys on our most beloved seasonal route. The Spring Blossom Express departs twice daily during peak bloom, with onboard botanist commentary and a complimentary blossom tea service.",
      img: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=80",
      labels: ["Cascade Line"],
      delay: "0.18"
    },
    {
      id: 2,
      title: "Twilight Dining Car",
      date: "Every Friday & Saturday, May – September",
      desc: "Board our restored 1924 Pullman dining car for a five-course dinner as the sun sets over the Cascade peaks. Local wines paired with Pacific Northwest cuisine by Chef Elena Vasquez.",
      img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      labels: ["Cascade Line"],
      delay: "0.30"
    },
    {
      id: 3,
      title: "Heritage Engine Workshop",
      date: "Second Saturday of every month",
      desc: "Go behind the scenes at our roundhouse restoration workshop. Learn about steam engine mechanics, see historic locomotives being rebuilt, and meet the engineers who keep a century of heritage alive.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      labels: ["Monthly", "Cascade Line"],
      delay: "0.42"
    }
  ];

  return (
    <section className="top-service-event" data-animate-section="">
      <div className="top-service-event__bg" aria-hidden="true"></div>
      <h3 className="c-heading__h3--black" data-anim="" data-anim-delay="0">
        <span className="en">DEPARTURES</span>
        <span className="sub">Upcoming Journeys</span>
      </h3>
      <div className="top-service-event__inner">
        <div className="top-service-event__contents event">
          <h4 className="c-heading__h4--black" data-anim="" data-anim-delay="0.1">
            <span className="en">FEATURED <br className="u-hide-max-tab" />JOURNEYS</span>
            <span className="sub">Featured Journeys</span>
          </h4>
          <div className="top-service-event__body">
            <a className="c-button__circle--black" href="#departures" data-anim="" data-anim-delay="0.1"><span className="label">VIEW MORE</span></a>
            <div className="top-service-event__list">
              <ul className="c-event-list --square-img js-card-list">
                {journeys.map((journey) => (
                  <li key={journey.id} className="c-card-list-item" data-anim="" data-anim-delay={journey.delay}>
                    <figure className="c-card-list-item__img">
                      <img src={journey.img} width="610" height="610" alt="" loading="lazy" />
                    </figure>
                    <dl className="c-card-list-item__content">
                      <dt>
                        <p className="c-card-list-item__title" data-match-group="title">{journey.title}</p>
                      </dt>
                      <dd>
                        <time className="c-card-list-item__date" data-match-group="date">{journey.date}</time>
                        <p className="c-card-list-item__text" data-match-group="text">{journey.desc}</p>
                        <span className="c-card-list-item__note" data-match-group="note"></span>
                        <ul className="c-card-list-item__labels" aria-label="Category">
                          {journey.labels.map((label, i) => (
                            <li key={i} className="c-label">{label}</li>
                          ))}
                        </ul>
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}