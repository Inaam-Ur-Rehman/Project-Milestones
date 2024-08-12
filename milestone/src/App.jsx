import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import SignInForm from "./pages/SigninForm";
import HomePage from "./pages/Homepage";
import InvoicePage from "./pages/InvoicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignupForm />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/invoice" element={<InvoicePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
