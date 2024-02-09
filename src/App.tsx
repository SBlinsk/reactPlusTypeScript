import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { AboutProduct } from "./pages/ProductPage";
import { Navigation } from "./components/NAV/Nav";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutProduct />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
