import { Routes, Route } from "react-router-dom";
import Footer from "../footer/Footer";
import About from "../about/About";
import Header from "../header/Header";
import Product from "../product/Product";
import Blogs from "../blogs/Blogs";
import Contact from "../contact/Contact";
import Home from "../home/Home";
const RouteComponent = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home/>
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/product"
        element={
          <>
            <Header />
            <Product />
            <Footer/>
          </>
        }
      />
      <Route
        path="/blog"
        element={
          <>
            <Header />
            <Blogs />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default RouteComponent;
