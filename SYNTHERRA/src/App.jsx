import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Syntherra from "./pages/Syntherra";
import SyntherraDemo from "./pages/SyntherraDemo";

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
        title = "Syntherra";
        metaDescription = "Main page description";
        break;
      case "/syntherra-demo-version":
        title = "Syntherra Demo Version";
        metaDescription = "Description of the Syntherra demo version.";
        break;
      default:
        title = "Syntherra App";
        metaDescription = "Default description.";
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
      <Route path="/" element={<Syntherra />} />
      <Route path="/syntherra-demo-version" element={<SyntherraDemo />} />
    </Routes>
  );
}
export default App;
