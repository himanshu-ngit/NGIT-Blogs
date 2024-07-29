import React, { useEffect, useState } from "react";
import service from "../appwrite/conf";
import { Container, PostCard } from "../components/imports";
import { useSelector } from "react-redux";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    service.getPosts([]).then((post) => {
      if (post) {
        setPosts(post.documents);
        console.log("Added");
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
