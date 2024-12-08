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

//link underliner
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll('.nav-item');
  const currentPage = window.location.pathname.split('/').pop().replace('.html', ''); // Normalize path

  console.log("Current Page:", currentPage); // Check for debugging

  navItems.forEach(item => {
      const link = item.querySelector('a');
      const linkHref = link.getAttribute('href').replace('.html', ''); // Normalize link path

      // Check if the current page matches the link, or if the current page is "index" for START
      if (linkHref === currentPage || (linkHref === 'START' && currentPage === 'index')) {
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
          console.log("HIDDEN");
      } else {
          header.classList.remove('hidden');
          console.log("SHOWING");
      }
  });
});



//-------------------------------------------------

    // Define custom colors based on risk levels
    const riskLevels = {
        noRisk: '#7acf30',       // Niedriges Risiko
        mediumRisk: '#ffa500',   // Mittleres Risiko
        highRisk: '#ff4500',     // Hohes Risiko
        extremeRisk: '#d0342c',  // Extrem hohes Risiko
    };

    // Helper function to get a specific cookie by name
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) {
                return value;
            }
        }
        return null;
    }

    // Immediately set the variable to avoid transitions
    (function () {
        const root = document.documentElement;

        // Check for a cookie and apply the color before the page renders
        const score = getCookie('cyberRiskScore');
        if (score) {
            setColorBasedOnScore(score);
        }
    })();

    // On page load, set the CSS variable again for safety
    window.onload = function () {
        const score = getCookie('cyberRiskScore');
        if (score) {
            setColorBasedOnScore(score);
        }
    };

    // Function to apply the color based on the score
    function setColorBasedOnScore(score) {
        const root = document.documentElement;

        // Define the color based on the score
        let color;
        if (score <= 5) {
            color = riskLevels.noRisk;
        } else if (score <= 15) {
            color = riskLevels.mediumRisk;
        } else if (score <= 25) {
            color = riskLevels.highRisk;
        } else {
            color = riskLevels.extremeRisk;
        }

        // Set the color variable in the CSS
        root.style.setProperty('--cookiecolor', color);
    }

    // Handle form submission
    document.getElementById("cyber-risk-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindert das Absenden des Formulars

        let totalPoints = 0;

        // Alle Radio-Buttons und Checkboxen abfragen
        const radios = document.querySelectorAll('input[type="radio"]:checked');
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        // Punkte für ausgewählte Radio-Buttons addieren
        radios.forEach(radio => {
            totalPoints += parseInt(radio.getAttribute("data-points"));
        });

        // Punkte für ausgewählte Checkboxen addieren
        checkboxes.forEach(checkbox => {
            totalPoints += parseInt(checkbox.getAttribute("data-points"));
        });

        // Bewertung basierend auf den Punkten (umgekehrt, je höher der Score, desto unsicherer)
        let resultMessage = "";
        if (totalPoints <= 20) {
            resultMessage = "Niedriges Risiko. Ihre Sicherheitspraktiken sind gut!";
        } else if (totalPoints <= 40) {
            resultMessage = "Mittleres Risiko. Einige Verbesserungen in Ihrer Sicherheit sind ratsam.";
        } else {
            resultMessage = "Hohes Risiko. Es gibt ernsthafte Sicherheitslücken in Ihren Praktiken.";
        }

        // Ergebnis anzeigen
        document.getElementById("result").innerHTML = `<p>Ihre Risikoanalyse: ${resultMessage}</p><p>Gesamtpunkte: ${totalPoints}</p>`;

        // Speichern des Ergebnisses in einem Cookie für 30 Tage
        const expires = new Date();
        expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 Tage gültig
        document.cookie = `cyberRiskScore=${totalPoints}; path=/; expires=${expires.toUTCString()}`;

        // Wenden der Farbe basierend auf dem Score an
        setColorBasedOnScore(totalPoints);
    });

    //-------------------------------
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adds a smooth scrolling effect
        });
    }