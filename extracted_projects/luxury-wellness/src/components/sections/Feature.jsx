import { Sparkles } from 'lucide-react';

export default function Feature() {
  return (
    <section className="relative isolate overflow-hidden border-y border-[#d8cfbf] bg-[#312c22]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80"
          alt="Seated woman by curtain in quiet light"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#2f2a21]/40"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:self-end">
            <h2 className="max-w-xl font-serif-custom text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl">
              Crafted to Elevate both <span className="italic">Body</span> and <span className="italic">Mind.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/75">
              Every treatment at our sanctuary is built for deep renewal. A transformation in calm, leaving your being feeling impressions of calm, balance, and elevated vitality.
            </p>
          </div>

          <div className="lg:col-span-6 lg:flex lg:items-start lg:justify-end">
            <div className="space-y-4 w-full sm:w-auto">
              <div className="ml-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm shadow-xl hover:bg-white/20 transition-colors cursor-default">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/15 p-1.5">
                    <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-serif-custom text-2xl tracking-tight">Mental Clarity</div>
                    <div className="mt-1 max-w-xs text-sm text-white/75">Free your thoughts from noise and embrace focus like never before.</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-10 pr-10 text-white/50">
                <span className="rounded-full border border-white/20 p-2 hover:bg-white/20 transition-colors cursor-pointer"></span>
                <span className="rounded-full border border-white/20 p-2 bg-white/20"></span>
                <span className="rounded-full border border-white/20 p-2 hover:bg-white/20 transition-colors cursor-pointer"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}