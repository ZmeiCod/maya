// import Header from "./components/Header/Header";
// import { ThemeProvider } from "./components/ChangeTheme";
// import Footer from "./components/Footer/Footer";
// import Arrow from "./images/arrow.svg";

import Home from "./components/Pages/Home";
import PageNotFound from "./components/Pages/NotFound";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
