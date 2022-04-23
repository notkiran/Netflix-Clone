import { useEffect, useState } from "react";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "?genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWZkM2UzMGE3OTBhZjc2YjljZDc5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDQ2MzU3MiwiZXhwIjoxNjUwODk1NTcyfQ.GiuCXaaeUXPGmHaVn4Z75zACBUWsr8jVd7dAW0BXiwc",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
