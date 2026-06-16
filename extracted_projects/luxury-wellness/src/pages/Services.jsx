import { Link } from 'react-router-dom';
import ServicesSection from '../components/sections/Services';

const individualServices = [
  {
    number: '01',
    title: 'Meditation Therapy',
    description: 'A dedicated page for this Inner Refinement offering.',
    to: '/services/meditation-therapy',
  },
  {
    number: '02',
    title: 'Mindfulness Retreat',
    description: 'A dedicated page for this Inner Refinement offering.',
    to: '/services/mindfulness-retreat',
  },
  {
    number: '03',
    title: 'Holistic Counseling',
    description: 'A dedicated page for this Inner Refinement offering.',
    to: '/services/holistic-counseling',
  },
  {
    number: '04',
    title: 'Restorative Rituals',
    description: 'A dedicated page for this Inner Refinement offering.',
    to: '/services/restorative-rituals',
  },
];

export default function Services() {
  return (
    <div className="w-full pt-32 pb-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <section className="pb-16 md:pb-24 border-b border-[#d8cfbf]">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#7a7063] animate-fade-in-up">
            Our Offerings
          </p>
          <h1 className="max-w-4xl font-serif-custom text-5xl font-normal leading-[0.95] tracking-tight text-[#2f281f] sm:text-6xl lg:text-7xl">
            Curated Experiences for <span className="italic">Profound Stillness.</span>
          </h1>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl">
              Every treatment is an invitation to return to yourself.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-[#5a5146] mb-6">
              Our services are thoughtfully designed to quiet the mind, release tension from the body, and restore your natural state of harmony. We blend ancient wisdom with contemporary wellness practices.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 border-t border-[#d8cfbf] pt-12">
          <div className="mb-10">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
              Individual Pages
            </p>
            <h2 className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl">
              Explore Each Offering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#d8cfbf] pt-12">
            {individualServices.map((service) => (
              <Link
                key={service.number}
                to={service.to}
                className="group block border border-[#d8cfbf] bg-[#e8e1d2] p-8 transition hover:border-[#2f281f]"
              >
                <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">{service.number}</div>
                <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4 group-hover:italic">
                  {service.title}
                </h3>
                <p className="text-[#5a5146] leading-7">{service.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Services List Section (Reused from Home) */}
      <ServicesSection />

      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        {/* Signature Series Section */}
        <section className="pt-16 md:pt-24 border-t border-[#d8cfbf] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 overflow-hidden">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a8a68b12-87cb-4177-8752-9f9f9c94cb28/1600w.png" 
              alt="Spa treatment tools" 
              className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8 xl:pl-16">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
              Extended Journeys
            </p>
            <h2 className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl mb-8">
              The Serenique Signature Series
            </h2>
            <p className="text-lg leading-8 text-[#5a5146] mb-8">
              For those seeking a transformative journey, our Signature Series offers extended half-day and full-day retreats. These immersive experiences combine multiple modalities—meditation, bodywork, and energy balancing—into a seamless flow of healing.
            </p>
            
            <ul className="space-y-8 mt-4">
              <li className="flex items-start gap-5">
                <div className="mt-1 h-8 w-8 rounded-full border border-[#cfc5b4] flex items-center justify-center text-sm font-serif-custom text-[#7a7063] shrink-0">I</div>
                <div>
                  <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-2">The Dawn Reset</h3>
                  <p className="text-[#5a5146] leading-7">A 4-hour morning journey focusing on awakening the senses, deep breathwork, and setting intentions for the week ahead.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="mt-1 h-8 w-8 rounded-full border border-[#cfc5b4] flex items-center justify-center text-sm font-serif-custom text-[#7a7063] shrink-0">II</div>
                <div>
                  <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-2">The Twilight Surrender</h3>
                  <p className="text-[#5a5146] leading-7">An evening ritual designed to release accumulated stress, featuring sound bath therapy and restorative somatic movement.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
