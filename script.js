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

// underliner logic
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '').toLowerCase(); // Normalize path to lowercase
  
    console.log("Current Page:", currentPage); // Check for debugging
  
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const linkHref = link.getAttribute('href').replace('.html', '').toLowerCase(); // Normalize link path to lowercase
  
        // Match the current page with the link
        if (linkHref === currentPage || (linkHref === 'start' && currentPage === 'index')) {
            item.classList.add('active');
            console.log("Active page added for:", link.getAttribute('href'));
        }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    let lastScrollPosition = 0;


    // Handle header and accessibility options on scroll
    function handleScroll() {
        const currentScrollPosition = window.scrollY;

        // Disable hiding on mobile (screen width <= 768px)
        if (window.innerWidth > 768) {
            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down
                header.classList.add('hidden');
            } else {
                // Scrolling up
                header.classList.remove('hidden');
            }
        }

        // Update last scroll position
        lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeaderHeight);
});

document.addEventListener('scroll', () => {
    const infoContainer = document.querySelector('.info-container');
    const fadePoint = 800; // The point where fading starts (in pixels)
    const scrollTop = window.scrollY;
  
    // Calculate opacity based on scroll position
    const opacity = Math.max(1 - scrollTop / fadePoint, 0);
    infoContainer.style.opacity = opacity;
  });
  

// reveal resetter
document.addEventListener('DOMContentLoaded', function() {
    const resetter = document.getElementById('resetter');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
  
        if (scrollPosition > 300) {
            resetter.classList.add('shown');
        } else {
            resetter.classList.remove('shown');
        }
    });
  });


//-------------------------------
function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth' // Adds a smooth scrolling effect
    
});
}

//-------------------------------

// Open Nav on mobile
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerIcon = burgerMenu.querySelector('.burger-icon');
  const mobileNav = document.querySelector('.mobile-nav');

  burgerMenu.addEventListener('click', () => {
      // Toggle the mobile nav
      mobileNav.classList.toggle('active');

      // Swap the burger icon image
      if (mobileNav.classList.contains('active')) {
          burgerIcon.src = 'files/nav_close.svg'; // Change to open icon
          burgerIcon.alt = 'Close Menu';
      } else {
          burgerIcon.src = 'files/nav_open.svg'; // Change back to closed icon
          burgerIcon.alt = 'Open Menu';
      }
  });
});



//FAQ panel
document.querySelectorAll('.faq-accordion').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active state for button
        button.classList.toggle('active');
        const panel = button.nextElementSibling;
        
        // Toggle panel-open class
        panel.classList.toggle('panel-open');
        
        // If we're opening this panel
        if (button.classList.contains('active')) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            
            // Optional: Close other panels
            document.querySelectorAll('.faq-accordion').forEach(otherButton => {
                if (otherButton !== button && otherButton.classList.contains('active')) {
                    otherButton.classList.remove('active');
                    const otherPanel = otherButton.nextElementSibling;
                    otherPanel.classList.remove('panel-open');
                    otherPanel.style.maxHeight = "0px";
                }
            });
            
        } else {
            panel.style.maxHeight = "0px";
        }
    });
});



//Footer mobile accordion
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
      // First toggle the active state
      button.classList.toggle('active');
      const panel = button.nextElementSibling;
      
      // If we're opening this panel
      if (button.classList.contains('active')) {
          panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
          panel.style.maxHeight = "0px";
      }
  });
});




//-------------------------------------------------











// #region QUIZ CODE
// Fragenkatalog mit verschiedenen Fragetypen
const questions = [
    {
        id: 1,
        type: 'button',
        question: "Wie verwalten Sie Ihre Zugangsdaten?",
        options: [
            { text: "Passwort-Manager mit generierten Passwörtern.", score: 1 },
            { text: "Unterschiedliche komplexe Passwörter, selbst verwaltet.", score: 1 },
            { text: "Wenige Basis-Passwörter mit Variationen.", score: 1 },
            { text: "Überall gleiche oder ähnliche Passwörter.", score: 1 },
        ],
        category: "security_measures",
    },
    {
        id: 2,
        type: 'button',
        question: "Wie gehen Sie mit Software-Updates um?",
        options: [
            { text: "Automatische Updates für alles.", score: 1 },
            { text: "Automatische Updates für Betriebssystem und Browser.", score: 1 },
            { text: "Manuelle Updates bei Erinnerung.", score: 1 },
            { text: "Updates werden ignoriert.", score: 1 }
        ],
        category: "security_measures",
    },
    {
        id: 3,
        type: 'checkbox',
        question: "Meine Passwörter beinhalten in der Regel:",
        options: [
            { text: "Kleinbuchstaben", score: 1 },
            { text: "Großbuchstaben", score: 1 },
            { text: "Ziffern", score: 1 },
            { text: "Symbole", score: 1 }
        ],
        category: "security_measures",
        calculateScore: (selected) => {
            if (selected.length === 0) return 0;
            const sum = selected.reduce((acc, curr) => acc + curr.score, 0);
            return Math.min(3, sum);
        }
    },
    // {
    //     id: 4,
    //     type: 'range',
    //     question: "Schätzen Sie Ihr Wissen über Cyber-Sicherheit ein",
    //     min: 0,
    //     max: 10,
    //     step: 1,
    //     labels: {
    //         0: "Anfänger",
    //         5: "Fortgeschritten",
    //         10: "Experte"
    //     },
    //     calculateScore: (value) => Math.round((value / 10) * 3),
    //     category: "knowledge"
    // }
    {
        id: 4,
        type: 'button',
        question: "Meine Passwörter bestehen aus:",
        options: [
            { text: "Worten", score: 1 },
            { text: "Zahlen", score: 1 },
            { text: "Worten und Zahlen", score: 1 },
            { text: "Zufälligen Charakteren", score: 1 }
        ],
        category: "security_measures",
        calculateScore: (selected) => {
            if (selected.length === 0) return 0;
            const sum = selected.reduce((acc, curr) => acc + curr.score, 0);
            return Math.min(3, sum);
        }
    },
    {
        id: 5,
        type: 'button',
        question: "Ich nutze einen Administrator Account <br>am Computer.",
        options: [
            { text: "Ja", score: 1 },
            { text: "Nein", score: 1 },
        ],
        category: "security_measures",
    },
    {
        id: 6,
        type: 'button',
        question: "Wie gehen Sie mit Ihren persönlichen Daten in sozialen Medien um?",
        options: [
            { text: "Strenge Privatsphäre-Einstellungen, minimale Informationen", score: 1 },
            { text: "Standard-Privatsphäre-Einstellungen", score: 1 },
            { text: "Meist öffentlich, aber keine sensiblen Daten", score: 1 },
            { text: "Alles ist öffentlich sichtbar", score: 1 }
        ],
        category: "security_measures",
    },
    
];

// Globale Variablen
let currentQuestion = 0;
let answers = {};

// Cookie Funktionen
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + JSON.stringify(value) + ';expires=' + expires.toUTCString() + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            try {
                return JSON.parse(c.substring(nameEQ.length, c.length));
            } catch (e) {
                return null;
            }
        }
    }
    return null;
}

function updateQuestion() {
    const question = questions[currentQuestion];
    const questionElement = document.querySelector('.quiz-question');
    const container = document.querySelector('.quiz-answer-container');
    
    if (!questionElement || !container) {
        console.error('Required elements not found');
        return;
    }

    questionElement.innerHTML = question.question;
    container.innerHTML = '';
    
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = true;

    switch(question.type) {
        case 'radio':
            createRadioGroup(container, question);
            break;
        case 'checkbox':
            createCheckboxGroup(container, question);
            break;
        case 'range':
            createRangeSlider(container, question);
            break;
        case 'button':
            createButtonGroup(container, question);
            break;
    }

    // Progress Bar aktualisieren
    const progressFill = document.querySelector('.quiz-progress-fill');
    if (progressFill) {
        progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
        console.log('filled bar');
    }
    
    // Zurück-Button Status
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.disabled = currentQuestion === 0;
    }
    
    // Wenn Antwort bereits existiert, diese vorauswählen
    if (answers[question.id]) {
        loadSavedAnswer(question);
    }
}

// Add new function to create button group
function createButtonGroup(container, question) {
    const group = document.createElement('div');
    group.className = 'button-group';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-button';
        button.textContent = option.text;
        
        // Add selected class if this option was previously chosen
        if (answers[question.id] && answers[question.id].text === option.text) {
            button.classList.add('selected');
        }
        
        button.onclick = () => {
            // Remove selected class from all buttons in group
            group.querySelectorAll('.answer-button').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Add selected class to clicked button
            button.classList.add('selected');
            
            answers[question.id] = option;
            document.getElementById('nextBtn').disabled = false;
            saveProgress();
        };
        
        group.appendChild(button);
    });
    
    container.appendChild(group);
}

function createRadioGroup(container, question) {
    const group = document.createElement('div');
    group.className = 'radio-group';
    
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'radio-option';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quiz-question';
        input.value = index;
        input.onchange = () => {
            answers[question.id] = option;
            document.getElementById('nextBtn').disabled = false;
            saveProgress();
        };
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(option.text));
        group.appendChild(label);
    });
    
    container.appendChild(group);
}

function createCheckboxGroup(container, question) {
    const group = document.createElement('div');
    group.className = 'checkbox-group';
    
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'checkbox-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = index;
        input.onchange = (e) => {
            // Add or remove the checked class on the label
            label.classList.toggle('checked', e.target.checked);
            
            // Your existing code
            const selected = Array.from(group.querySelectorAll('input:checked'))
                .map(input => question.options[input.value]);
            answers[question.id] = selected;
            document.getElementById('nextBtn').disabled = false;
            saveProgress();
        };
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(option.text));
        group.appendChild(label);
    });
    
    container.appendChild(group);
}

function createRangeSlider(container, question) {
    const rangeContainer = document.createElement('div');
    rangeContainer.className = 'range-container';
    
    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'range-slider';
    input.min = question.min;
    input.max = question.max;
    input.step = question.step;
    input.value = question.min;
    input.oninput = () => {
        answers[question.id] = input.value;
        document.getElementById('nextBtn').disabled = false;
        saveProgress();
    };
    
    const labels = document.createElement('div');
    labels.className = 'range-labels';
    Object.entries(question.labels).forEach(([value, label]) => {
        const span = document.createElement('span');
        span.textContent = label;
        labels.appendChild(span);
    });
    
    rangeContainer.appendChild(input);
    rangeContainer.appendChild(labels);
    container.appendChild(rangeContainer);
}

function loadSavedAnswer(question) {
    const savedAnswer = answers[question.id];
    if (!savedAnswer) return;

    switch(question.type) {
        case 'radio':
            const radioIndex = question.options.findIndex(opt => opt.text === savedAnswer.text);
            if (radioIndex >= 0) {
                const radios = document.querySelectorAll('input[type="radio"]');
                radios[radioIndex].checked = true;
            }
            break;
        case 'checkbox':
            savedAnswer.forEach(saved => {
                const checkboxIndex = question.options.findIndex(opt => opt.text === saved.text);
                if (checkboxIndex >= 0) {
                    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                    checkboxes[checkboxIndex].checked = true;
                    // Add this line to apply the class when loading saved answers
                    checkboxes[checkboxIndex].closest('.checkbox-option').classList.add('checked');
                }
            });
            break;
        case 'range':
            const slider = document.querySelector('input[type="range"]');
            if (slider) {
                slider.value = savedAnswer;
            }
            break;
        case 'button':
            const buttons = document.querySelectorAll('.answer-button');
            const selectedIndex = question.options.findIndex(opt => opt.text === savedAnswer.text);
            if (selectedIndex >= 0) {
                buttons[selectedIndex].classList.add('selected');
            }
            break;
    }
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
    }
}



function calculateQuestionScore(question) {
    const answer = answers[question.id];
    if (!answer) return 0;

    switch(question.type) {
        case 'radio':
            return answer.score;
        case 'checkbox':
            return question.calculateScore(answer);
        case 'range':
            return question.calculateScore(answer);
        default:
            return 0;
    }
}

function calculateTotalScore() {
    const totalScore = questions.reduce((sum, question) => {
        return sum + calculateQuestionScore(question);
    }, 0);
    return Math.round((totalScore / (questions.length * 3)) * 100);
}

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const progressFill = document.querySelector('.quiz-progress-fill');
    if (progressFill) {
        progressFill.style.width = '100%'; // Manually set to 100%
    }
    
    const score = calculateTotalScore();
    document.querySelector('.score').textContent = `${score}%`;
    
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = `
        <h3>Ihre Ergebnisse im Detail:</h3>
        <p>Sie haben ${score}% der möglichen Punkte erreicht.</p>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    answers = {};
    document.cookie = 'quizAnswers=; Max-Age=-99999999;';
    document.cookie = 'currentQuestion=; Max-Age=-99999999;';
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    updateQuestion();
}

function saveProgress() {
    setCookie('quizAnswers', answers, 7);
    setCookie('currentQuestion', currentQuestion, 7);
}

function loadProgress() {
    const savedAnswers = getCookie('quizAnswers');
    const savedQuestion = getCookie('currentQuestion');
    if (savedAnswers) answers = savedAnswers;
    if (savedQuestion !== null) currentQuestion = savedQuestion;
    updateQuestion();
}

// Wichtig: Quiz initialisieren, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
    updateQuestion(); // Initial die erste Frage anzeigen
});

//arrow key control
document.addEventListener('keydown', (e) => {
    // Only handle arrow keys if we're in the quiz (not results)
    if (document.getElementById('quiz').style.display !== 'none') {
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        
        switch(e.key) {
            case 'ArrowRight':
                // Only trigger if button is enabled
                if (!nextBtn.disabled) {
                    nextQuestion();
                }
                break;
            case 'ArrowLeft':
                // Only trigger if button is enabled
                if (!prevBtn.disabled) {
                    previousQuestion();
                }
                break;
        }
    }
});


// #endregion


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



