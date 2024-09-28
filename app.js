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
    lightboxImg.src = images[index].src;
    currentIndex = index;
  }

  function closeLightboxFunc() {
    lightbox.style.display = "none";
  }

  function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex].src;
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
