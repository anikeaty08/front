import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCards = () => {
  const features = [
    {
      icon: "solar:shield-check-bold-duotone",
      title: "Optimised Checkout",
      desc: "Use our pre-built, conversion-optimised checkout flows or build your own pixel-perfect custom forms.",
      link: "Explore checkout"
    },
    {
      icon: "solar:global-bold-duotone",
      title: "Global Routing",
      desc: "Dynamically route payments to local acquirers across the globe to increase acceptance rates natively.",
      link: "View coverage"
    },
    {
      icon: "solar:chart-square-bold-duotone",
      title: "Revenue Recognition",
      desc: "Automate financial reporting and sync payment data directly into your ERP or accounting system.",
      link: "See reporting"
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-indigo-600/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <iconify-icon icon={item.icon} width="28" height="28"></iconify-icon>
              </div>
              <h4 className="text-xl font-normal text-slate-800 mb-3">{item.title}</h4>
              <p className="text-slate-500 font-light mb-6 leading-relaxed">
                {item.desc}
              </p>
              <Link to="#" className="inline-flex items-center text-indigo-600 font-light group/link">
                {item.link}
                <iconify-icon icon="solar:alt-arrow-right-linear" width="18" height="18" className="ml-1 transition-transform group-hover/link:translate-x-1"></iconify-icon>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;