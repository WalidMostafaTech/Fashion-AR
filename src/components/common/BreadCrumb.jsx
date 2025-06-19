import { Link } from "react-router-dom";

const BreadCrumb = ({ title, links }) => {
  return (
    <div className="bg-gray-clr p-4 flex flex-col items-center">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-2 lg:mb-4">
        {title}
      </h1>
      <ul className="text-sm text-gray-clr3 font-medium flex items-center gap-1">
        {links.map((link, index) => (
          <li key={index} className="flex items-center text-lg">
            {index === 0 ? (
              <Link to={link.url} className="hover:underline">
                {link.label}
              </Link>
            ) : index === links.length - 1 ? (
              <>
                <span className="mx-2">/</span>
                <span >{link.label}</span>
              </>
            ) : (
              <>
                <span className="mx-2">/</span>
                <Link to={link.url} className="text-lg hover:underline">
                  {link.label}
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumb;
