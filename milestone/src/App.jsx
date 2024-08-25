import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import HomePage from "./pages/Homepage";
import InvoicePage from "./pages/InvoicePage";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AboutPage from "./pages/About";
import PublicNavbar from "../Templates/Navbar/PublicNavbar";
import Footer from "./components/Admin/Footer";
import SignInForm from "./pages/SignInForm";
import PrivateNavbar from "../Templates/Navbar/PrivateNavbar";
import CreateInventory from "./pages/CreateInventry";
import Homepage from "../Templates/Home/Homepage";
import { getUserFromStorage } from "./utils/getUserFromStorage";
import { useSelector } from "react-redux";
import AuthRoute from "./components/Auth/AuthRoute";

const App = () => {
  const user = useSelector((state) => state?.auth?.user);

  return (
    <BrowserRouter>
      {/* <PublicNavbar /> */}
      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/register" element={<SignupForm />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/invoice"
          element={
            <AuthRoute>
              <InvoicePage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AuthRoute>
              <AdminDashboard />
            </AuthRoute>
          }
        ></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route
          path="/create-invoice"
          element={
            <AuthRoute>
              <CreateInventory />
            </AuthRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
