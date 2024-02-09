import './sass/utils/_index.scss';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Header from './components/header/Header';


function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = (tab) => { setSelectedTab(tab) }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header
              selectedTab={selectedTab}
              handleSelectedTab={handleSelectedTab} />
            <Home
              handleSelectedTab={handleSelectedTab}
            />
          </>
        } />
        <Route path="/destination" element={
          <>
            <Header
              selectedTab={selectedTab}
              handleSelectedTab={handleSelectedTab}
            />
            <Destination />
          </>
        } />
        <Route path="/crew" element={
          <>
            <Header
              selectedTab={selectedTab}
              handleSelectedTab={handleSelectedTab}
            />
            <Crew />
          </>
        } />
        <Route path="/technology" element={
          <>
            <Header
              selectedTab={selectedTab}
              handleSelectedTab={handleSelectedTab}
            />
            <Technology />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
