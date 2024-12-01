// tooltip
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");

  fetch("terms.json")
    .then(response => response.json())
    .then(terms => {
      console.log("Terms loaded:", terms);

      const tooltip = document.getElementById("tooltip");
      const textContainer = document.querySelector(".text-test");

      document.querySelectorAll(".hover-term").forEach(term => {
        term.addEventListener("mouseenter", (event) => {
          const termName = event.target.getAttribute("data-term");
          const definition = terms[termName];

          if (definition) {
            tooltip.innerHTML = definition;

            // Position the tooltip
            const rect = event.target.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top < viewportHeight / 2) {
              tooltip.style.top = `${window.scrollY + rect.bottom + 10}px`;
            } else {
              tooltip.style.top = `${window.scrollY + rect.top - tooltip.offsetHeight - 10}px`;
            }

            tooltip.style.left = `${window.scrollX + rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;

            // Show tooltip and dim surrounding text
            tooltip.classList.add("visible");
            textContainer.classList.add("dimmed");
          }
        });

        term.addEventListener("mouseleave", () => {
          // Hide tooltip and restore surrounding text opacity
          tooltip.classList.remove("visible");
          textContainer.classList.remove("dimmed");
        });
      });
    })
    .catch(error => console.error("Error loading terms:", error));
});

// current page underliner
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop().replace('.html', ''); // Normalize path

    console.log("Current Page:", currentPage);  // Check for debugging

    navItems.forEach(item => {
        const link = item.querySelector('a');
        const linkHref = link.getAttribute('href').replace('.html', '');  // Normalize link path

        if (linkHref === currentPage) {
            item.classList.add('active');
            console.log("Active page added for:", link.getAttribute('href'));
        }
    });
});

// nav on scroll hider
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
          header.classList.add('hidden');
      } else {
          header.classList.remove('hidden');
      }
  });
});
