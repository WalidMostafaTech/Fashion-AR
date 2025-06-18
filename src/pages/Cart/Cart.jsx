import BreadCrumb from "../../components/common/BreadCrumb";
import { Link } from "react-router-dom";
import { cartProducts } from "../../data/data";

const Cart = () => {
  const total = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <article>
      <BreadCrumb
        title={"سلة التسوق"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/cart", label: "سلة التسوق" },
        ]}
      />

      <section className="container sectionPadding">
        <div className="overflow-x-auto mb-4">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-sm text-gray-700">
                <th className="p-3">الصورة</th>
                <th className="p-3">اسم المنتج</th>
                <th className="p-3">السعر</th>
                <th className="p-3">الكمية</th>
                <th className="p-3">الإجمالي</th>
                <th className="p-3">الإجراء</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 text-center"
                >
                  <td className="p-3">
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 mx-auto"
                    />
                  </td>
                  <td className="p-3 font-semibold">{item.title}</td>
                  <td className="p-3 text-main-clr">
                    {item.originalPrice && (
                      <div className="text-gray-400 line-through text-sm">
                        ${item.originalPrice.toFixed(2)}
                      </div>
                    )}
                    <div>${item.price.toFixed(2)}</div>
                    {item.discount && (
                      <div className="text-xs text-main-clr">
                        {item.discount}
                      </div>
                    )}
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center items-center gap-2 border border-gray-200 w-fit mx-auto text-xl">
                      <button className="px-3 py-1 border border-gray-200 cursor-pointer">
                        -
                      </button>
                      <span className="w-8">{item.quantity}</span>
                      <button className="px-3 py-1 border border-gray-200 cursor-pointer">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3 font-bold text-main-clr">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-3">
                    <button className="font-bold border px-3 py-1 text-xl text-gray-500 cursor-pointer">
                      ×
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="p-3 font-bold">الإجمالي:</td>
                <td className="p-3 font-bold text-main-clr">
                  ${total.toFixed(2)}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Link to={"/checkout"} className="mainBtn block w-fit">
          اتمام الشراء
        </Link>
      </section>
    </article>
  );
};

export default Cart;
