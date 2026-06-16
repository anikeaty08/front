import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What makes Serenique different from others?",
    answer: "Our approach integrates ancient mindfulness practices with modern psychological insights. We don't just offer temporary relief, but equip you with tools for sustained inner peace in a meticulously designed sanctuary.",
    subQuestion: "How long is a typical session?",
    subAnswer: "Sessions usually last 60 to 90 minutes, balancing depth and accessibility. This rhythm ensures you can fully immerse in the experience without feeling rushed."
  },
  {
    id: 2,
    question: "Do I need prior experience with meditation?",
    answer: "Not at all. Our practitioners are skilled at guiding beginners and deepening the practice of experienced individuals alike. Every session is tailored to your current state and comfort level."
  },
  {
    id: 3,
    question: "Can I book private experiences?",
    answer: "Yes, we offer exclusive private bookings for individuals, couples, or small groups seeking a more personalized and intimate healing journey."
  },
  {
    id: 4,
    question: "Where is Serenique located?",
    answer: "We are nestled in the quiet district of Manchester at 4520 Washington Ave, designed to be easily accessible yet completely removed from the city's noise."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="border-t border-[#d8cfbf]">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 border-x border-[#d8cfbf] lg:grid-cols-12">
        <div className="border-b border-[#d8cfbf] p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
          <div className="sticky top-32">
            <p className="mb-5 text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">Guidance refined for those seeking calm.</p>
            <h2 className="font-serif-custom text-5xl leading-[0.98] tracking-tight text-[#2f281f] sm:text-6xl">
              Eternal Questions &amp; Answer
            </h2>
            <div className="mt-12">
              <div className="mb-4 text-3xl leading-none text-[#2f281f]">...</div>
              <p className="max-w-sm text-base leading-7 text-[#5a5146]">
                Our FAQs crafted to answer your most important questions, offering peace of mind before you begin your wellness journey.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-[#d8cfbf]">
            {faqData.map((faq) => (
              <div key={faq.id} className="p-6 sm:p-8 transition-colors hover:bg-[#e8e1d2]/50">
                <div 
                  className="flex items-start justify-between gap-4 cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex-1">
                    <h3 className={`font-serif-custom text-3xl tracking-tight transition-colors duration-300 ${openId === faq.id ? 'text-[#2f281f]' : 'text-[#4d453c]'}`}>
                      {faq.question}
                    </h3>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        openId === faq.id ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl text-base leading-7 text-[#5a5146] mb-4">
                          {faq.answer}
                        </p>
                        {faq.subQuestion && (
                          <div className="mt-6 border-t border-[#cfc5b4]/50 pt-6">
                            <p className="text-xl text-[#2f281f] font-serif-custom">{faq.subQuestion}</p>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a5146]">
                              {faq.subAnswer}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className={`shrink-0 rounded-full border border-[#cfc5b4] p-2 transition-colors duration-300 ${openId === faq.id ? 'bg-[#2f281f] text-[#efe9db] border-[#2f281f]' : 'text-[#7a7063] bg-transparent'}`}>
                    {openId === faq.id ? (
                      <Minus className="h-4 w-4" strokeWidth={1.5} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}