import BreadCrumb from "../../components/common/BreadCrumb";

const Register = () => {
  return (
    <article>
      <BreadCrumb
        title={"تسجيل دخول"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/register", label: "تسجيل دخول" },
        ]}
      />

      <section className="container py-8 grid lg:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">تسجيل دخول</h3>
          <div className="bg-gray-100 p-6 md:p-10 xl:col-span-2">
            <form className="space-y-4 w-full">
              <div className="grid gap-4">
                <div>
                  <label className="block mb-1">الاسم الأول</label>
                  <input
                    type="text"
                    placeholder="الاسم الأول"
                    className="w-full p-2 bg-white outline-0"
                  />
                </div>
                <div>
                  <label className="block mb-1">اسم العائله</label>
                  <input
                    type="text"
                    placeholder="اسم العائله"
                    className="w-full p-2 bg-white outline-0"
                  />
                </div>
                <div>
                  <label className="block mb-1">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full p-2 bg-white outline-0"
                  />
                </div>
                <div>
                  <label className="block mb-1">كلمه المرور</label>
                  <input
                    type="password"
                    placeholder="كلمه المرور"
                    className="w-full p-2 bg-white outline-0"
                  />
                </div>
              </div>

              <button className="bg-main-clr text-white text-lg px-6 py-2 hover:bg-white hover:text-main-clr border border-main-clr transition cursor-pointer">
                تسجيل دخول
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">إنشاء حساب</h3>
          <div className="bg-gray-100 p-6 md:p-10 xl:col-span-2 space-y-2">
            <h3 className="text-xl font-bold">إنشاء حساب</h3>
            <p>
              سجل للحصول على حساب مجاني في متجرنا. التسجيل سريع وسهل، ويسمح لك
              بالطلب من المتجر. للبدء، اضغط على "إنشاء حساب".
            </p>

            <button className="bg-main-clr text-white text-lg px-6 py-2 hover:bg-white hover:text-main-clr border border-main-clr transition cursor-pointer">
              إنشاء حساب
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Register;
