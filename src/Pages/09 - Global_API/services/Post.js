const Post = (url = "", data = {}) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.ok)
    .then((success) => success);

export default Post;
