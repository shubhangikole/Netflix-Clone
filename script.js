// ===============================
// Trending Movies Slider
// ===============================

const container = document.querySelector(".movies-container");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

if (container && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
        container.scrollBy({
            left: -400,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        container.scrollBy({
            left: 400,
            behavior: "smooth"
        });
    });
}


// ===============================
// FAQ Accordion
// ===============================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");

        // Close all other answers
        document.querySelectorAll(".faq-answer").forEach(item => {
            if (item !== answer) {
                item.style.maxHeight = null;
                item.previousElementSibling.querySelector("span").textContent = "+";
            }
        });

        // Toggle current answer
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "×";
        }
    });
});


// ===============================
// Email Validation
// ===============================

const getStartedBtn = document.getElementById("getStarted");

if (getStartedBtn) {

    getStartedBtn.addEventListener("click", () => {

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Welcome to Netflix! Your email has been submitted.");

        emailInput.value = "";
    });

}