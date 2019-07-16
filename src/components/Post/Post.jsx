import React from "react";
const Post = ({ post }) => {
  return (
    <div className="post-container">
      <p>{post.title}</p>
    </div>
  );
};
export default Post;
