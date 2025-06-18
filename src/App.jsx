import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import { useEffect } from "react";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default App;
