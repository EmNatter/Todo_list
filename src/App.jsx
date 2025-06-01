import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import TodoPage from "./Pages/TodoPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const navlinks = [
    { name: "Todo-list", url: "/" },
    { name: "Om", url: "/about" },
  ];

  return (
    <div className="app-container">
      <Navbar links={navlinks} />
      <main>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
