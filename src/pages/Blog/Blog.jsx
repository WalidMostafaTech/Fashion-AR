import { useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import { blogList } from "../../data/data";
import Pagination from "../../components/common/Pagination";
import BlogList from "../../components/blog/BlogList";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <article>
      <BreadCrumb
        title={"المدونه"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/blog", label: "المدونه" },
        ]}
      />

      <section className="container sectionPadding">
        <BlogList blogs={blogList} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </article>
  );
};

export default Blog;
