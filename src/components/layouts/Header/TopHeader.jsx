import { FaHeart, FaPhone, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="bg-stone-800 text-center text-white">
      <div className="container hidden md:flex items-center justify-between h-12">
        <div className="flex items-center gap-6">
          <h3>مرحبًا بكم في متجرنا مالتيكارت</h3>
          <p className="flex items-center gap-2">
            <FaPhone /> اتصل بنا: 123 - 456 - 7890
          </p>
        </div>

        <div className="flex items-center gap-6 h-full">
          <FaHeart className="text-xl hover:text-main-clr duration-300 cursor-pointer" />

          <div className="flex items-center gap-2 h-full relative group cursor-pointer">
            <FaUser className="text-xl group-hover:text-main-clr duration-300" />
            حسابى
            <div
              className="absolute z-30 top-10 end-0 w-44 text-text-clr bg-bg-clr shadow-md rounded-md
            opacity-0 translate-y-2 pointer-events-none
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
            transition-all duration-300 ease-in-out"
            >
              <Link
                to="/login"
                className="block text-lg p-2 hover:text-main-clr duration-300"
              >
                تسجيل الدخول
              </Link>
              <Link
                to="/register"
                className="block text-lg p-2 hover:text-main-clr duration-300"
              >
                انشاء حساب
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
