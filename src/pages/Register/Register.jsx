import BreadCrumb from "../../components/common/BreadCrumb";
import FormContainer from "../../components/common/form/FormContainer";
import FormInput from "../../components/common/form/FormInput";
import MainBtn from "../../components/common/MainBtn";

const Register = () => {
  return (
    <article>
      <BreadCrumb
        title={"إنشاء حساب"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/login", label: "إنشاء حساب" },
        ]}
      />

      <section className="container sectionPadding">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">انشاء حساب</h3>
        <div className="xl:col-span-2">
          <FormContainer>
            <FormInput label={"الاسم الأول"} />
            <FormInput label={"اسم العائلة"} />
            <FormInput label={"البريد الإلكتروني"} type={"email"} />
            <FormInput label={"كلمه المرور"} type={"password"} />

            <MainBtn text={"انشاء حساب"} />
          </FormContainer>
        </div>
      </section>
    </article>
  );
};

export default Register;
