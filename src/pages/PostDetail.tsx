
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TableOfContents from '../components/TableOfContents';
import { blogPosts } from '../data/posts';

const PostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <Link 
                to={`/category/${post.category.toLowerCase()}`}
                className="px-3 py-1 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
              >
                {post.category}
              </Link>
              <span className="text-white/80">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <Link to="/author" className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
                alt="John Doe"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="text-white">
                <div className="font-semibold">John Doe</div>
                <div className="text-sm opacity-80">Senior Education Specialist</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-12">
          <article className="flex-1 max-w-3xl prose prose-lg prose-headings:scroll-mt-20">
            <style>{`
              .prose h1 { font-size: 2.5rem; margin-top: 2rem; margin-bottom: 1.5rem; }
              .prose h2 { font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; }
              .prose h3 { font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem; }
              .prose h4 { font-size: 1.25rem; margin-top: 1.25rem; margin-bottom: 0.5rem; }
              .prose h5 { font-size: 1.1rem; margin-top: 1rem; margin-bottom: 0.5rem; }
              .prose h6 { font-size: 1rem; margin-top: 1rem; margin-bottom: 0.5rem; }
              .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                font-weight: 600;
                line-height: 1.3;
                color: #1a1a1a;
              }
              .prose p {
                margin-top: 1.25em;
                margin-bottom: 1.25em;
                line-height: 1.8;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          <aside className="hidden lg:block w-64">
            <TableOfContents />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;
