import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SolutionsExplainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Build global payment flows",
      content: "Create a custom payment experience with our UI components or use our hosted checkout page. Accept dozens of payment methods natively."
    },
    {
      title: "Manage recurring revenue",
      content: "Automate billing, handle prorations, and manage subscription lifecycles without writing complex logic from scratch."
    },
    {
      title: "Route multi-party payments",
      content: "Onboard sellers, verify identities, and automatically split payments across multiple vendors for marketplaces and platforms."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12 sticky top-32">
            <h2 className="text-indigo-600 font-normal tracking-wide uppercase text-sm mb-3">Designed for developers</h2>
            <h3 className="text-3xl md:text-4xl font-normal text-slate-800 mb-6 tracking-tight leading-tight">
              The world's most powerful and easy-to-use APIs
            </h3>
            <p className="text-lg font-light text-slate-500 mb-8">
              We obsess over every detail of the API experience. Our libraries are available in every major language, and our docs are widely considered the gold standard.
            </p>
            <Link to="#" className="bg-indigo-600 text-white text-[15px] font-light px-6 py-3 rounded-full hover:bg-indigo-700 transition-all inline-flex items-center gap-2 shadow-sm">
              Read the docs
              <iconify-icon icon="solar:alt-arrow-right-linear" width="18" height="18"></iconify-icon>
            </Link>
          </div>

          {/* Right Accordion/List */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-4">
              {tabs.map((tab, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${activeTab === idx ? 'border-indigo-600 shadow-lg shadow-indigo-600/10 bg-white' : 'border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer'}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h4 className={`text-lg font-normal ${activeTab === idx ? 'text-indigo-600' : 'text-slate-800'}`}>
                      {tab.title}
                    </h4>
                    <iconify-icon 
                      icon={activeTab === idx ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
                      width="24" 
                      className={activeTab === idx ? 'text-indigo-600' : 'text-gray-400'}
                    ></iconify-icon>
                  </div>
                  <div 
                    className={`px-6 pb-6 text-slate-500 font-light transition-all duration-300 ${activeTab === idx ? 'block opacity-100' : 'hidden opacity-0'}`}
                  >
                    <p className="mb-6">{tab.content}</p>
                    {/* Mock Code Block */}
                    <div className="bg-[#0a2540] rounded-xl p-4 overflow-x-auto font-mono text-sm font-light text-gray-300 shadow-inner">
                      <div className="flex gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <code>
                        <span className="text-pink-400">const</span> nexus = <span className="text-blue-400">require</span>(<span className="text-green-300">'nexuspay'</span>)(<span className="text-green-300">'sk_test_...'</span>);<br/><br/>
                        <span className="text-pink-400">const</span> paymentIntent = <span className="text-pink-400">await</span> nexus.paymentIntents.<span className="text-blue-300">create</span>({'{'}<br/>
                        &nbsp;&nbsp;amount: <span className="text-purple-300">2000</span>,<br/>
                        &nbsp;&nbsp;currency: <span className="text-green-300">'usd'</span>,<br/>
                        &nbsp;&nbsp;automatic_payment_methods: {'{'} enabled: <span className="text-purple-300">true</span> {'}'},<br/>
                        {'}'});
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsExplainer;