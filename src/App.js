import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { BRAND } from "./config/brand";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import WhatsAppFloat from "./components/layouts/WhatsAppFloat";

import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import StudioSection from "./components/sections/StudioSection";
import Testimonials from "./components/sections/Testimonials";
import VisitSection from "./components/sections/VisitSection";

import AdminApp from "./admin/AdminApp";

import "./App.css";

function App() {

  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ================= SEO =================
  useEffect(() => {

    document.title = BRAND.name;

    const setMeta = (selector, attr, value) => {

      let tag = document.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");

        tag.setAttribute(
          selector.includes("property")
            ? "property"
            : "name",
          attr
        );

        document.head.appendChild(tag);
      }

      tag.setAttribute("content", value);
    };

    setMeta(
      "meta[name='description']",
      "description",
      BRAND.seo.description
    );

    setMeta(
      "meta[property='og:title']",
      "og:title",
      BRAND.seo.title
    );

    setMeta(
      "meta[property='og:description']",
      "og:description",
      BRAND.seo.description
    );

    setMeta(
      "meta[property='og:url']",
      "og:url",
      window.location.origin
    );

    setMeta(
      "meta[property='og:image']",
      "og:image",
      `${window.location.origin}${BRAND.heroImage}`
    );

    let favicon =
      document.querySelector("link[rel='icon']")
      || document.createElement("link");

    favicon.rel = "icon";
    favicon.href = BRAND.seo.favicon;

    document.head.appendChild(favicon);

  }, []);

  // ================= CATEGORY =================

  const handleCategorySelect = (category) => {

    setSearchQuery("");
    setActiveCategory(category);

    scrollToProducts();

  };

  // ================= SEARCH =================

  const handleSearch = (query) => {

    setActiveCategory(null);
    setSearchQuery(query);

    scrollToProducts();

  };

  const scrollToProducts = () => {

    setTimeout(() => {

      document
        .getElementById("products")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }, 150);

  };

  // ================= WEBSITE UI =================

  const Website = () => (

    <>
      <Navbar
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />

      <Hero />

      <Products
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />

      <StudioSection />
      <Testimonials />
      <VisitSection />

      <Footer />
      <WhatsAppFloat />
    </>

  );

  // ================= ROUTES =================

  return (

    <Routes>

      {/* Website */}
      <Route path="/" element={<Website />} />

      {/* Admin */}
      <Route path="/admin/*" element={<AdminApp />} />

    </Routes>

  );

}

export default App;