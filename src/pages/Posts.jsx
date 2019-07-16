import React, { useEffect } from "react";
import { connect } from "react-redux";
import PostLists from "../components/PostLists/PostsList";
import { getPosts } from "../redux/posts/postsAction";
const Posts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  console.log("propps ::", posts);
  return (
    <div className="posts-container">
      {posts && posts.fetching ? (
        <h1>fetching posts...</h1>
      ) : (
        <PostLists posts={posts.posts} />
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  posts: state.posts
});
export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
