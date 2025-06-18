import BlogItem from "./BlogItem";

const BlogList = ({blogs}) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
