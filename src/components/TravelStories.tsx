import { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, User } from 'lucide-react';
import { stories } from '@/data/destinations';

export default function TravelStories() {
  const [openStory, setOpenStory] = useState<string | null>(null);

  const activeStory = stories.find((s) => s.id === openStory);

  return (
    <section id="stories" className="section-pad" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container-page">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill mb-4 bg-accent-soft-c text-accent-c">
            <BookOpen className="w-3.5 h-3.5" />
            Travel Stories
          </span>
          <h2 className="section-title mb-4">Stories from the road</h2>
          <p className="section-subtitle mx-auto">
            Real travel writing from real travellers—budget tips, food trails, and hidden places worth the detour.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <article
              key={story.id}
              className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setOpenStory(story.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                <span
                  className="pill absolute top-3 left-3"
                  style={{ backgroundColor: 'var(--gold)', color: '#0F172A' }}
                >
                  {story.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs mb-3 text-fg-muted">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {story.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {story.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug group-hover:text-accent-c transition-colors text-fg-primary">
                  {story.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 line-clamp-3 text-fg-muted">{story.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all text-accent-c">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpenStory(null)}
        >
          <div
            className="rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-fade-up"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden rounded-t-3xl">
              <img src={activeStory.image} alt={activeStory.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
              <button
                onClick={() => setOpenStory(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', color: '#F9FAFB' }}
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 lg:p-8">
              <span
                className="pill mb-4"
                style={{ backgroundColor: 'var(--gold-bg)', color: 'var(--gold)' }}
              >
                {activeStory.category}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 leading-tight text-fg-primary">
                {activeStory.title}
              </h2>
              <div className="flex items-center gap-4 text-sm mb-6 pb-6 text-fg-muted" style={{ borderBottom: '1px solid var(--border-soft)' }}>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> {activeStory.author}
                </span>
                <span>{activeStory.date}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {activeStory.readTime}
                </span>
              </div>
              <div className="space-y-4">
                {activeStory.content.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[15px] text-fg-secondary">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
