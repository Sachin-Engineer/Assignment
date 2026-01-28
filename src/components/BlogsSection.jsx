import React from 'react';
import './styles.css';

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      category: 'TECH',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      date: '25 Jan 2025',
      isHighlighted: false
    },
    {
      id: 2,
      category: 'DESIGN',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      date: '27 Jan 2025',
      isHighlighted: true
    },
    {
      id: 3,
      category: 'BUSINESS',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      date: '26 Jan 2025',
      isHighlighted: false
    }
  ];

  return (
    <div className="blogs-section">
      <div className="blogs-header">
        <h2 className="blogs-title">Blogs</h2>
        <p className="blogs-subtitle">
          Stay up to date with the latest trends and insights in technology with our informative blog.<br />
          From industry news to expert tips, we have got you covered.
        </p>
      </div>
      
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className={`blog-card ${blog.isHighlighted ? 'blog-card-highlighted' : ''}`}
          >
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
            <div className="blog-footer">
              <span className="blog-date">{blog.date}</span>
              <a href="#" className="blog-link">
                Read Blog <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
