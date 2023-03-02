import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./components/Feed";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  console.log(articles);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Netflix Teach Blog RSS DATA !
      </h1>
      <div className="flex items-center justify-center bg-neutral-800 px-5 py-5">
        <img src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" />
      </div>
      <div className="div">
        {articles.map((item, i) => (
          <Feed
            key={i}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
