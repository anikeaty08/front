import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const refinementPages = {
  '01': {
    title: 'Meditation Therapy',
    description:
      'This section is currently being curated to bring you the finest experience. Please check back soon or return to our sanctuary.',
  },
  '02': {
    title: 'Mindfulness Retreat',
    description:
      'This section is currently being curated to bring you the finest experience. Please check back soon or return to our sanctuary.',
  },
  '03': {
    title: 'Holistic Counseling',
    description:
      'This section is currently being curated to bring you the finest experience. Please check back soon or return to our sanctuary.',
  },
  '04': {
    title: 'Restorative Rituals',
    description:
      'This section is currently being curated to bring you the finest experience. Please check back soon or return to our sanctuary.',
  },
};

export default function GenericPage({ title }) {
  const { id } = useParams();
  const dynamicPage = id ? refinementPages[id] : null;
  const resolvedTitle = title || dynamicPage?.title || 'Explore Serenique';
  const resolvedDescription =
    dynamicPage?.description ||
    'This section is currently being curated to bring you the finest experience. Please check back soon or return to our sanctuary.';
  const isExperiencePage = resolvedTitle === 'The Experience';

  if (isExperiencePage) {
    return (
      <div className="w-full pt-32 pb-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <section className="pb-16 md:pb-24 border-b border-[#d8cfbf]">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#7a7063] animate-fade-in-up">
              The Experience
            </p>
            <h1 className="max-w-4xl font-serif-custom text-5xl font-normal leading-[0.95] tracking-tight text-[#2f281f] sm:text-6xl lg:text-7xl">
              A Gentle Journey Into <span className="italic">Stillness.</span>
            </h1>
          </section>

          <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#d8cfbf]">
            <div className="lg:col-span-5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                alt="Peaceful meditation setting"
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8 xl:pl-16">
              <p className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl mb-8">
                From the moment you arrive, every detail is designed to slow your pace and soften the noise of the outside world.
              </p>
              <p className="text-lg leading-8 text-[#5a5146] mb-6">
                Your experience begins with a quiet welcome, warm herbal tea, and a few unhurried moments to settle into the atmosphere. We invite you to leave behind urgency and enter a space shaped by calm textures, natural light, and intentional silence.
              </p>
              <p className="text-lg leading-8 text-[#5a5146]">
                Each session unfolds with care, allowing time for reflection, restoration, and deep presence. Whether you choose meditation, therapy, or a longer retreat, the rhythm of your visit is guided by comfort, clarity, and ease.
              </p>
            </div>
          </section>

          <section className="py-16 md:py-24 border-b border-[#d8cfbf]">
            <div className="mb-16">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
                What to Expect
              </p>
              <h2 className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl">
                A Thoughtfully Guided Flow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#d8cfbf] pt-12">
              <div>
                <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">01</div>
                <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4">Arrival</h3>
                <p className="text-[#5a5146] leading-7">
                  Begin with a calm transition into the sanctuary, where you are welcomed into an environment of warmth, quiet, and ease.
                </p>
              </div>
              <div>
                <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">02</div>
                <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4">Immersion</h3>
                <p className="text-[#5a5146] leading-7">
                  Settle into your chosen practice through guided care, intentional pacing, and a deeply restorative atmosphere.
                </p>
              </div>
              <div>
                <div className="font-serif-custom text-4xl text-[#cfc5b4] mb-6">03</div>
                <h3 className="font-serif-custom text-2xl text-[#2f281f] mb-4">Integration</h3>
                <p className="text-[#5a5146] leading-7">
                  Conclude with space to reflect, breathe, and carry a renewed sense of balance back into your day.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
                Before You Visit
              </p>
              <h2 className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl mb-8">
                Come as You Are.
              </h2>
              <p className="text-lg leading-8 text-[#5a5146] mb-6">
                We recommend arriving a few minutes early, wearing comfortable clothing, and allowing yourself the gift of an unhurried schedule.
              </p>
              <p className="text-lg leading-8 text-[#5a5146]">
                No preparation is required beyond openness. Our team will guide you through each step so you can simply arrive, exhale, and receive the experience fully.
              </p>
            </div>

            <div className="bg-[#e8e1d2] p-8 sm:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#7a7063]">
                Continue Your Journey
              </p>
              <h3 className="font-serif-custom text-3xl leading-tight text-[#2f281f] mb-6">
                Explore our services or speak with our team.
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-full border border-[#2f281f] bg-[#2f281f] px-6 py-3 text-sm font-medium text-[#efe9db] transition hover:bg-transparent hover:text-[#2f281f]"
                >
                  View Services
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-[#cfc5b4] px-6 py-3 text-sm font-medium text-[#2f281f] transition hover:bg-[#2f281f] hover:text-[#efe9db] hover:border-[#2f281f]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-[0.18em] text-[#7a7063] mb-4">Explore Serenique</p>
      <h1 className="font-serif-custom text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#2f281f] mb-8">
        {resolvedTitle}
      </h1>
      <p className="max-w-xl mx-auto text-lg text-[#5a5146] mb-10">
        {resolvedDescription}
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-[#cfc5b4] px-6 py-3 text-sm font-medium text-[#2f281f] transition hover:bg-[#2f281f] hover:text-[#efe9db]"
      >
        <ArrowLeft className="w-4 h-4" />
        Return Home
      </Link>
    </div>
  );
}
