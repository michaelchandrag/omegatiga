import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import EthereonNexus from "./pages/EthereonNexus";
import About from "./pages/About";
import Features from "./pages/Features";
import UseCase from "./pages/UseCase";
import Differentiators from "./pages/Differentiators";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Ethereon Nexus - Home";
        break;
      case "/about":
        title = "Ethereon Nexus - Home";
        break;
      case "/features":
        title = "Ethereon Nexus - Features";
        break;
      case "/usecase":
        title = "Ethereon Nexus - Use Cases";
        break;
      case "/differentiators":
        title = "Ethereon Nexus - Differentiators";
        break;
      default:
        title = "Ethereon Nexus";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<EthereonNexus />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/usecase" element={<UseCase />} />
      <Route path="/differentiators" element={<Differentiators />} />
    </Routes>
  );
}

export default App;
