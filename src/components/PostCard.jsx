import React, { useState, useEffect } from "react";
import service from "../appwrite/conf";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const url = await service.getFilePreview(featuredImage);
        setImageURL(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }

    fetchImage();
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl p-4 shadow-md">
        <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 flex justify-center items-center overflow-hidden rounded-t-xl">
          {imageURL ? (
            <img
              src={imageURL}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
        <h2 className="text-l font-bold mt-4 truncate">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
