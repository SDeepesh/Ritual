import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogData } from '../data/blogData';
import LazyImage from '../components/LazyImage';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const foundBlog = blogData.find(b => b.slug === slug);
    if (foundBlog) {
      setBlog(foundBlog);
      // Get 2 related posts (same tags, excluding current)
      const related = blogData
        .filter(b => b.id !== foundBlog.id && b.tags.some(t => foundBlog.tags.includes(t)))
        .slice(0, 2);
      setRelatedPosts(related.length ? related : blogData.filter(b => b.id !== foundBlog.id).slice(0, 2));
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  if (!blog) return null;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": [blog.image],
    "datePublished": new Date(blog.date).toISOString(),
    "author": [{ "@type": "Person", "name": blog.author }],
    "description": blog.excerpt,
    "keywords": blog.seoKeywords
  };

  const htmlContent = blog.content
    .replace(/^### (.*)/gm, '<h3 class="blog-h3">$1</h3>')
    .replace(/^## (.*)/gm, '<h2 class="blog-h2">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\* (.*)/gm, '<li class="blog-li">$1</li>')
    .replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="blog-ul">$1</ul>')
    .replace(/\n\n/g, '</p><p class="blog-p">');

  return (
    <article className="min-h-screen bg-[#fcfaf7]">
      <Helmet>
        <title>{blog.title} | Ritual Wellness</title>
        <meta name="description" content={blog.excerpt} />
        <meta name="keywords" content={blog.seoKeywords} />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={`${blog.title} | Ritual Wellness`} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ritualwellness" />
        <meta name="twitter:creator" content="@ritualwellness" />
        <meta name="twitter:title" content={`${blog.title} | Ritual Wellness`} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta name="twitter:image" content={blog.image} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        <style>{`
          .blog-h2 { font-family: Georgia, serif; font-size: 1.75rem; color: #3a4a38; margin: 2.5rem 0 1rem; line-height: 1.3; border-left: 3px solid #7a9e7a; padding-left: 1rem; }
          .blog-h3 { font-family: Georgia, serif; font-size: 1.25rem; color: #3a4a38; margin: 2rem 0 0.75rem; font-weight: 600; }
          .blog-p { margin-bottom: 1.25rem; color: rgba(58, 74, 56, 0.85); line-height: 1.9; font-size: 1rem; }
          .blog-ul { margin: 1rem 0 1.5rem 1.5rem; }
          .blog-li { color: rgba(58, 74, 56, 0.85); margin-bottom: 0.5rem; list-style-type: disc; line-height: 1.7; font-size: 1rem; }
          .blog-content strong { color: #3a4a38; font-weight: 700; }
          .blog-content em { color: #7a9e7a; font-style: italic; }
        `}</style>
      </Helmet>

      {/* Full-width Hero Image */}
      <div className="w-full h-[40vh] md:h-[55vh] relative overflow-hidden">
        <LazyImage src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/80 via-brand-olive/30 to-transparent" />

        {/* Breadcrumb on top of image */}
        <div className="absolute top-24 left-0 right-0 px-6 md:px-16">
          <Link
            to="/#community"
            className="inline-flex items-center gap-2 text-white/80 uppercase tracking-widest text-[10px] font-bold hover:text-white transition-colors"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Journal
          </Link>
        </div>

        {/* Title overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-10 md:pb-14">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-brand-sage text-white rounded-full text-[9px] uppercase tracking-[2px] font-bold">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-serif leading-tight mb-4 max-w-3xl">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-white/70 text-xs font-medium">
              <span>By {blog.author}</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span>{blog.date}</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Article Body */}
          <main className="flex-1 min-w-0">
            {/* Excerpt / Lead */}
            <div className="bg-brand-sage/10 border-l-4 border-brand-sage rounded-r-2xl px-6 py-5 mb-10">
              <p className="text-brand-olive font-serif text-lg leading-relaxed italic">
                {blog.excerpt}
              </p>
            </div>

            {/* Content */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: `<p class="blog-p">${htmlContent}</p>` }}
            />

            {/* Tags Footer */}
            <div className="mt-12 pt-8 border-t border-brand-beige/30 flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-widest text-brand-olive/50 font-bold self-center mr-2">Tagged:</span>
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-brand-olive/5 border border-brand-olive/10 text-brand-olive rounded-full text-[10px] uppercase tracking-[1.5px] font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-8">

            {/* CTA Card */}
            <div className="bg-brand-olive text-white rounded-2xl p-7 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-4">
                  <span className="text-[9px] uppercase tracking-[3px] font-bold text-white">Start Today</span>
                </div>
                <h3 className="text-xl font-serif leading-snug mb-3">
                  Experience Clean Eating, Delivered
                </h3>
                <p className="text-brand-beige/70 text-sm leading-relaxed mb-6">
                  Chef-crafted, nutritionist-designed meals delivered fresh across Chennai every morning.
                </p>
                <Link
                  to="/start-ritual"
                  className="block text-center bg-brand-sage text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-olive transition-colors"
                >
                  View Plans →
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div>
                <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-4">
                  <span className="text-[9px] text-brand-sage uppercase tracking-[3px] font-bold">More from the Journal</span>
                </div>
                <div className="space-y-4">
                  {relatedPosts.map(post => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group block bg-white rounded-xl border border-brand-beige/20 overflow-hidden shadow-sm hover:shadow-md transition-all">
                      <div className="aspect-[16/8] overflow-hidden">
                        <LazyImage src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <span className="text-[9px] text-brand-sage uppercase tracking-widest font-bold">{post.readTime}</span>
                        <h4 className="text-sm font-serif text-brand-olive mt-1 leading-snug group-hover:text-brand-sage transition-colors">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author Info */}
            <div className="bg-white rounded-2xl border border-brand-beige/20 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-sage/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-[9px] text-brand-sage uppercase tracking-widest font-bold">Written by</span>
              <h4 className="text-brand-olive font-serif text-base mt-1">{blog.author}</h4>
              <p className="text-[11px] text-brand-olive/60 mt-1 leading-relaxed">
                Our team of nutritionists and wellness experts craft evidence-based content designed for the modern Chennai lifestyle.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
