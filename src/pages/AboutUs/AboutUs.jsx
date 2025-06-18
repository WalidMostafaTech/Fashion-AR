import BreadCrumb from "../../components/common/BreadCrumb";
import bannerImg from "../../assets/images/slider-img.png";
import Testimonials from "./sections/Testimonials";
import TeamSection from "./sections/TeamSection";
import Services from "../../components/Services/Services";

const AboutUs = () => {
  return (
    <article>
      <BreadCrumb
        title={"من نحن"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/about-us", label: "من نحن" },
        ]}
      />

      <section className="container sectionPadding flex flex-col gap-4">
        <img loading="lazy" src={bannerImg} alt="" />
        <h3 className="text-2xl font-semibold">
          من أين ينبع هذا الخطأ الذي يؤدي إلى توجيه اللوم والثناء للمتهمين دون
          وجه حق
        </h3>
        <p>
          من أين ينبع هذا الخطأ الذي يؤدي إلى توجيه اللوم والثناء للمتهمين دون
          وجه حق، من ناحية أخرى، فإننا نندد باستياءٍ صادق ونكره أولئك الذين
          يستسلمون لإغراءات اللحظة، فيعمى بصيرتهم الشغف، فلا يمكنهم التنبؤ بما
          سيترتب على ذلك من ألم ومشقة؛ كما يقع اللوم ذاته على من يتقاعسون عن
          أداء واجبهم بسبب ضعف الإرادة، وهذا ما يعني التهرب من التعب والمعاناة.
          هذه الحالات يمكن تمييزها بسهولة وبوضوح. ففي أوقات الحرية، عندما لا
          يكون هناك ما يقيد قدرتنا على الاختيار، ويكون بإمكاننا فعل ما نشاء،
          تكون كل لذة موضع ترحيب، وكل ألم يجب تجنبه. لكن في بعض الظروف، وبسبب
          الواجبات أو التزامات العمل، قد يحدث كثيرًا أن نضطر إلى رفض بعض اللذات
          وقبول بعض الإزعاجات. ولذلك، فإن الحكيم يتمسك دائمًا بهذا المبدأ في
          اتخاذ قراراته: فهو يرفض بعض اللذات من أجل الحصول على لذات أعظم، أو
          يتحمل بعض الآلام ليتفادى آلامًا أشد.
        </p>
      </section>

      <Testimonials />

      <TeamSection />

      <Services />
    </article>
  );
};

export default AboutUs;
