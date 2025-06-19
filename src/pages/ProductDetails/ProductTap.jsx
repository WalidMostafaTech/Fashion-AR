const ProductTap = () => {
  return (
    <section className="container sectionPadding">
      <div className="border border-gray-clr2">
        <div className="bg-gray-clr p-4 flex items-center gap-2">
          <h3 className="text-lg font-medium bg-main-clr text-white p-2 cursor-pointer">
            الوصف
          </h3>
        </div>

        <div className="p-4 space-y-4">
          <p className="text-gray-clr3">
            ترتدي العارضة بلوزة بيضاء من مجموعة المصمم لدينا، انظر الصورة
            لمعاينة الشكل الفعلي للبلوزة. يوجد عليها نص مكتوب بخط مائل باللون
            الأسود مما يمنح مظهرًا أنيقًا على اللون الأبيض.
          </p>
          <div>
            <h3 className="text-lg font-bold">الخامة:</h3>
            <p className="text-gray-clr3">
              الحرير الصناعي يُصنع من ألياف صناعية مثل الرايون. خفيف الوزن وناعم
              على البشرة، مما يجعله مناسبًا للصيف.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">المقاس والملاءمة:</h3>
            <p className="text-gray-clr3">العارضة (بطول 5'8") ترتدي مقاس S</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">الخامة والعناية:</h3>
            <p className="text-gray-clr3">قماش القميص: قطن نقي</p>
            <p className="text-gray-clr3">قماش البنطال: قطن نقي</p>
            <p className="text-gray-clr3">غسل يدوي</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTap;
