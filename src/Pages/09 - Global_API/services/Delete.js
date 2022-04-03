const Delete = (url = "") =>
  fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.ok)
    .then((success) => success);

export default Delete;
