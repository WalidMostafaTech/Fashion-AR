import productImg1 from "../assets/images/product1.png";
import productImg2 from "../assets/images/product2.png";
import productImg3 from "../assets/images/product3.png";
import blogImg from "../assets/images/slider-img.png";

export const navLinks = [
  {
    name: "الرئيسية",
    link: "/",
  },
  {
    name: "المتجر",
    link: "/categories",
  },
  {
    name: "المدونه",
    link: "/blog",
  },
  {
    name: "معلومات عنا",
    link: "/about-us",
  },
  {
    name: "اتصل بنا",
    link: "/contact-us",
  },
];

export const productsList = Array(5)
  .fill([
    {
      id: 1,
      title: "جلامور جيز",
      description: "قمصان Boyfriend",
      image: productImg1,
      rate: 4.5,
      offer: 50,
      price: 300,
    },
    {
      id: 2,
      title: "فوج فيستا",
      description: "بلوزة قصيرة عصرية",
      image: productImg2,
      rate: 4,
      offer: 30,
      price: 200,
    },
    {
      id: 3,
      title: "أوربان شيك",
      description: "جاكيت كلاسيكي",
      image: productImg3,
      rate: 3.5,
      offer: null,
      price: 300,
    },
  ])
  .flat()
  .map((item, index) => ({
    ...item,
    id: index + 1,
  }));

export const cartProducts = [
  {
    id: 1,
    title: "كوتور إيدج",
    image: productImg1,
    price: 100,
    quantity: 2,
  },
  {
    id: 2,
    title: "سترة كلاسيكية",
    image: productImg2,
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    title: "أوربان شيك",
    image: productImg3,
    price: 300,
    quantity: 3,
  },
];

export const blogList = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `ارتقِ بمساحتك: فن التأثيث الأنيق!`,
  date: `2023-05-01`,
  user: "المدير",
  image: blogImg,
}));
