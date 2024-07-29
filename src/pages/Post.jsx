import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/conf";
import { Button, Container } from "../components/imports";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

const Post = () => {
  const [post, setPost] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          service
            .getFilePreview(post.featuredImage)
            .then((url) => {
              setImageURL(url);
            })
            .catch((error) => {
              console.error("Error fetching image URL:", error);
            });
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  const isAuthor = post && userData && post.userID === userData.$id;

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full h-80 flex justify-center mb-4 relative border rounded-xl p-2">
          {imageURL ? (
            <img src={imageURL} alt={post.title} className="rounded-xl" />
          ) : (
            <p>Loading image...</p>
          )}
          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
};

export default Post;
