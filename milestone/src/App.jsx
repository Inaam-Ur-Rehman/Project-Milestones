import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import SignInForm from "./pages/SigninForm";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignupForm />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
