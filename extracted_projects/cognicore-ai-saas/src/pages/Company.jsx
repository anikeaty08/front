import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MetricsSection from '../components/MetricsSection'
import TestimonialSection from '../components/TestimonialSection'
import MaskedText from '../components/MaskedText'

gsap.registerPlugin(ScrollTrigger)

export default function Company() {
  const mainRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray('.reveal-element')
      revealElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      const staggerContainers = gsap.utils.toArray('.stagger-container')
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.stagger-item')
        const staggerAmount = parseFloat(container.getAttribute('data-stagger')) || 0.1
        
        gsap.fromTo(items,
          { opacity: 0, y: 50, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: staggerAmount,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
            }
          }
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <main className="flex-grow pt-32 pb-0">
        
        {/* Company Hero & Image */}
        <div className="text-center px-6 py-20 max-w-5xl mx-auto">
          <MaskedText 
            as="h1" 
            text="Building the cognitive future" 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white font-geist mb-6 justify-center" 
          />
          <p className="reveal-element text-zinc-400 text-lg md:text-xl font-extralight font-geist leading-relaxed mb-16 max-w-3xl mx-auto">
            We are a team of distributed systems engineers, neural architecture researchers, and design thinkers on a mission to make scalable intelligence accessible to every enterprise.
          </p>
          
          <div className="relative group overflow-hidden rounded-2xl border border-[#27272a] reveal-element">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
              alt="CogniCore Team" 
              className="w-full h-[300px] md:h-[500px] object-cover opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white font-geist font-light tracking-wide">Our founding team at the San Francisco HQ, 2023.</p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="max-w-7xl mx-auto px-6 py-10 pb-32">
          <div className="reveal-element mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-tight text-white font-geist mb-6">Built on core principles</h2>
            <p className="text-zinc-400 text-base font-extralight font-geist leading-relaxed">
              We don't just build software; we architect the future of autonomous workflows. Our principles guide every commit, every design decision, and every customer interaction.
            </p>
          </div>
          
          <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stagger-item bg-[#18181b] border border-[#27272a] p-10 hover:border-[#2563eb]/50 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <iconify-icon icon="solar:lightbulb-minimalistic-linear" class="text-4xl text-[#2563eb] mb-6"></iconify-icon>
              <h3 className="text-xl font-medium tracking-tight text-white font-geist mb-3">Relentless Innovation</h3>
              <p className="text-zinc-400 text-sm font-extralight leading-relaxed font-geist">We push the boundaries of what's possible in neural architectures, never settling for industry standards when we can define new ones.</p>
            </div>
            
            <div className="stagger-item bg-[#18181b] border border-[#27272a] p-10 hover:border-[#2563eb]/50 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <iconify-icon icon="solar:shield-keyhole-linear" class="text-4xl text-[#2563eb] mb-6"></iconify-icon>
              <h3 className="text-xl font-medium tracking-tight text-white font-geist mb-3">Security by Design</h3>
              <p className="text-zinc-400 text-sm font-extralight leading-relaxed font-geist">Enterprise intelligence requires absolute trust. We build security, privacy, and compliance into the very fabric of our models.</p>
            </div>
            
            <div className="stagger-item bg-[#18181b] border border-[#27272a] p-10 hover:border-[#2563eb]/50 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <iconify-icon icon="solar:users-group-two-rounded-linear" class="text-4xl text-[#2563eb] mb-6"></iconify-icon>
              <h3 className="text-xl font-medium tracking-tight text-white font-geist mb-3">Radical Collaboration</h3>
              <p className="text-zinc-400 text-sm font-extralight leading-relaxed font-geist">We believe the most complex challenges are solved not by brilliant individuals, but by deeply integrated, cross-functional teams.</p>
            </div>
          </div>
        </div>

        {/* Keeping original references */}
        <div className="pt-10 border-t border-[#27272a]/50">
          <MetricsSection />
        </div>
        
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  )
}