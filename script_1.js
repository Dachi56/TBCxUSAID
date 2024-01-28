///////////////////////////////////////////////////////////
// Set current year

///////////////////////////
// Oftenly asked questions
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const showAnswerIcons = document.querySelectorAll(".show-answer-icon");

showAnswerIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const question = icon.closest(".question");
    const answer = question.querySelector(".answer");
    const line = question.querySelector(".line");

    const answers = document.querySelectorAll(".answer");
    const lines = document.querySelectorAll(".line");

    answers.forEach((a) => {
      if (a !== answer) {
        a.classList.remove("visible");
        lines.forEach((l) => {
          if (l !== line) {
            l.style.transform = "translateY(0)";
          }
        });
      }
    });

    if (answer.classList.contains("visible")) {
      answer.classList.remove("visible");
      line.style.transform = "translateY(0)";
    } else {
      answer.classList.add("visible");
      line.style.transform = "translateY(20px)";
    }
  });
});

////////////////////////
// SLIDER
const slider = document.querySelector(".slider-inner");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentSlide = 0;

function showSlide(n) {
  slider.style.transform = `translateX(-${n * 100}%)`;
  currentSlide = n;
}

function nextSlide() {
  showSlide((currentSlide + 1) % 3);
}

function prevSlide() {
  showSlide((currentSlide - 1 + 3) % 3);
}

leftArrow.addEventListener("click", () => {
  prevSlide();
});

rightArrow.addEventListener("click", () => {
  nextSlide();
});

showSlide(0);
