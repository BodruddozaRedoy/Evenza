import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex-1  my-10 ">
          <MainRoutes />
        </div>
        <Footer />
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App;
