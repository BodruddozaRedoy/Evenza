import { useContext, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const loginPage = location.pathname.includes("/login");
  const registerPage = location.pathname.includes("/register");
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {loginPage | registerPage ? "" : <Navbar />}
      <div className="flex-1  my-5 ">
        <MainRoutes />
      </div>
      {loginPage | registerPage ? "" : <Footer />}
      <Toaster />
    </div>
  );
}

export default App;
