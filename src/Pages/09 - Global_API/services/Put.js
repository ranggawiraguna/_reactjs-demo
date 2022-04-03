const Put = (url = "", data = {}) =>
  fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.ok)
    .then((success) => success);

export default Put;
