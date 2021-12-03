const inputField = document.querySelector("input");
const imageField = document.querySelector(".imageContainer");
var uploadedImage = "";

inputField.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
    imageField.style.backgroundImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});
