import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParser();
let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
  });
};

parse(feedURL);

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.send(articles);
  } catch (error) {
    res.sendStatus(404, { message: error });
  }
});

const server = app.listen("4000", () => {
  console.log("server running on http://localhost:4000");
});

export default server;
