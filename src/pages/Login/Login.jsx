import { Link } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import FormContainer from "../../components/common/form/FormContainer";
import FormInput from "../../components/common/form/FormInput";

const Login = () => {
  return (
    <article>
      <BreadCrumb
        title={"تسجيل دخول"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/register", label: "تسجيل دخول" },
        ]}
      />

      <section className="container sectionPadding grid xl:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">تسجيل دخول</h3>
          <FormContainer onSubmit={(e) => e.preventDefault()}>
            <div className="xl:col-span-2">
              <FormInput label={"البريد الإلكتروني"} type={"email"} />
            </div>
            <div className="xl:col-span-2">
              <FormInput label={"كلمه المرور"} type={"password"} />
            </div>

            <button className="mainBtn">تسجيل دخول</button>
          </FormContainer>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">إنشاء حساب</h3>
          <div className="bg-gray-clr p-4 md:p-10 xl:col-span-2 space-y-4 border border-gray-clr2">
            <h3 className="text-xl font-bold">إنشاء حساب</h3>
            <p>
              سجل للحصول على حساب مجاني في متجرنا. التسجيل سريع وسهل، ويسمح لك
              بالطلب من المتجر. للبدء، اضغط على "إنشاء حساب".
            </p>
            <Link to={"/register"} className="mainBtn">
              انشاء حساب
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Login;
