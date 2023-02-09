import Home from "./components/home";
import About from "./components/about";
import Donate from "./components/donation";
import Service from "./components/services";
import Organization from "./components/organization";
import Admin from "./components/admin";
import Login from "./components/LoginWithEandP/Login.jsx";
import Register from "./components/LoginWithEandP/register.jsx";
import Reset from "./components/LoginWithEandP/reset.jsx";
import Dashboard from "./components/LoginWithEandP/dashboard.jsx";
import { Routes, Route } from "react-router-dom";
import { SignInUp } from "./components/signpage.jsx";
import { AuthContextProvider } from "./components/context/authcontext";
import "./App.css";
import alanBtn from '@alan-ai/alan-sdk-web';

import { useEffect, useRef } from 'react';
function App() {
  const voicebutton=useRef(null);
    useEffect(()=>{
        if(!voicebutton.current){
            voicebutton.current=alanBtn({
                key:"74a945eb3c0697fe38675ef16d0af5bd2e956eca572e1d8b807a3e2338fdd0dc/stage",
                onCommand:(commandData)=>{
                    if(commandData.command==="openDonateForm"){
                        window.open("http://localhost:3000/donate", "_blank");

                    }

                },
            });
        }
    }, []);
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/donate" index element={<Donate />} />
          <Route path="/service" index element={<Service />} />
          <Route path="/organization" index element={<Organization />} />
          <Route path="/admin" index element={<Admin />} />
          <Route path="/signinup" index element={<SignInUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
