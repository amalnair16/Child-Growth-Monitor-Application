import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profiles from "./components/Profiles";
import "./index.css";
import Menu from "./components/Menu";
import Edit from "./components/Edit";
import BMI from "./components/BMI";

export const mainData = createContext();

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function App() {
  const [auth, setAuth] = useLocalStorageState('auth', false);

  return (
    <mainData.Provider value={{ auth, setAuth }}>
    {auth ? (
      <Routes>
        <Route exact path="/" Component={Profiles} />
        <Route  path="/menu" Component={Edit} />
        <Route  path="/bmi" Component={BMI} />

      </Routes>
    ) : (
      <Login />
    )}
  </mainData.Provider>
  );
}

export default App;
