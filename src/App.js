import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastProvider } from "./utils/providers/ToastProvider";
import { Error, Home, Login, Register } from "./pages";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
