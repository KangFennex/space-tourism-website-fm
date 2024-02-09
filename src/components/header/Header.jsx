import "../../sass/components/_header.scss";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Menu = ({ menuRef, selectedTab, handleSelectedTab, handleClickMenu}) => {

    const handleClick = (tab) => {
        handleSelectedTab(tab);
        handleClickMenu();
    }

    return (
        <motion.nav
            className="header__menu"
            ref={menuRef}
            variants={springFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Link to="/" onClick={() => handleClick(0)}>
                <span>00</span> HOME
                <div className={`header__menu-underline ${selectedTab === 0 ? "selected" : ""}`}
                ></div>
            </Link>
            <Link to="/destination" onClick={() => handleClick(1)}>
                <span>01</span> DESTINATION
                <div className={`header__menu-underline ${selectedTab === 1 ? "selected" : ""}`}
                ></div>
            </Link>
            <Link to="/crew" onClick={() => handleClick(2)}>
                <span>02</span> CREW
                <div className={`header__menu-underline ${selectedTab === 2 ? "selected" : ""}`}
                ></div>
            </Link>
            <Link to="/technology" onClick={() => handleClick(3)}>
                <span>03</span> TECHNOLOGY
                <div className={`header__menu-underline ${selectedTab === 3 ? "selected" : ""}`}
                ></div>
            </Link>
        </motion.nav>
    );
};

// Animation to have the menu appear and then slow down
const springFromRight = {
    hidden: {
        x: 300,
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            mass: 0.4,
            damping: 8,
        },
    },
    exit: {
        x: 300,
        transition: {
            type: "spring",
            stiffness: 50,
            mass: 0.4,
            damping: 8,
        },
    },
};

const Header = ({ selectedTab, handleSelectedTab }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuRef = useRef();

    const handleClickMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        function handleClickOutside(event) {

            // Check if the click target contains the icon element
            const iconEl = document.querySelector(".header__menu-icon");
            if (iconEl && iconEl.contains(event.target)) {
                return;
            }

            // Make the menu disappear if you click outside of it
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        // Make the menu disappear if you resize the screen
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
            setShowMenu(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [menuRef]);

        

    

    return (
        <div className="header">
            <div className="header__star-icon"><img src={logo} /></div>
            <div className="header__divider"></div>
            {windowWidth < 768 && (
                showMenu ?
                    <img
                        src={closeIcon}
                        alt="Close Icon"
                        onClick={handleClickMenu}
                        className="header__menu-icon"
                    /> :
                    <img
                        src={hamburgerIcon}
                        alt="Hamburger Icon"
                        onClick={handleClickMenu}
                        className="header__menu-icon"
                    />
            )}
            <AnimatePresence>
            {(showMenu && windowWidth < 768) || windowWidth > 768 ? 
                    <Menu
                        handleClickMenu={handleClickMenu} 
                        menuRef={menuRef} 
                        selectedTab={selectedTab} 
                        handleSelectedTab={handleSelectedTab}
                    /> 
                    : null}
            </AnimatePresence>
        </div>
    )
}

export default Header
