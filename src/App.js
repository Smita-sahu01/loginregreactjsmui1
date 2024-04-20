import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from './components/pages/Home';
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import Dashboard from "./components/pages/Dashboard";
import { useSelector } from "react-redux";
import ChatBot from "./components/Chatbot";

function App() {
 // Correctly access the access_token without destructuring
 const accessToken = useSelector(state => state.auth ? state.auth.access_token : null);

 return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="loginreg" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={accessToken ? <Dashboard /> : <Navigate to="/loginreg" />} />
          <Route path="/chatbot" element={accessToken ? <ChatBot /> : <Navigate to="/loginreg" />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
 );
}

export default App;