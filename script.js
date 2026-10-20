
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // DARK MODE
    // =====================================

    const themeToggleBtn = document.getElementById("theme-toggle");

    function updateThemeButton() {
        if (!themeToggleBtn) return;

        const isDark = document.body.classList.contains("dark-mode");

        if (isDark) {
            themeToggleBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i> Light Mode';
        } else {
            themeToggleBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i> Dark Mode';
        }
    }

    // Load previously saved theme
    try {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    } catch (error) {
        console.log("Theme storage is unavailable.");
    }

    updateThemeButton();

    // Toggle theme when clicked
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            try {
                localStorage.setItem(
                    "theme",
                    isDark ? "dark" : "light"
                );
            } catch (error) {
                console.log("Unable to save theme preference.");
            }

            updateThemeButton();
        });
    }

    // =====================================
    // SAY HELLO BUTTON
    // =====================================

    window.showAlert = function () {
        alert(
            "Hi! Thanks for visiting Jake Russel's portfolio. " +
            "Feel free to reach out via the contact section!"
        );
    };

    // =====================================
    // BACK TO TOP
    // =====================================

    const backToTopBtn = document.getElementById("back-to-top");

    function updateBackToTop() {
        if (!backToTopBtn) return;

        if (window.scrollY > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", updateBackToTop);

    updateBackToTop();

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
