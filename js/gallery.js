function activeGallery() {

  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  let imageTitle       = document.querySelector("#gallery-info > h3");
  let imageDescription = document.querySelector("#gallery-info > p");

  let currentClass = "current";

  thumbnails.forEach(function(thumbnail) {
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = thumbnail.dataset.largeVersion;

    thumbnail.addEventListener("click", function() {
      //Code to set clicked image as main image.

      let newTitle    = thumbnail.dataset.title;

      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newTitle);

      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      imageTitle.innerHTML       = thumbnail.dataset.title;
      imageDescription.innerHTML = thumbnail.dataset.description;

    });
  });
}
