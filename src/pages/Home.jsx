import TopPictures from "@/components/TopPictures";
import { Link } from "react-router-dom";
import { usePageInfo } from "@/hooks/usePageInfo";
import { useEffect } from "react";

const Home = () => {
        const { pageInfo, fetchPageInfo, } = usePageInfo();

        useEffect(() => {
            fetchPageInfo("home");
        }, []);

    return (
        <>
            {pageInfo && <TopPictures pageInfo={pageInfo} />}
            <section className="home-flex">
                <div className="home-grid">
                    <div className="home-containers">
                        <img src="https://picsum.photos/500/700" alt="" />
                    </div>
                    <div className="home-containers">
                        <h2 className="home-h2">Nuestro Menú</h2>
                        <Link to="/menu" className="home-button">Menú</Link>
                    </div>
                    <div className="home-containers">
                        <h2 className="home-h2">Para llevar</h2>
                        <Link to="/takeout" className="home-button">Takeout</Link>
                    </div>
                    <div className="home-containers">
                        <img src="https://picsum.photos/500/700" alt="" />
                    </div>
                    <div className="home-containers">
                        <img src="https://picsum.photos/500/700" alt="" />
                    </div>
                    <div className="home-containers">
                        <h2 className="home-h2">eventos</h2>
                        <Link to="/events" className="home-button">eventos</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;