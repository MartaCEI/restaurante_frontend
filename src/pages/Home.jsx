import TopPictures from "@/components/TopPictures";
import { usePageInfo } from "@/hooks/usePageInfo";
import { useEffect } from "react";
import HomeCard from "@/components/homeCard";

const Home = () => {
    const { pageInfo, fetchPageInfo, fetchHomeInfo, homeInfo} = usePageInfo();

    useEffect(() => {
        fetchPageInfo("home");
        fetchHomeInfo();
    }, []);

    return (
        <>
            {pageInfo && <TopPictures pageInfo={pageInfo} />}
            <section className="home-flex">
                {
                    homeInfo && homeInfo.map((info, index) => 
                        < HomeCard key={index} {...info} />
                    )
                }


                
            </section>
        </>
    );
}

export default Home;