import React from "react";
import Card from "../componets/Card";
import { useBlog } from "../context/BlogContext";

const Home = () => {
  const { posts } = useBlog();

  return (
    <div>
      home
      {posts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;