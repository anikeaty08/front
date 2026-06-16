import React from 'react';

const CaseStudyCard = ({ title, logoSrc, bgImageSrc, linkText }) => {
  return (
    <a href="#" className="group block relative overflow-hidden rounded-2xl bg-[#0a2540] aspect-square md:aspect-[4/3] hover:shadow-xl transition-shadow">
      {/* Background Image */}
      {bgImageSrc && (
        <img 
          src={bgImageSrc} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
        />
      )}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/50 to-transparent opacity-90"></div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
        {logoSrc && (
          <img src={logoSrc} alt="Logo" className="h-8 w-auto mb-4 object-contain brightness-0 invert opacity-90" />
        )}
        <h4 className="text-xl font-medium mb-4 leading-tight">{title}</h4>
        <div className="text-sm font-medium flex items-center gap-1 group-hover:text-indigo-400 transition-colors">
          {linkText}
          <iconify-icon icon="solar:arrow-right-linear" width="16" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </div>
      </div>
    </a>
  );
};

const CaseStudies = () => {
  return (
    <section className="py-24 px-page-margin bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#0a2540] text-2xl font-medium tracking-tight mb-10">Build a foundation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard 
            title="Decagon decreases support costs by 20% with Stripe-integrated agents."
            bgImageSrc="https://images.stripeassets.com/fzn2n1nzq965/1hreJwxuVJ5ucPtuA7pRKH/3c5630387bca898d01ae17fc7ae2890a/decagon.png?w=864&q=90"
            linkText="Read Decagon's story"
          />
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-lg border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
                <iconify-icon icon="solar:document-text-bold" width="24" className="text-indigo-600"></iconify-icon>
              </div>
              <h4 className="text-[#0a2540] text-xl font-medium mb-4">Read our latest research and guides</h4>
              <p className="text-[#424770] mb-8">
                Explore comprehensive documentation, implementation guides, and industry insights built by our engineering and product teams.
              </p>
            </div>
            
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <a href="#" className="flex items-center justify-between group">
                <span className="text-sm font-medium text-[#0a2540] group-hover:text-indigo-600 transition-colors">State of Checkout Report 2024</span>
                <iconify-icon icon="solar:arrow-right-linear" width="16" className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"></iconify-icon>
              </a>
              <a href="#" className="flex items-center justify-between group">
                <span className="text-sm font-medium text-[#0a2540] group-hover:text-indigo-600 transition-colors">Guide to Billing Models</span>
                <iconify-icon icon="solar:arrow-right-linear" width="16" className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"></iconify-icon>
              </a>
              <a href="#" className="flex items-center justify-between group">
                <span className="text-sm font-medium text-[#0a2540] group-hover:text-indigo-600 transition-colors">Platform Payments Architecture</span>
                <iconify-icon icon="solar:arrow-right-linear" width="16" className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;