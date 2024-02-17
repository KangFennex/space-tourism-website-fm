import './sass/utils/_index.scss';
import { useCallback, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Header from './components/header/Header';


function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab !== null) {
      setSelectedTab(parseInt(storedTab));
    }
  }, []); // Run once on component mount
  
  const handleSelectedTab = useCallback((tab) => {
    setSelectedTab(tab);
    localStorage.setItem("selectedTab", tab);
  }, []);

  return (
    <BrowserRouter>
      <Header selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} />
      <LocationProvider>
        <RoutesWithAnimation handleSelectedTab={handleSelectedTab} />
      </LocationProvider>
    </BrowserRouter>
  )
}

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>
}

function RoutesWithAnimation({ handleSelectedTab }) {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home handleSelectedTab={handleSelectedTab} />} />
      <Route path="/destination" element={<Destination handleSelectedTab={handleSelectedTab} />} />
      <Route path="/crew" element={<Crew handleSelectedTab={handleSelectedTab} />} />
      <Route path="/technology" element={<Technology handleSelectedTab={handleSelectedTab} />} />
    </Routes>
  )
}

export default App
