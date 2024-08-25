// import { Outlet } from "react-router-dom";
// import "./App.css";
// // import About from "./pages/About";
// import Footer from "./pages/Footer";
// import Navbar from "./pages/Navbar";

// function App() {
//   return (
//     <div className="flex flex-col h-screen justify-between">
//       <div className="sticky top-0 z-10 bg-white">
//         <Navbar />
//       </div>
//       <div className="mb-auto z-0">
//         {" "}
//         <Outlet />
//       </div>
//       <div>
//         {" "}
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;


import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="flex w-screen flex-col min-h-screen justify-between">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>
      <div className="mb-auto w-full z-0">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
