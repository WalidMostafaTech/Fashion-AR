import { FaFax, FaPhone } from "react-icons/fa";
import BreadCrumb from "../../components/common/BreadCrumb";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <article>
      <BreadCrumb
        title={"تواصل معنا"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/contact-us", label: "تواصل معنا" },
        ]}
      />

      <section className="container py-8 grid xl:grid-cols-3 gap-4">
        <div className="text-center xl:text-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">تواصل معنا</h2>
          <p className=" text-gray-600">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسارات أو ملاحظات،
            وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        <div className="bg-gray-100 p-6 md:p-10 xl:col-span-2">
          <form className="space-y-4 w-full">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full p-2 bg-white outline-0"
                />
              </div>
              <div>
                <label className="block mb-1">رقم الهاتف</label>
                <input
                  type="text"
                  placeholder="أدخل رقم هاتفك"
                  className="w-full p-2 bg-white outline-0"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full p-2 bg-white outline-0"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">الموضوع</label>
                <input
                  type="text"
                  placeholder="الموضوع"
                  className="w-full p-2 bg-white outline-0"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">اكتب رسالتك</label>
                <textarea
                  rows="5"
                  placeholder="اكتب رسالتك هنا"
                  className="w-full p-2 bg-white outline-0 max-h-56 min-h-36"
                ></textarea>
              </div>
            </div>

            <button className="bg-main-clr text-white text-lg px-6 py-2 hover:bg-white hover:text-main-clr border border-main-clr transition cursor-pointer">
              أرسل رسالتك
            </button>
          </form>
        </div>
      </section>

      <section className="container py-8 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-4 rounded flex items-center gap-2">
          <span className="p-2 bg-white text-3xl text-main-clr">
            <FaPhone />
          </span>
          <div>
            <p className="font-bold mb-2">اتصل بنا</p>
            <p className="text-sm">+91 123 456 7890</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded flex items-center gap-2">
          <span className="p-2 bg-white text-3xl text-main-clr">
            <FaLocationDot />
          </span>
          <div>
            <p className="font-bold mb-2">العنوان</p>
            <p className="text-sm">مجمع ABC بالعاصمة XYZ من نيويورك</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded flex items-center gap-2">
          <span className="p-2 bg-white text-3xl text-main-clr">
            <IoMdMail />
          </span>
          <div>
            <p className="font-bold mb-2">البريد الإلكتروني</p>
            <p className="text-sm">support@multikart.com</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded flex items-center gap-2">
          <span className="p-2 bg-white text-3xl text-main-clr">
            <FaFax />
          </span>
          <div>
            <p className="font-bold mb-2">فاكس</p>
            <p className="text-sm">support@multikart.com</p>
          </div>
        </div>
      </section>

      <div className="w-full h-96 rounded overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
          allowFullScreen=""
          loading="lazy"
          title="خريطة الموقع"
        ></iframe>
      </div>
    </article>
  );
};

export default ContactUs;
