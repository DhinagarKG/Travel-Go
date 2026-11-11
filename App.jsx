
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import "./App.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
