import React from "react";
import Post from "../Post/Post";
const PostList = ({ posts }) => {
  return (
    <div className="post-list-container">
      {posts && posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
};
export default PostList;
