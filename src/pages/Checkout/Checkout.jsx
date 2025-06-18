import BreadCrumb from "../../components/common/BreadCrumb";
import ProductImg1 from "../../assets/images/product1.png";
import ProductImg2 from "../../assets/images/product2.png";
import ProductImg3 from "../../assets/images/product3.png";

const Checkout = () => {
  const cartItems = [
    {
      id: 1,
      name: "مقدد برتقالي",
      price: 15.0,
      quantity: 1,
      image: ProductImg1,
      discount: null,
    },
    {
      id: 2,
      name: "ذرت كارجرتان",
      price: 9.96,
      quantity: 3,
      image: ProductImg2,
      originalPrice: 12.0,
      discount: "وفر: 2.04$",
    },
    {
      id: 3,
      name: "مقدد رياضي (ابي)",
      price: 20.0,
      quantity: 5,
      image: ProductImg3,
      discount: null,
    },
  ];
  return (
    <article>
      <BreadCrumb
        title={"الدفع"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/checkout", label: "الدفع" },
        ]}
      />

      <section className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* قسم العناوين وخيارات التوصيل والدفع */}
          <div className="lg:col-span-2 space-y-6">
            {/* عنوان الشحن */}
            <div className="bg-gray-100 p-4 shadow rounded">
              <h2 className="font-bold text-lg mb-3">عنوان الشحن</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                  </div>
                </label>
              </div>
            </div>

            {/* عنوان الفوترة */}
            <div className="bg-gray-100 p-4 shadow rounded">
              <h2 className="font-bold text-lg mb-3">عنوان الفوترة</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                    <p className="text-gray-600">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-600">الهاتف: 5558563599</p>
                  </div>
                </label>
              </div>
            </div>

            {/* خيارات التوصيل */}
            <div className="bg-gray-100 p-4 shadow rounded">
              <h2 className="font-bold text-lg mb-3">خيارات التوصيل</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="delivery" defaultChecked />
                  توصيل عادي (خلال 5 - 7 أيام)
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="delivery" defaultChecked />
                  توصيل سريع (خلال 2 - 3 أيام)
                </label>
              </div>
            </div>

            {/* خيارات الدفع */}
            <div className="bg-gray-100 p-4 shadow rounded">
              <h2 className="font-bold mb-3">خيارات الدفع</h2>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li>SSLCommerz</li>
                <li>Flutterwave</li>
                <li>Paystack</li>
                <li>Mollie</li>
                <li>CCAVENUE</li>
                <li>PhonePe</li>
                <li>InstaMojo</li>
              </ul>
            </div>
          </div>

          {/* قسم ملخص الطلب */}
          <div className="lg:col-span-1">
            <div className="sticky top-0 space-y-4">
              <div className="bg-gray-100 p-4 shadow rounded">
                <h2 className="font-bold text-lg mb-3">ملخص الطلب</h2>
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14"
                        />
                        <div>
                          <p>{item.name}</p>
                          <p className="flex gap-2">
                            <span>{item.price} $</span>
                            <span>X</span>
                            <span>{item.quantity}</span>
                          </p>
                        </div>
                      </div>
                      <span className="font-semibold text-main-clr text-lg">
                        ${item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 p-4 shadow rounded">
                <h2 className="font-bold text-lg mb-3">ملخص الفاتورة</h2>

                <div className="mb-2">
                  <p className="font-semibold">رمز الخصم:</p>
                  <p>HOLIDAY40#</p>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="ادخل رمز الخصم"
                      className="flex-grow border border-gray-200 px-2 py-1 bg-white outline-0"
                    />
                    <button className="bg-main-clr text-white text-lg px-6 py-2 hover:bg-white hover:text-main-clr border border-main-clr transition cursor-pointer">
                      تطبيق الرمز
                    </button>
                  </div>
                </div>

                <div className="space-y-2 mt-3">
                  <div className="flex justify-between">
                    <span>الإجمالي الفرعي</span>
                    <span>$29.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الخصم</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الضريبة</span>
                    <span>$1.46</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الشحن</span>
                    <span>$5.66</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-300">
                    <span>الإجمالي</span>
                    <span className="text-main-clr">$30.71</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-main-clr text-white text-lg px-6 py-2 hover:bg-white hover:text-main-clr border border-main-clr transition cursor-pointer">
                  تأكيد الطلب
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Checkout;
