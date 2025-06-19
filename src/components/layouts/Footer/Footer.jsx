import { IoLocationOutline, IoMail } from "react-icons/io5";
import logoImg from "../../../assets/images/header-logo.svg";
import { FaFacebookF, FaPhone, FaPinterestP, FaTwitter } from "react-icons/fa";
import { navLinks } from "../../../data/data";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white flex-1">
      <div className="container sectionPadding grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <img
            loading="lazy"
            src={logoImg}
            alt="logo"
            className="w-34 brightness-0 invert-100"
          />
          <p className="text-lg">
            اكتشف أحدث الاتجاهات واستمتع بتجربة تسوق سلسة مع مجموعاتنا الحصرية.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-lg hover:text-gray-clr3 duration-300">
              <IoLocationOutline />
              <p>متجر مالتيكارت التجريبي، الهند 659-345</p>
            </li>
            <li className="flex items-center gap-2 text-lg hover:text-gray-clr3 duration-300">
              <FaPhone />
              <p>اتصل بنا: 123-456-7898</p>
            </li>
            <li className="flex items-center gap-2 text-lg hover:text-gray-clr3 duration-300">
              <IoMail />
              <p>البريد الإلكتروني: Support@Multikart.com</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4 xl:text-center">
          <h2 className="text-2xl">روابط سريعة</h2>

          <ul className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="hover:text-gray-clr3 duration-300 block"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="space-y-4 ">
          <h2 className="text-2xl">تابعنا</h2>
          <p>لا تفوت أي شيء من المتجر عبر الاشتراك في نشرتنا البريدية.</p>

          <form
            className="flex flex-wrap gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="ادخل البريد الالكتروني"
              className="bg-white border-none text-black px-2 py-2 outline-none"
            />
            <button className="mainBtn">اشتراك</button>
          </form>

          <ul className="flex items-center gap-4">
            <li className="bg-stone-600 text-2xl p-2 cursor-pointer hover:text-main-clr duration-300">
              <FaFacebookF />
            </li>
            <li className="bg-stone-600 text-2xl p-2 cursor-pointer hover:text-main-clr duration-300">
              <FaTwitter />
            </li>
            <li className="bg-stone-600 text-2xl p-2 cursor-pointer hover:text-main-clr duration-300">
              <AiFillInstagram />
            </li>
            <li className="bg-stone-600 text-2xl p-2 cursor-pointer hover:text-main-clr duration-300">
              <FaPinterestP />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
