import React from "react";
import appwriteBucketService from "../appwrite/BucketStorage";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  console.log(appwriteBucketService.getFileView(featuredImage));
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[#212121] rounded-xl p-4">
        <div className="w-full flex justify-center mb-4">
          {featuredImage ? (
            <img
              src={appwriteBucketService.getFileView(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          ) : (
            <div>No Image</div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
