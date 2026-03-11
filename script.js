  // Display the greeting message    messageElement.textContent = `${greeting}! Welcome to my portfolio website.`;
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    // change button text
    if(document.body.classList.contains("dark-mode")){
        darkModeToggle.textContent = "Light Mode";
    } else {
        darkModeToggle.textContent = "Dark Mode";
    }
});
const text = ["Computer Scientist", "Web Developer", "front-end learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
    if(count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, index);
    document.getElementById("typing").textContent = letter;
    index++;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 100);
})();
