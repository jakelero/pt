// Apply the selected theme
function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.innerHTML = theme === "dark"
            ? '<i class="fa-solid fa-sun"></i> Light Mode'
            : '<i class="fa-solid fa-moon"></i> Dark Mode';
    }
}

// Load saved theme
const savedTheme = localStorage.getItem("portfolioTheme") || "light";
applyTheme(savedTheme);

// Toggle Dark Mode
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const isDark = document.body.classList.contains("dark-mode");
        const newTheme = isDark ? "light" : "dark";

        localStorage.setItem("portfolioTheme", newTheme);
        applyTheme(newTheme);
    });
}

// Say Hello button
function showAlert() {
    alert("Hello! Thank you for visiting my portfolio.");
}

// Back to Top button
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    window.addEventListener("scroll", function () {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

