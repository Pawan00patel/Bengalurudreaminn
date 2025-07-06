import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { blogPosts } from '../../data/blog/blogPosts';
import '../../styles/Blog.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();
  const index = blogPosts.findIndex(post =>
    post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
  const post = blogPosts[index];

  if (!post) return <div className="container py-5 text-center">Blog post not found.</div>;

  const prev = index > 0 ? blogPosts[index - 1] : null;
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return (
    <div className="blog-page container py-5">
      <h1 className="mb-4 text-center">{post.title}</h1>
      <div className="mb-3 text-muted text-center">
        By {post.author} | {new Date(post.date).toLocaleDateString()}
      </div>
      {post.image && (
        <img src={post.image} alt={post.title} className="mb-4 w-100 rounded" style={{maxWidth:600,objectFit:'cover',display:'block',margin:'0 auto'}} />
      )}
      <div className="mb-4" style={{fontSize:'1.1em'}}>
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <p>{post.summary}</p>
        )}
      </div>
      <div className="d-flex justify-content-between mt-5">
        <button
          className="btn btn-outline-primary"
          disabled={!prev}
          onClick={() => prev && history.push(`/blog/${prev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
        >
          &larr; Previous
        </button>
        <button
          className="btn btn-outline-primary ms-auto"
          disabled={!next}
          onClick={() => next && history.push(`/blog/${next.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
