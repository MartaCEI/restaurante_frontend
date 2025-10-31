import TopPictures from "@/components/TopPictures";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <TopPictures />
            <section className="home-flex">
                <h2>Bienvenidos A NOMBRE</h2>
                <p>Un restaurante magnifico que te dejara con la boca abierta de los apetitoso y delicioso que es todo. No solo ofrecemos comida pero tambien cenas de gruppos, eventos en fechas especiales...</p>
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