import { Link } from "react-router-dom";
import "../../sass/pages/_index.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.5,
            //delay: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const Home = ({ handleSelectedTab }) => {
    return (
        <div className="home">
            <motion.div
                variants={variants}
                initial="initial"
                animate="final"
                exit="exit"
                className="home__hero">
                <div className="home__hero__header">
                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home__hero__navigation">
                    <Link
                        to="/destination"
                        onClick={() => handleSelectedTab(1)}
                    >
                        <h1>EXPLORE</h1>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Home
