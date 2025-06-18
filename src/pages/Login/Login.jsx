import BreadCrumb from "../../components/common/BreadCrumb";

const Login = () => {
  return (
    <article>
      <BreadCrumb
        title={"إنشاء حساب"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/login", label: "إنشاء حساب" },
        ]}
      />

      <section className="container py-8 flex flex-col gap-4">
        <h3 className="text-2xl md:text-3xl font-bold">انشاء حساب</h3>
        <div className="bg-gray-100 p-6 md:p-10 xl:col-span-2">
          <form className="space-y-4 w-full">
            <div className="grid md:grid-cols-2 gap-4">
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
              انشاء حساب
            </button>
          </form>
        </div>
      </section>
    </article>
  );
};

export default Login;
