// Login Form Validation & Redirect
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username && password) {
        window.location.href = "home.html"; // redirect to home page
      } else {
        alert("Please enter both username and password");
      }
    });
  }
});

// Job Search (demo)
function searchJobs() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  if (searchInput) {
    alert("Searching jobs for: " + searchInput);
  } else {
    alert("Please enter a job title to search.");
  }
}