import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
