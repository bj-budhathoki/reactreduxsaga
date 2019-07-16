const fetchAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(res =>
    res.json()
  );
};
export {
    fetchAllPosts
}