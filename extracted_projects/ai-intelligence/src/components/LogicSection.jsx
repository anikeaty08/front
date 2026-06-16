import React from 'react';

const LogicSection = () => {
  const principles = [
    {
      num: "01",
      title: "Precision First",
      desc: "In the realm of data, accuracy is the only currency. We prioritize exactitude over speed, ensuring that every inference is grounded in verifiable reality.",
      delay: "delay-100"
    },
    {
      num: "02",
      title: "Transparency by Design",
      desc: "Black boxes have no place in critical infrastructure. We architect systems that are explainable, traceable, and accountable to their human operators.",
      delay: "delay-200"
    },
    {
      num: "03",
      title: "Human Amplification",
      desc: "Our intelligence is designed to extend human capability, not replace it. We build tools that handle the computation so you can handle the vision.",
      delay: "delay-300"
    },
    {
      num: "04",
      title: "Security as Axiom",
      desc: "The fortress must be impregnable. We integrate security at the neural level, protecting your proprietary data with the rigor of a nation-state.",
      delay: "delay-400"
    },
    {
      num: "05",
      title: "Iterative Evolution",
      desc: "Static models decay. We build adaptive systems that learn from new inputs, ensuring your intelligence grows sharper with every interaction.",
      delay: "delay-500"
    }
  ];

  return (
    <section className="w-full bg-stone-900 py-24 px-6 md:px-12 md:py-32 relative text-[#F2F0EB]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-24 max-w-2xl reveal-item">
          <h2 className="mb-8 text-4xl font-light tracking-tighter text-white md:text-6xl font-dm-sans">
            The Logic of Operation
          </h2>
          <p className="text-lg leading-relaxed text-stone-400 font-sans tracking-tight">
            Etheria is not just a tool; it is a discipline. To bring artificial intelligence to its highest potential, we adhere to a set of immutable laws that govern our engineering, design, and deployment.
          </p>
        </div>

        {/* Principles List */}
        <div className="flex flex-col w-full">
          {principles.map((item) => (
            <div key={item.num} className={`group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item ${item.delay}`}>
              <div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
                <span className="font-mono text-stone-600">{item.num}</span>
                <span className="font-medium tracking-tight text-white font-sans">{item.title}</span>
              </div>
              <div className="basis-2/3">
                <p className="text-stone-500 transition-colors group-hover:text-stone-300 font-sans leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Item 06 (Last one - highlighted style) */}
          <div className="group flex flex-col gap-4 rounded-lg bg-stone-800/50 px-4 py-6 transition-all hover:bg-stone-800 md:flex-row md:items-center md:gap-12 md:-mx-4 mt-8 reveal-item delay-500">
            <div className="flex basis-1/3 items-center gap-8 text-sm md:text-base">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-700 text-stone-300">
                <iconify-icon icon="solar:global-linear" className="text-sm"></iconify-icon>
              </div>
              <span className="font-medium tracking-tight text-white font-sans">Global Intelligence Network</span>
            </div>
            <div className="basis-2/3">
              <p className="text-stone-400 font-sans leading-relaxed text-base">
                Access to a decentralized network of insights, allowing your enterprise to operate with the collective wisdom of the global market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicSection;