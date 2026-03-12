import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Ensure this is installed, or use standard Helmet
import { blogData } from '../data/blogData';
import LazyImage from '../components/LazyImage';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find the blog post by slug
    const foundBlog = blogData.find(b => b.slug === slug);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      // If not found, redirect to home or a 404
      navigate('/');
    }
  }, [slug, navigate]);

  if (!blog) return null; // Or a loading spinner

  // Generate Schema Markup (JSON-LD) for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": [blog.image],
    "datePublished": new Date(blog.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": blog.author
    }],
    "description": blog.excerpt,
    "keywords": blog.seoKeywords
  };

  return (
    <article className="min-h-screen bg-[#fcfaf7] pt-24 md:pt-32 pb-16 md:pb-24">
      {/* SEO Injection */}
      <Helmet>
        <title>{blog.title} | Ritual Wellness</title>
        <meta name="description" content={blog.excerpt} />
        <meta name="keywords" content={blog.seoKeywords} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 md:px-8">

        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link to="/#community" className="text-brand-sage uppercase tracking-widest text-[10px] font-bold hover:text-brand-olive transition-colors flex items-center gap-2">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Journal
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
            {blog.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-brand-sage/10 text-brand-sage rounded-full text-[10px] uppercase tracking-[2px] font-bold">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-olive font-serif leading-tight mb-6">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-brand-olive/70 font-medium">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-16 aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-brand-beige/20">
          <LazyImage src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        {/* Since the content string has markdown headers (##), we're mapping standard basic HTML tags or using a simple renderer.
            For robustness without adding extra dependencies if react-markdown isn't present, we'll cleanly render the text blocks or use dangerouslySetInnerHTML safely since we control blogData. */}
        <div className="prose prose-lg prose-olive mx-auto font-sans text-brand-olive/90 leading-relaxed md:leading-loose">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              // A very crude markdown-to-html converter just for the strict structures we provided in blogData.js
              // In a production app, use marked.js or react-markdown
              __html: blog.content
                .replace(/^### (.*)/gm, '<h3 className="text-2xl font-serif text-brand-olive mt-8 mb-4">$1</h3>')
                .replace(/^## (.*)/gm, '<h2 className="text-3xl font-serif text-brand-olive mt-12 mb-6">$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n\n/g, '</p><p className="mb-6">')
                .replace(/\* (.*)/g, '<li className="ml-6 list-disc mb-2">$1</li>')
            }}
          />
        </div>

        {/* Footer / Call to Action */}
        <div className="mt-20 pt-10 border-t border-brand-beige/30 text-center">
          <h3 className="text-2xl font-serif text-brand-olive mb-4">Start Your Clean Eating Ritual</h3>
          <p className="text-brand-olive/80 mb-8 max-w-lg mx-auto">
            Ready to experience the functional benefits discussed in this article? Explore our chef-crafted meal plans delivered across Chennai.
          </p>
          <Link to="/start-ritual" className="inline-block bg-brand-olive text-white px-8 py-3 rounded-md text-sm font-medium uppercase tracking-widest hover:bg-brand-sage transition-colors">
            View Plans
          </Link>
        </div>

      </div>
    </article>
  );
};

export default BlogDetail;
