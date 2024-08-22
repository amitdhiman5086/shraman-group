import { Outlet } from "react-router-dom";
import "./App.css";
// import About from "./pages/About";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="">
        <Navbar />
      </div>
      <div className="mb-auto">
        {" "}
        <Outlet />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
