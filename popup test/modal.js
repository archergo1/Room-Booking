const modal = document.getElementById("image-cover-modal");
const modalImg = document.getElementById("image-cover-image");
const captionText = document.getElementById("image-cover-caption");
const span = document.getElementsByClassName("image-cover-close")[0];


modal.onclick = function() {
    this.classList.remove("image-shown");
}

let i;
for (i = 0; i < document.images.length; i++) {

    let img = document.images[i];

    img.onclick = function() {
        modalImg.classList.add("modal-shown");
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;

    }
}