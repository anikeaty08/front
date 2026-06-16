import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data';

export default function JournalDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id) || articles[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-12 pb-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/journal" className="inline-flex items-center gap-2 text-sm font-medium text-[#737373] hover:text-[#1A1A1A] transition-colors mb-16">
          <iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
          Back to Journal
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-white border border-black/5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#737373]">
              {article.tag}
            </span>
            <span className="text-sm text-[#737373]">{article.date}</span>
            <span className="text-sm text-[#737373]">/</span>
            <span className="text-sm text-[#737373]">6 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-[1.1]">
            {article.title}
          </h1>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-black/5">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/7fd7752f-00a8-4838-bb0a-6248ef01545b/1600w.png" className="w-full h-full object-cover grayscale" />
             </div>
             <div>
               <p className="text-sm font-medium">Julian Vance</p>
               <p className="text-xs text-[#737373]">Art Director</p>
             </div>
          </div>
        </header>

        <div className="rounded-[2.5rem] overflow-hidden mb-16 aspect-[16/9]">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose prose-lg max-w-none text-[#1A1A1A]/80 leading-relaxed space-y-8">
          <p className="text-xl text-[#1A1A1A] font-medium leading-relaxed">
            In the rapidly evolving landscape of digital design, the principles that once governed print editorial are finding new life in browser-based experiences.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <h3 className="text-2xl font-medium text-[#1A1A1A] tracking-tight pt-4">The Convergence of Mediums</h3>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
          </p>
          <blockquote className="border-l-4 border-black pl-8 py-2 my-12 text-2xl font-light italic text-[#1A1A1A]">
            "The best designs are those that feel inevitable—as if they couldn't have existed any other way."
          </blockquote>
          <p>
            Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
          </p>
        </article>

        <div className="mt-24 pt-12 border-t border-black/5 flex justify-between items-center">
          <div className="flex gap-4">
             <button className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
               <iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
             </button>
             <button className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
               <iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
             </button>
          </div>
          <Link to="/journal" className="text-sm font-medium underline underline-offset-4">
            View all articles
          </Link>
        </div>
      </div>
    </div>
  );
}