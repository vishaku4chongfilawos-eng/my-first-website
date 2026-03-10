function greetuser() {
    // Get value from input box 
    const username = document.getElementById("username").value;
    // show message in paragragh
    console.log(username);
    document.getElementById("message").innerText =" " + username + "! My name is Victor Ishaku, I'm learning Web Development";
}

function myDetails(){
    const msg2 = document.getElementById("message2");
    msg2.innerText="I love Football and I am an arsenal fan and I know arsenal is winning the league this season 2025/2026";
    msg2.style.color = "green";
    msg2.style.fontSize = "18px";
}
function showMessage3() {
    const msg3 = document.getElementById("message3");
    msg3.innerText="This is my small background story; My name is Victor Ishaku, a dedicated Computer Science student and aspiring Web Developer";
    msg3.style.color = "darkblue";
    msg3.style.fontSize = "18px";
    msg3.style.marginTop = "10px";
}
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