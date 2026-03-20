const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

if(track && slides.length > 0){

    let index = 0;

    function updateCarousel(){
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    if(nextBtn){
        nextBtn.addEventListener("click", () => {
            index++;
            if(index >= slides.length){
                index = 0;
            }
            updateCarousel();
        });
    }

    if(prevBtn){
        prevBtn.addEventListener("click", () => {
            index--;
            if(index < 0){
                index = slides.length - 1;
            }
            updateCarousel();
        });
    }

    setInterval(()=>{
        index++;
        if(index >= slides.length){
            index = 0;
        }
        updateCarousel();
    },5000);

}