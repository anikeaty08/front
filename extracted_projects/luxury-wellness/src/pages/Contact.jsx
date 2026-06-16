export default function Contact() {
  return (
    <div className="w-full pt-32 pb-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <section className="pb-16 md:pb-24 border-b border-[#d8cfbf]">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#7a7063] animate-fade-in-up">
            Get in Touch
          </p>
          <h1 className="max-w-4xl font-serif-custom text-5xl font-normal leading-[0.95] tracking-tight text-[#2f281f] sm:text-6xl lg:text-7xl">
            We Would Love to Hear <span className="italic">From You.</span>
          </h1>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl mb-8">
              Reach out for reservations, inquiries, or simply to say hello.
            </p>
            <div className="space-y-6 text-lg text-[#5a5146] mb-8">
              <p>
                <strong className="text-[#2f281f] font-medium text-sm uppercase tracking-[0.18em] block mb-2">Location</strong>
                4520 Washington Ave.<br/>Manchester, 39495
              </p>
              <p>
                <strong className="text-[#2f281f] font-medium text-sm uppercase tracking-[0.18em] block mb-2">Call us</strong>
                +62 815 7565 8150
              </p>
              <p>
                <strong className="text-[#2f281f] font-medium text-sm uppercase tracking-[0.18em] block mb-2">Email</strong>
                meng@designcode.io
              </p>
            </div>
          </div>

          <div className="bg-[#e8e1d2] p-8 sm:p-12">
            <form action="mailto:meng@designcode.io" method="post" encType="text/plain" className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-transparent border-b border-[#cfc5b4] py-3 focus:outline-none focus:border-[#2f281f] transition-colors text-[#2f281f] placeholder:text-[#a09786]" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-transparent border-b border-[#cfc5b4] py-3 focus:outline-none focus:border-[#2f281f] transition-colors text-[#2f281f] placeholder:text-[#a09786]" 
                  placeholder="Your email address" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063] mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  className="w-full bg-transparent border-b border-[#cfc5b4] py-3 focus:outline-none focus:border-[#2f281f] transition-colors text-[#2f281f] resize-none placeholder:text-[#a09786]" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#2f281f] bg-[#2f281f] px-8 py-3 text-sm font-medium text-[#efe9db] transition hover:bg-transparent hover:text-[#2f281f]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
