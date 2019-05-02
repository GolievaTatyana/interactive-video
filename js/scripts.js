const video = document.getElementById("video");

const stepOne = document.getElementById("step-1");
const wayOne = document.getElementById("way-1");
const wayTwo = document.getElementById("way-2");

const stepTwo = document.getElementById("step-2");
const wayThree = document.getElementById("way-3");
const wayFour = document.getElementById("way-4");



video.addEventListener("ended", visibleButtonsStepOne);
wayOne.addEventListener("click", wayOneStepOne);
wayTwo.addEventListener("click", wayTwoStepOne);

wayThree.addEventListener("click", wayThreeStepTwo);
wayFour.addEventListener("click", wayFourStepTwo);

function visibleButtonsStepOne() {
  stepOne.classList.add("visible");
  video.removeEventListener("ended", visibleButtonsStepOne);
  video.addEventListener("ended", visibleButtonsStepTwo);
};

function wayOneStepOne(event) {
  event.preventDefault();
  stepOne.classList.remove("visible");
  video.removeEventListener("ended", visibleButtonsStepOne);
  video.src = 'media/video2.mp4';
  video.addEventListener("ended", visibleButtonsStepTwo);
  video.play();
};

function wayTwoStepOne(event) {
  event.preventDefault();
  stepOne.classList.remove("visible");
  video.removeEventListener("ended", visibleButtonsStepOne);
  video.src = 'media/video3.mp4';
  video.addEventListener("ended", visibleButtonsStepTwo);
  video.play();
};

function visibleButtonsStepTwo() {
  stepOne.classList.remove("visible");
  stepTwo.classList.add("visible");
};

function wayThreeStepTwo(event) {
  event.preventDefault();
  stepTwo.classList.remove("visible");
  video.removeEventListener("ended", visibleButtonsStepTwo);
  video.src = 'media/video4.mp4';
  video.addEventListener("ended", () => alert('!!!!'));
  video.play();
};

function wayFourStepTwo(event) {
  event.preventDefault();
  stepTwo.classList.remove("visible");
  video.removeEventListener("ended", visibleButtonsStepTwo);
  video.src = 'media/video5.mp4';
  video.addEventListener("ended", () => alert('!!!!'));
  video.play();
};