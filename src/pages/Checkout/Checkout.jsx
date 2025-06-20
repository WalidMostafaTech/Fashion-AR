import BreadCrumb from "../../components/common/BreadCrumb";
import { cartProducts } from "../../data/data";

const Checkout = () => {
  return (
    <article>
      <BreadCrumb
        title={"الدفع"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/checkout", label: "الدفع" },
        ]}
      />

      <section className="container sectionPadding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* قسم العناوين وخيارات التوصيل والدفع */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-clr p-4 shadow rounded">
              <h2 className="font-bold text-lg mb-3">عنوان الشحن</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-gray-clr p-4 shadow rounded">
              <h2 className="font-bold text-lg mb-3">عنوان الفوترة</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                  </div>
                </label>
                <label className="bg-white rounded p-3 flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="shippingAddress" defaultChecked />
                  <div>
                    <h3 className="font-bold text-lg">المنزل الجديد</h3>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                    <p className="text-gray-clr3">
                      العنوان الجديد: شارع 53، بجانب مركز صحي
                    </p>
                    <p className="text-gray-clr3">الهاتف: 5558563599</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-gray-clr p-4 shadow rounded">
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

            <div className="bg-gray-clr p-4 shadow rounded">
              <h2 className="font-bold text-lg mb-3">خيارات الدفع</h2>
              <ul className="grid grid-cols-2 gap-3 text-gray-clr3">
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
            <div className="sticky top-0 space-y-6">
              <div className="bg-gray-clr p-4 shadow rounded">
                <h2 className="font-bold text-lg mb-3">ملخص الطلب</h2>
                <div className="space-y-2">
                  {cartProducts.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          loading="lazy"
                          src={item.image}
                          alt={item.title}
                          className="w-14"
                        />
                        <div>
                          <p>{item.title}</p>
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

              <div className="bg-gray-clr p-4 shadow rounded">
                <h2 className="font-bold text-lg mb-3">ملخص الفاتورة</h2>

                <div className="mb-2">
                  <p className="font-semibold">رمز الخصم:</p>
                  <p className="text-lg">HOLIDAY40#</p>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="ادخل رمز الخصم"
                      className="flex-grow border border-gray-clr2 px-2 py-1 bg-white outline-0"
                    />
                    <button className="mainBtn">تطبيق الرمز</button>
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
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-clr2">
                    <span>الإجمالي</span>
                    <span className="text-main-clr">$30.71</span>
                  </div>
                </div>
                <button className="mainBtn mt-4 w-full">تأكيد الطلب</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Checkout;
