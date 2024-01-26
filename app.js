import cardsData from "./data.js";

console.log(cardsData);

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
