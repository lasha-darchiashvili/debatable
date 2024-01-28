import cardsData from "./data.js";

const navigation = document.querySelector(".header");

// Navigation becomes fixed on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY != 0) {
    navigation.classList.add("on-header-scroll");
  } else {
    navigation.classList.remove("on-header-scroll");
  }
});

// burger menu

const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav");
burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("burger-active");
  console.log(navMenu.classList);
});

console.log(cardsData);

//Card components. Taking data from data.js and creating card component for each object
const cardContainer = document.querySelector(".courses-cards");
console.log(cardContainer);
cardsData.forEach((data) => {
  const card = document.createElement("div");
  card.className = "course-card";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "card-img-wrapper";
  const img = document.createElement("img");
  img.className = "card-img";
  img.src = data.img;
  img.alt = "card-image";
  imgWrapper.appendChild(img);

  const description = document.createElement("div");
  description.className = "course-description";
  const courseName = document.createElement("p");
  courseName.className = "course-name";
  courseName.textContent = data.title;
  const courseStatus = document.createElement("p");
  courseStatus.className = "course-status";

  // Set courseStatus text based on data.status which can be 'active' or 'closed'
  if (data.status === "closed") {
    courseStatus.textContent = "რეგისტრაცია დასრულებულია";
  } else if (data.status === "active") {
    courseStatus.textContent = "მიმდინარეობს რეგისტრაცია";
  } else {
    courseStatus.textContent = "სტატუსი უცნობია";
  }

  const detailsWrapper = document.createElement("div");
  detailsWrapper.className = "course-details-wrapper";
  const arrowLogo = document.createElement("img");
  arrowLogo.className = "arrow-logo";
  arrowLogo.src = "assets/arrow.svg";
  arrowLogo.alt = "arrow-icon";
  const detailsLink = document.createElement("a");
  detailsLink.className = "course-details-link";
  detailsLink.href = "#";
  detailsLink.textContent = "კურსის დეტალები";

  detailsWrapper.appendChild(arrowLogo);
  detailsWrapper.appendChild(detailsLink);

  description.appendChild(courseName);
  description.appendChild(courseStatus);
  description.appendChild(detailsWrapper);

  card.appendChild(imgWrapper);
  card.appendChild(description);

  cardContainer.appendChild(card);
});

// accordion component
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const questionItem = this.parentElement;

    // Close all question items other than clicked question
    const allQuestionItems = document.querySelectorAll(".question-item");
    allQuestionItems.forEach((item) => {
      if (item !== questionItem) {
        const answer = item.querySelector(".answer-container");
        answer.style.gridTemplateRows = "0fr";
      }
    });

    // Toggle the answer for the clicked question item and rotate arrow icon
    const answer = questionItem.querySelector(".answer-container");
    console.log(getComputedStyle(answer).gridTemplateRows);
    if (getComputedStyle(answer).gridTemplateRows === "0px") {
      answer.style.gridTemplateRows = "1fr";
      questionItem.classList.add("active");
      console.log("asdasd");
    } else {
      answer.style.gridTemplateRows = "0fr";
      questionItem.classList.remove("active");
    }
  });
});

// terms and conditions slide component
const termsSlide = document.querySelector(".notification");
const termsSlideOverlay = document.querySelector(".notification-overlay");

document.querySelector(".rules").addEventListener("click", () => {
  const termsCloseIcon = document.querySelector(".notification-close-icon");
  const termsCloseButton = document.querySelector(
    ".close-notification-second-button"
  );

  //open terms slide
  termsSlide.style.visibility = "visible";
  termsSlide.style.transform = "translate(0%)";
  termsSlideOverlay.style.width = "100%";

  //function: close terms and conditions and scroll to bottom
  function closeSlide(termsSlide, termsSlideOverlay) {
    termsSlide.style.visibility = "hidden";
    termsSlide.style.transform = "translate(100%)";
    termsSlideOverlay.style.width = "0";
    window.scrollTo({ top: document.body.scrollHeight });
  }

  //close terms slide with three different elements
  termsSlideOverlay.addEventListener(
    "click",
    closeSlide.bind(null, termsSlide, termsSlideOverlay)
  );
  termsCloseIcon.addEventListener(
    "click",
    closeSlide.bind(null, termsSlide, termsSlideOverlay)
  );
  termsCloseButton.addEventListener(
    "click",
    closeSlide.bind(null, termsSlide, termsSlideOverlay)
  );
});

//slider

//slider
let currentSlide = 0;
const slideLeftArrow = document.querySelector(".slider-arrow-1");
const slideRightArrow = document.querySelector(".slider-arrow-2");

const slides = document.querySelectorAll(".slide");
const slidesNumber = slides.length;

// activate first slide
activateSlide(currentSlide);

slideRightArrow.addEventListener("click", nextSlide);
slideLeftArrow.addEventListener("click", previousSlide);

function activateSlide(curSlide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
}

// goto next slide
function nextSlide() {
  if (currentSlide === slidesNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  activateSlide(currentSlide);
}

//goto previous slide
function previousSlide() {
  if (currentSlide === 0) {
    currentSlide = slidesNumber - 1;
  } else {
    currentSlide--;
  }
  activateSlide(currentSlide);
}
