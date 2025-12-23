const gridContainer = document.querySelector(".main-container");
const arrowButton = document.querySelector("#arrow-btn");
const profileContainer = document.querySelector(".profile-container");

let imagesData = JSON.parse(localStorage.getItem("imagesData"));

function appendImages() {
  imagesData.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("main-item");
    card.innerHTML = `
    <img class="main-image" src="${image.image_url}" loading="lazy" />
    <div class="image-icons-wrapper">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
    </div>
    </div>
    `;

    const overlay = card.querySelector(".image-icons-wrapper");
    card.addEventListener("mouseover", () => {
      overlay.classList.add("show-overlay");
    });
    card.addEventListener("mouseout", () => {
      overlay.classList.remove("show-overlay");
    });
    gridContainer.appendChild(card);
  });
}
appendImages();

arrowButton.addEventListener("click", (event) => {
  event.stopPropagation();
  profileContainer.classList.toggle("show");
});

document.addEventListener("click", () => {
  profileContainer.classList.remove("show");
});

profileContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});