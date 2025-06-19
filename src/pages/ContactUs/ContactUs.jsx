import { FaFax, FaPhone } from "react-icons/fa";
import BreadCrumb from "../../components/common/BreadCrumb";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import FormContainer from "../../components/common/form/FormContainer";
import FormInput from "../../components/common/form/FormInput";

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

      <section className="container sectionPadding grid xl:grid-cols-3 gap-4">
        <div className="text-center xl:text-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">تواصل معنا</h2>
          <p className=" text-gray-clr3">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسارات أو ملاحظات،
            وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        <div className="xl:col-span-2">
          <FormContainer onSubmit={(e) => e.preventDefault()}>
            <FormInput label={"الاسم الكامل"} />
            <FormInput label={"رقم الهاتف"} />
            <div className="md:col-span-2">
              <FormInput label={"البريد الإلكتروني"} type="email" />
            </div>
            <div className="md:col-span-2">
              <FormInput label={"الموضوع"} />
            </div>
            <div className="md:col-span-2">
              <FormInput label={"اكتب رسالتك"} type="textarea" />
            </div>

            <button className="mainBtn">أرسل رسالتك</button>
          </FormContainer>
        </div>
      </section>

      <section className="container sectionPadding grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-gray-clr p-4 rounded flex items-center gap-2">
          <span className="p-2 bg-white text-3xl text-main-clr">
            <FaPhone />
          </span>
          <div>
            <p className="font-bold mb-2">اتصل بنا</p>
            <p className="text-sm">+91 123 456 7890</p>
          </div>
        </div>
        <div className="bg-gray-clr p-4 rounded flex items-center gap-2">
          <span className="p-2 bg-white text-3xl text-main-clr">
            <FaLocationDot />
          </span>
          <div>
            <p className="font-bold mb-2">العنوان</p>
            <p className="text-sm">مجمع ABC بالعاصمة XYZ من نيويورك</p>
          </div>
        </div>
        <div className="bg-gray-clr p-4 rounded flex items-center gap-2">
          <span className="p-2 bg-white text-3xl text-main-clr">
            <IoMdMail />
          </span>
          <div>
            <p className="font-bold mb-2">البريد الإلكتروني</p>
            <p className="text-sm">support@multikart.com</p>
          </div>
        </div>
        <div className="bg-gray-clr p-4 rounded flex items-center gap-2">
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
