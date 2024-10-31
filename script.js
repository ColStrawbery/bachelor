// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");

  fetch("terms.json")
    .then(response => response.json())
    .then(terms => {
      console.log("Terms loaded:", terms);

      const tooltip = document.getElementById("tooltip");

      document.querySelectorAll(".hover-term").forEach(term => {
        term.addEventListener("mouseenter", (event) => {
          const termName = event.target.getAttribute("data-term");
          const definition = terms[termName];

          if (definition) {
            tooltip.textContent = definition;
            tooltip.style.display = "block";

            const rect = event.target.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Check if the element is in the upper or lower half of the viewport
            if (rect.top < viewportHeight / 2) {
              // If in upper half, place tooltip below
              tooltip.style.top = `${window.scrollY + rect.bottom + 10}px`;
            } else {
              // If in lower half, place tooltip above
              tooltip.style.top = `${window.scrollY + rect.top - tooltip.offsetHeight - 10}px`;
            }

            // Center the tooltip horizontally
            tooltip.style.left = `${window.scrollX + rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
          }
        });

        term.addEventListener("mouseleave", () => {
          tooltip.style.display = "none"; // Hide tooltip
        });
      });
    })
    .catch(error => console.error("Error loading terms:", error));
});
