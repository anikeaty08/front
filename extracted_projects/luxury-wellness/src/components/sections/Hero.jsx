import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#2d2a21]">
      <div className="absolute inset-0">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/cd45a865-eb07-4d00-b292-10e8d5699252/1600w.png"
          alt="Woman standing near window in soft morning light"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45"></div>
        <div className="absolute inset-0 bg-[#3a3527]/35"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[90rem] grid-cols-1 gap-8 px-4 pb-12 pt-32 sm:px-6 sm:pb-16 lg:grid-cols-12 lg:px-8 lg:pb-20 lg:pt-48 xl:pt-64">
        <div className="lg:col-span-7">
          <p className="mb-8 text-xs uppercase tracking-[0.18em] text-white/60 animate-fade-in-up">
            A luxurious private space of inner peace.
          </p>
          <h1 className="max-w-4xl font-serif-custom text-5xl font-normal leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Elevating Your Mind to a State of <span className="italic">Calm Luxury.</span>
          </h1>
        </div>

        <div className="flex items-end lg:col-span-5 lg:justify-end">
          <div className="max-w-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300">
            <p className="text-base leading-7 text-white/80">
              Serenique is not just a healing—it's a sanctuary, and the commitment to caring calm your soul.
            </p>
            <Link to="/services" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f2eadc] px-4 py-2 text-sm font-medium text-[#2c261e] transition hover:bg-white hover:scale-105">
              Discover Calm
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
