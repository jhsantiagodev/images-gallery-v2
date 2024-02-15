const body = document.querySelector('body');
const lightBox = document.querySelector('.lightBox');
const img = document.querySelectorAll('.gImg');

let showImg = lightBox.querySelector('.showImg img');
let close = lightBox.querySelector('.close');

    for (let image of img){
        image.addEventListener("click", () => {
            lightBox.style.display = "block";
            showImg.src = image.src;
            body.style.overflow = "hidden";

            close.addEventListener("click", () => {
                lightBox.style.display = "none";
                body.style.overflow = "visible";
            });
        });
    }