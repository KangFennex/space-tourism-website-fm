import './sass/utils/_index.scss';
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Header from './components/header/Header';


function App() {
  const storedTab = localStorage.getItem('selectedTab');
  const [selectedTab, setSelectedTab] = useState(storedTab ? parseInt(storedTab) : 0);
  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);

    // Store the selectedTab value in localStorage
    localStorage.setItem('selectedTab', tab.toString());
  }

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
