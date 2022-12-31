const BlogList = ({blogs,title}) => {
  return (
    <div className="blog-list">
        {/* .map() is similar to for loops in vue as we also need a key from each blog in blogs */}
      {blogs.map((blog) => (
        // we need a key property similar to using v-for in vue
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
