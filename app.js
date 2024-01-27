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

console.log(cardsData);

// Taking data from data.js and creating card component for each object
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
        answer.style.maxHeight = "0px";
      }
    });

    // Toggle the answer for the clicked question item and rotate arrow icon
    const answer = questionItem.querySelector(".answer-container");
    const downArrowIcon = questionItem.querySelector(".question-arrow");

    if (getComputedStyle(answer).maxHeight === "0px") {
      answer.style.maxHeight = "1000px";

      console.log("asdasd");
      downArrowIcon.classList.toggle("rotate");
    } else {
      answer.style.maxHeight = "0px";
      downArrowIcon.classList.toggle("rotate");
    }
  });
});
