import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    subtitle: 'Calm Awakening',
    title: 'Guided Meditation',
    tags: ['Inner', 'Serenity', 'Stillness', 'Thought'],
    to: '/services/meditation-therapy',
  },
  {
    id: '02',
    subtitle: 'Sacred Space',
    title: 'Private Mind Therapy',
    tags: ['Ground', 'Renew', 'Reality', 'Relaxation'],
    to: '/services/mindfulness-retreat',
  },
  {
    id: '03',
    subtitle: 'Serenity',
    title: 'Mindful Retreats',
    tags: ['Focus', 'Longevity', 'Insight', 'Awareness'],
    to: '/services/holistic-counseling',
  },
  {
    id: '04',
    subtitle: 'Soul Harmony',
    title: 'Holistic Wellness Program',
    tags: ['Alignement', 'Wellness', 'Balance'],
    to: '/services/restorative-rituals',
  },
];

export default function Services() {
  return (
    <section className="border-t border-[#d8cfbf]">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 border-x border-[#d8cfbf] lg:grid-cols-12">
        <div className="border-b border-[#d8cfbf] p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
          <div className="sticky top-32">
            <p className="mb-5 text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">Every journey begins with one mindful step.</p>
            <h2 className="font-serif-custom text-5xl leading-[0.98] tracking-tight text-[#2f281f] sm:text-6xl">
              The Art of Inner Refinement.
            </h2>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-[#d8cfbf]">
            {services.map((service, index) => (
              <div key={service.id}>
                <Link
                  to={service.to}
                  className="group grid cursor-pointer grid-cols-1 gap-4 p-6 transition-colors duration-300 hover:bg-[#e8e1d2] sm:grid-cols-[1fr_auto_auto] sm:items-center"
                >
                  <div>
                    <p className="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">{service.id} {service.subtitle}</p>
                    <h3 className="font-serif-custom text-3xl tracking-tight text-[#2f281f] transition-transform duration-300 group-hover:translate-x-2">{service.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-[#6c6257]">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#d8cfbf] bg-[#efe9db] px-3 py-1">{tag}</span>
                    ))}
                  </div>
                  <span className="justify-self-start rounded-full border border-[#cfc5b4] p-2 text-[#7a7063] transition-all duration-300 group-hover:border-[#2f281f] group-hover:bg-[#2f281f] group-hover:text-[#efe9db] sm:justify-self-end">
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </Link>

                {index === 1 && (
                  <div className="grid gap-4 bg-[#efe9db] p-4 sm:p-6">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div className="overflow-hidden">
                        <img
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8999d3b-1466-4c05-8d4f-bcb973d2970d_800w.jpg"
                          alt="Massage and wellness"
                          className="aspect-[1.4/1] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <img
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d46ed00-b413-4ab7-8baa-c6cbfa41ca95_800w.webp"
                          alt="Tea and flowers in soft light"
                          className="aspect-[1.4/1] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <img
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/11f8ba03-fbfb-4d1a-8596-46c4f9738763/800w.png"
                          alt="Woman resting"
                          className="aspect-[1.4/1] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
