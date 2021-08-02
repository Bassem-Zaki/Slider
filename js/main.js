const slider = document.querySelector(".slider"),
  slide = document.querySelectorAll(".slider ul li"),
  leftArrow = document.querySelector(".slider .arrows .left-arrow"),
  rightArrow = document.querySelector(".slider .arrows .right-arrow"),
  pointerDots = document.querySelectorAll(".slider .pointer-dots span"),
  numOfSlide = slide.length;
let slideNum = 0;

rightArrow.addEventListener("click", () => {
  slide.forEach((slides) => {
    slides.classList.remove("active");
  });
  pointerDots.forEach((pointerDot) => {
    pointerDot.classList.remove("active");
  });
  slideNum++;
  if (slideNum > numOfSlide - 1) {
    slideNum = 0;
  }
  slide[slideNum].classList.add("active");
  pointerDots[slideNum].classList.add("active");
});

leftArrow.addEventListener("click", () => {
  slide.forEach((slides) => {
    slides.classList.remove("active");
  });
  pointerDots.forEach((pointerDot) => {
    pointerDot.classList.remove("active");
  });
  slideNum--;
  if (slideNum < 0) {
    slideNum = numOfSlide - 1;
  }
  slide[slideNum].classList.add("active");
  pointerDots[slideNum].classList.add("active");
});

// autoplay slider

let autoSlider;

let repeater = () => {
  autoSlider = setInterval(() => {
    slide.forEach((slides) => {
      slides.classList.remove("active");
    });
    pointerDots.forEach((pointerDot) => {
      pointerDot.classList.remove("active");
    });
    slideNum++;
    if (slideNum > numOfSlide - 1) {
      slideNum = 0;
    }
    slide[slideNum].classList.add("active");
    pointerDots[slideNum].classList.add("active");
  }, 3000);
};

repeater();

// stop autoplay slider while hover

slider.addEventListener("mouseover", () => {
  clearInterval(autoSlider);
});

slider.addEventListener("mouseleave", () => {
  repeater();
});
