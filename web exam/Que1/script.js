const commentsList = document.getElementById("comments-list");
const loading = document.getElementById("loading");

fetch("https://jsonplaceholder.typicode.com/comments?_limit=100")
.then(response => response.json())
.then(data => {
loading.style.display = "none"; // Hide loading message

 data.forEach(comment => {
const listItem = document.createElement("li");

 listItem.innerHTML = `
 <p><strong>ID:</strong> ${comment.id}</p>
 <p><strong>Name:</strong> ${comment.name}</p>
 <p><strong>Email:</strong> ${comment.email}</p>
 <p><strong>Body:</strong> ${comment.body}</p>
  <hr>
 `;
 commentsList.appendChild(listItem);
 });
})
.catch(error => {
  loading.textContent = "Failed to load comments.";
console.error("Error fetching comments:", error);
  });
