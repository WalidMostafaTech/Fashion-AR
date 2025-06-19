import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <Link to={"/blog-details"} className="space-y-2 group">
      <div className="relative h-48 lg:h-64 overflow-hidden">
        <img
          loading="lazy"
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
      </div>

      <h3 className="text-lg lg:text-2xl font-medium line-clamp-1">
        {blog.title}
      </h3>

      <div className="flex items-center gap-2">
        <p className="text-gray-clr3">{blog.date}</p>
        <p className="text-gray-clr3 ps-2 border-s-2 border-gray-clr2">
          {blog.user}
        </p>
      </div>

      <p className="text-main-clr flex items-center gap-1 font-medium">
        أقرا المزيد
        <GoArrowUpRight />
      </p>
    </Link>
  );
};

export default BlogItem;
