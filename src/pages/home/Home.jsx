import { Link } from "react-router-dom";
import "../../sass/pages/_index.scss";

const Home = ({ handleSelectedTab }) => {
    return (
        <div className="home">
            <div className="home__hero">
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
            </div>
        </div>
    )
}

export default Home
