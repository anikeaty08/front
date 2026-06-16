import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';
import Button from '../components/ui/Button';

const posts = [
  {
    id: 1,
    title: "Form & Void: The tension between structure and chaos",
    date: "OCT 12, 2023",
    category: "Essay",
    excerpt: "In my recent series, I attempt to navigate the delicate boundary where deliberate geometry yields to spontaneous gesture. The canvas becomes an arena where logic and emotion continually negotiate for dominance.",
    content: "The geometry of the square battles the fluidity of the poured paint. Each session in the studio is a confrontation with these opposing forces. Ultimately, the resolution comes not from one dominating the other, but finding a precarious equilibrium where both can exist without collapsing into mere decoration. The void is not empty space, but pregnant with potential, waiting to be activated by form.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80"
  },
  {
    id: 2,
    title: "Color Theory in Abstract Expressionism",
    date: "SEP 05, 2023",
    category: "Process",
    excerpt: "Exploring how limited palettes force deeper exploration of texture and composition. The restriction becomes the catalyst for innovation.",
    content: "When you strip away the crutch of chromatic variety, you are forced to confront value, temperature, and application methods. A single hue of crimson must do the work of an entire spectrum. This deliberate restriction becomes the catalyst for innovation, leading to a much deeper and more intimate understanding of the raw materials themselves.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80"
  },
  {
    id: 3,
    title: "Studio Notes: Winter 2023",
    date: "JAN 15, 2023",
    category: "Journal",
    excerpt: "Reflections on working with large scale canvases in the colder months. How environment dictates the rhythm of the brush.",
    content: "The physical chill of the studio translates directly into the stiffness of the medium. Gestures become more deliberate, less sweeping. The winter light, harsh and unforgiving as it streams through the skylight, demands a certain structural integrity from the work that the softer summer light might otherwise obscure. It is a season for excavation rather than accumulation.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
  }
];

const Blog = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <div className="w-full relative pt-32 pb-40 px-6 max-w-4xl mx-auto min-h-screen z-10">
      <div 
        ref={headerRef}
        className={clsx(
          "mb-24 text-center transition-all duration-1000",
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6 tracking-tight">Writings</h1>
        <p className="text-white/60 text-[11px] font-medium tracking-[0.3em] uppercase">Essays & Notes</p>
      </div>

      <div className="space-y-16">
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} delay={index * 150} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ post, delay }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article 
      ref={ref}
      className={clsx(
        "bg-noise p-8 lg:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 transition-all duration-1000 shadow-xl hover:shadow-2xl hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-full md:w-1/3 aspect-square md:aspect-auto md:min-h-[300px] overflow-hidden bg-gray-100 relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className="flex items-center gap-3 text-[#12c2e9] text-[9px] font-semibold tracking-widest uppercase mb-4">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-[#12c2e9]"></span>
          <span>{post.category}</span>
        </div>
        <h2 className="font-serif text-2xl lg:text-3xl text-gray-900 mb-4 tracking-tight leading-snug hover:text-[#e0281c] transition-colors cursor-pointer">
          {post.title}
        </h2>
        <p className={clsx(
          "text-gray-600 font-serif text-sm leading-relaxed transition-all duration-500",
          !isExpanded && "mb-6"
        )}>
          {post.excerpt}
        </p>
        
        <div 
          className={clsx(
            "overflow-hidden transition-all duration-700 ease-in-out",
            isExpanded ? "max-h-[500px] opacity-100 mb-6 mt-4" : "max-h-0 opacity-0 mb-0 mt-0"
          )}
        >
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-600 font-serif text-sm leading-relaxed">
              {post.content}
            </p>
          </div>
        </div>

        <div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#e0281c] text-[10px] font-semibold tracking-widest uppercase hover:text-gray-900 transition-colors flex items-center gap-2 group"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
            <iconify-icon 
              icon={isExpanded ? "solar:arrow-up-linear" : "solar:arrow-right-linear"} 
              class={clsx(
                "transform transition-transform", 
                !isExpanded && "group-hover:translate-x-1"
              )}
            ></iconify-icon>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Blog;