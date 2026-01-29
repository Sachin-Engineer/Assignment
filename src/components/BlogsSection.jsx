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
    <section className="py-12 sm:py-16 md:py-20 max-w-[1440px] mx-auto">
      <div className="text-center mb-12 md:mb-15">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Blogs</h2>
        <p className="text-justify text-sm md:text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
          Stay up to date with the latest trends and insights in technology with our informative blog.<br />
          From industry news to expert tips, we have got you covered.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        {blogs.map((blog, index) => (
          <div 
            key={blog.id} 
            className={`
              rounded-xl p-6 md:p-8 flex flex-col justify-between min-h-[320px] relative
              transition-all duration-300
              ${blog.isHighlighted 
                ? 'text-[#7ca2ff] border-none scale-100 lg:scale-105 z-10' 
                : 'bg-white border border-gray-200 hover:-translate-y-1 hover:shadow-lg'
              }
              ${!blog.isHighlighted && (index === 0 || index === 2) ? 'blog-card-lines' : ''}
            `}
            style={blog.isHighlighted ? { background: 'radial-gradient(circle at top, #064A8A, #003161)' } : {}}
          >
            <div className="flex-1">
              <span className={`inline-block text-xs font-semibold tracking-wider uppercase mb-4 ${blog.isHighlighted ? 'text-white' : 'text-gray-500'}`}>
                {blog.category}
              </span>
              <h3 className={`text-xl md:text-2xl font-semibold mb-3 leading-tight ${blog.isHighlighted ? 'text-[#7ca2ff]' : 'text-gray-900'}`}>
                {blog.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${blog.isHighlighted ? 'text-white' : 'text-gray-500'}`}>
                {blog.description}
              </p>
            </div>
            <div className={`flex justify-between items-center pt-5 border-t ${blog.isHighlighted ? 'border-white/20' : 'border-gray-200/50'}`}>
              <span className={`text-sm ${blog.isHighlighted ? 'text-white' : 'text-gray-500'}`}>{blog.date}</span>
              <a href="#" className={`blog-link text-sm font-semibold flex items-center gap-2 no-underline transition-all duration-300 ${blog.isHighlighted ? 'text-white' : 'text-blue-700'}`}>
                Read Blog <span className="arrow text-lg transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
