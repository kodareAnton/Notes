import { useEffect, useState } from "react";
import axios from "axios";
import "./allPosts.css";
import { Link } from "react-router-dom";
import { Post } from "../models/Post";
import { IPost } from "../models/Ipost";

export const AllPosts = () => {
  const [Data, setData] = useState<Post[]>([]);
  console.log(Data);

  // hämtar Api
  useEffect(() => {
    axios.get<IPost[]>("http://localhost:3000/users").then((res) => {
      let GetAllPostsFromApi = res.data.map((post: IPost) => {
        return new Post(post.id, post.title, post.description, post.date);
      });
      setData(GetAllPostsFromApi);
    });
  }, []);

  // skriver ut Api i HTML
  const Api = Data.map((post: Post) => {
    let readFile = `/AllPosts/${post.id}`;
    let ChangeFile = `/AllPosts/ChangePost/${post.id}`;
    console.log(post.id);

    return (
      <div key={post.id} className="rows">
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        <Link to={readFile}>
          <button>Visa</button>
        </Link>
        <Link to={ChangeFile}>
          <button>Ändra</button>
        </Link>
      </div>
    );
  });

  return (
    <>
      <h1>Välkommen!</h1>
      {Api}
      <button>Skapa nytt inlägg</button>
    </>
  );
};
