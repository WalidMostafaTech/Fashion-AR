import GlobalTitle from "../../components/common/GlobalTitle";
import ProductList from "../../components/Product/ProductList";
import { productsList } from "../../data/data";
import HomeBlog from "./sections/HomeBlog/HomeBlog";
import HomeSlider from "./sections/HomeSlider/HomeSlider";
import InstagramSection from "./sections/InstagramSection/InstagramSection";
import LogoSection from "./sections/LogoSection/LogoSection";
import bannerImg from "../../assets/images/slider-img.png";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <section>
      <HomeSlider />

      <section className="container sectionPadding">
        <GlobalTitle
          title={"أحدث الإصدارات"}
          subtitle={"عرض خاص"}
          description={`هل تبحث عن أحدث صيحات الموضة في الملابس، الأحذية والإكسسوارات؟ مرحبًا بك في قسم "أحدث الإصدارات"، حيث نقدم لك أحدث التصاميم من أشهر العلامات التجارية المفضلة لديك.`}
        />
        <ProductList products={productsList.slice(0, 4)} />
      </section>

      <section>
        <img
          loading="lazy"
          src={bannerImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </section>

      <section className="container sectionPadding">
        <GlobalTitle title={"كاجوال يومي"} subtitle={"منتجات حصرية"} />
        <ProductList products={productsList.slice(0, 4)} />
      </section>

      <Services />

      <HomeBlog />

      <InstagramSection />

      <LogoSection />
    </section>
  );
};

export default Home;
