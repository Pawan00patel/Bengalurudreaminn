import React, { useState, useMemo } from 'react';
import { blogPosts, BlogPost } from '../../data/blog/blogPosts';
import '../../styles/Blog.css';

const getYears = (posts: BlogPost[]) => {
  const years = Array.from(new Set(posts.map(post => post.year)));
  return years.sort((a, b) => b - a);
};

const Blog: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<number | 'all'>('all');

  const years = useMemo(() => getYears(blogPosts), []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase()) ||
        post.author.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || post.year === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="blog-page container py-5">
      <h1 className="mb-4 text-center">Blog</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search blog posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="form-select w-auto"
          value={category}
          onChange={e => setCategory(e.target.value === 'all' ? 'all' : Number(e.target.value))}
        >
          <option value="all">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      {years.map(year => {
        const postsForYear = filteredPosts.filter(post => post.year === year);
        if (!postsForYear.length) return null;
        return (
          <div key={year} className="mb-5">
            <h2 className="mb-3">{year}</h2>
            <div className="row g-4">
              {postsForYear.map(post => (
                <div className="col-md-6 col-lg-4" key={post.url}>
                  <div className="card h-100 blog-card">
                    {post.image && (
                      <img src={post.image} alt={post.title} className="card-img-top" style={{height:200,objectFit:'cover'}} />
                    )}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{post.title}</h5>
                      <div className="mb-2 text-muted" style={{fontSize:'0.95em'}}>
                        By {post.author} | {new Date(post.date).toLocaleDateString()}
                      </div>
                      <p className="card-text flex-grow-1">{post.summary}</p>
                      <a
                        className="btn btn-primary mt-auto"
                        onClick={e => {
                          e.preventDefault();
                          window.location.href = `/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                        }}
                        href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      {filteredPosts.length === 0 && (
        <div className="alert alert-info text-center">No blog posts found.</div>
      )}
    </div>
  );
};

export default Blog;
