import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://images.pexels.com/photos/65437/pexels-photo-65437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default Home;
