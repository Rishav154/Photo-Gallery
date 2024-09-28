document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.getElementById("close-lightbox");
  const prevImage = document.getElementById("prev-image");
  const nextImage = document.getElementById("next-image");
  let currentIndex = 0;
  const images = Array.from(gallery.getElementsByTagName("img"));

  function openLightbox(index) {
    lightbox.style.display = "block";
    showImage(index);
  }

  function closeLightboxFunc() {
    lightbox.style.display = "none";
  }

  function showImage(index) {
    lightboxImg.classList.add("fade-out");
    setTimeout(() => {
      lightboxImg.src = images[index].src;
      currentIndex = index;
      lightboxImg.classList.remove("fade-out");
    }, 200); // This should match the transition duration in CSS
  }

  function changeImage(step) {
    let newIndex = currentIndex + step;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    showImage(newIndex);
  }

  gallery.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      openLightbox(images.indexOf(e.target));
    }
  });

  closeLightbox.addEventListener("click", closeLightboxFunc);

  prevImage.addEventListener("click", function () {
    changeImage(-1);
  });

  nextImage.addEventListener("click", function () {
    changeImage(1);
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightboxFunc();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (lightbox.style.display === "block") {
      if (e.key === "ArrowLeft") changeImage(-1);
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "Escape") closeLightboxFunc();
    }
  });
});
