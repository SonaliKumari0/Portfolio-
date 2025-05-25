document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully!");

    const toggleButton = document.getElementById("toggleLinks");
    const linksContainer = document.getElementById("linksContainer");
    const mainSections = document.querySelectorAll(".content-section"); // About, Education, etc.
    const extraInfo = document.querySelectorAll(".intro-links .link-item:not(#toggleLinks)"); // Hides Résumé, Birthday, and Projects

    let previousActiveSection = null;

    if (toggleButton && linksContainer) {
        toggleButton.addEventListener("click", function () {
            if (linksContainer.style.display === "none" || linksContainer.style.display === "") {
                // Store the last active section
                previousActiveSection = document.querySelector(".content-section.active");

                // Hide all sections
                mainSections.forEach(section => section.classList.remove("active"));
                extraInfo.forEach(item => item.style.display = "none"); // Hide extra info

                // Show Links section
                linksContainer.style.display = "flex";
            } else {
                // Hide Links section
                linksContainer.style.display = "none";

                // Restore previous section
                if (previousActiveSection) {
                    previousActiveSection.classList.add("active");
                }

                // Restore extra info
                extraInfo.forEach(item => item.style.display = "block");
            }
        });
    }

    // Handle Tab Navigation
    const tabs = document.querySelectorAll(".tab");

    if (tabs.length > 0 && mainSections.length > 0) {
        tabs.forEach((tab) => {
            tab.addEventListener("click", function () {
                // Remove 'active' class from all tabs
                tabs.forEach(t => t.classList.remove("active"));

                // Add 'active' class to the clicked tab
                this.classList.add("active");

                // Hide all sections
                mainSections.forEach(section => section.classList.remove("active"));

                // Show the corresponding section
                const targetSection = document.getElementById(this.dataset.tab);
                if (targetSection) {
                    targetSection.classList.add("active");
                }

                // Hide Links section if any tab is clicked
                linksContainer.style.display = "none";

                // Restore extra info
                extraInfo.forEach(item => item.style.display = "block");
            });
        });
    }

    // Smooth Scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
