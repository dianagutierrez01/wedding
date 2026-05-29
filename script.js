//wedding countdown
const weddingDate = new Date("September 5, 2026 16:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff < 0) {
    countdownEl.textContent = "Today is the day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `${days} DAYS ${hours} HRS ${minutes} MINS`;
}, 1000);

//smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // this will prevent the site from jumping to that section
    
    //define variables 
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    //tell js to slowly scroll over to that id section
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// gallery photos
//create index with photos for gallery
const images = [
  { src: "photo-1.jpg", alt: "man and woman smile walking down a suspension bridge, woman smiling at camera, man smiling at her"},
  { src: "photo-2.jpg", alt: "man and woman are sitting on park stairs, man is sitting behind her, they sit in admiration of each other"},
  { src: "photo-6.jpg", alt: "man gives woman kiss on the cheek, her eyes are closed "},
];

//initialize start variable before use
let start = 0;

//assign constants and get elements by ID
const img = document.getElementById("slideImage");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

//create function for slides
function updateSlide() {
  img.src = images[start].src;
}
//event listener that responses to either arrow being clicked
next.addEventListener("click", () => {
  start = (start + 1) % images.length;
  updateSlide();
});

prev.addEventListener("click", () => {
  start = (start - 1 + images.length) % images.length;
  updateSlide();
});

