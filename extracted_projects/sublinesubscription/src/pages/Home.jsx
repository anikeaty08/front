import Hero from '../components/Hero'
import LogoStrip from '../components/LogoStrip'
import ValueProps from '../components/ValueProps'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ValueProps />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  )
}