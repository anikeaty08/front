import { Link } from 'react-router-dom';

const refinementPages = [
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

export default function About() {
  return (
    <div className="w-full pt-32 pb-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <section className="pb-16 md:pb-24 border-b border-[#d8cfbf]">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#7a7063] animate-fade-in-up">
            Our Story
          </p>
          <h1 className="max-w-4xl font-serif-custom text-5xl font-normal leading-[0.95] tracking-tight text-[#2f281f] sm:text-6xl lg:text-7xl">
            A Sanctuary Built on the Foundation of <span className="italic">Inner Peace.</span>
          </h1>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#d8cfbf]">
          <div className="lg:col-span-5 overflow-hidden">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7627c0ea-f971-422f-87ee-923717f356f3_1600w.webp" 
              alt="Calm natural landscape" 
              className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8 xl:pl-16">
            <p className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl mb-8">
              Serenique was born from a simple observation: in a world of constant motion, stillness has become the ultimate luxury.
            </p>
            <p className="text-lg leading-8 text-[#5a5146] mb-6">
              Founded in 2018, our sanctuary was designed to be a refuge from the noise of modern life. We believe that true wellness isn't just about physical health, but about cultivating a state of mental clarity and emotional balance.
            </p>
            <p className="text-lg leading-8 text-[#5a5146]">
              Every element of our space, from the organic textures of our walls to the carefully curated flow of natural light, has been intentionally chosen to help you disconnect from the outside world and reconnect with yourself.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 border-b border-[#d8cfbf]">
          <div className="mb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
              Our Philosophy
            </p>
            <h2 className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl">
              The Pillars of Serenique
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#d8cfbf] pt-12">
            <div>
              <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">01</div>
              <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4">Mindful Presence</h3>
              <p className="text-[#5a5146] leading-7">
                We believe in the power of the present moment. Our practices are designed to anchor you in the now, stripping away the anxieties of the past and future.
              </p>
            </div>
            <div>
              <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">02</div>
              <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4">Holistic Harmony</h3>
              <p className="text-[#5a5146] leading-7">
                True well-being requires a balance of mind, body, and spirit. We address the whole person, not just isolated symptoms or temporary stress.
              </p>
            </div>
            <div>
              <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">03</div>
              <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4">Refined Simplicity</h3>
              <p className="text-[#5a5146] leading-7">
                We find luxury in reduction. By removing the unnecessary, we create space for what truly matters: your inner peace and personal growth.
              </p>
            </div>
          </div>
        </section>

        {/* The Art of Inner Refinement */}
        <section className="pt-16 md:pt-24">
          <div className="mb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
              The Art of Inner Refinement
            </p>
            <h2 className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl">
              Explore Each Offering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#d8cfbf] pt-12">
            {refinementPages.map((page) => (
              <Link
                key={page.number}
                to={page.to}
                className="group block border border-[#d8cfbf] bg-[#e8e1d2] p-8 transition hover:border-[#2f281f]"
              >
                <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">{page.number}</div>
                <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4 group-hover:italic">
                  {page.title}
                </h3>
                <p className="text-[#5a5146] leading-7">{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
