import Banner from "./Banner/Banner";
import KnowMore from "./KnowMore/KnowMore";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Welcome from "./Welcome/Welcome";


const Home = () => {
    return (
        <div className="bg-white">
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
            <Team></Team>
            <KnowMore></KnowMore>
        </div>
    );
};

export default Home;