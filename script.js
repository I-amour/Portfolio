

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Typing effect
const typingEffect = document.getElementById('typing-effect');
const typingEffectIntro = document.getElementById('typing-effect-intro');

const mainText = "Hi, I'm Simi...";
const introText = "I am a dedicated Software Engineer, currently pursuing a degree in Computer Science at Loughborough University, expected to graduate in 2027. With a strong foundation in software development, I am eager to apply my knowledge and skills to drive innovative solutions in the tech industry.";

function typeWriter(element, text, delay) {
  let index = 0;
  function type() {
      if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, delay);
      }
  }
  type();
}

typeWriter(typingEffect, mainText, 100); // Type main text
setTimeout(() => typeWriter(typingEffectIntro, introText, 50), mainText.length * 100 + 500); // Type intro text after a delay


// Scroll function for the buttons
document.getElementById('scroll-left').addEventListener('click', function() {
document.querySelector('.projects-container').scrollBy({
    left: -300, // Adjust scroll distance as needed
    behavior: 'smooth'
});
});

document.getElementById('scroll-right').addEventListener('click', function() {
document.querySelector('.projects-container').scrollBy({
    left: 300, // Adjust scroll distance as needed
    behavior: 'smooth'
});
});

// Function to open the modal
function openModal(modalId) {
document.getElementById(modalId).style.visibility = "visible";
document.getElementById(modalId).style.display = "flex";
}

// Function to close the modal
function closeModal(modalId) {
document.getElementById(modalId).style.display = "none";
}

const roadmapItems = document.querySelectorAll('.roadmap-item');
const descriptionBox = document.getElementById('description-box');

roadmapItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
      const description = this.getAttribute('data-description');
      descriptionBox.innerText = description;
      descriptionBox.style.display = 'block'; // Adjust description position
  });

  item.addEventListener('mouseleave', function() {
      descriptionBox.style.display = 'none';
  });
});


var c = document.getElementById('canv');
var $ = c.getContext('2d');

var col = function(x, y, r, g, b) {
$.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
$.fillRect(x, y, 1, 1);
}

var R = function(x, y, t) {
  return Math.floor(191 + 64 * Math.sin((x * x - y * y) / 300 + t)); // Add a base value for purple
}

var G = function(x, y, t) {
  return Math.floor(100 + 155 * Math.sin((x * x * Math.cos(t / 6) + y * y * Math.sin(t / 4)) / 300)); // Enhance green color
}

var B = function(x, y, t) {
  return Math.floor(191 + 64 * Math.sin(5 * Math.sin(t / 15) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)); // Add a base value for blue
}
var t = 0;

var run = function() {
for (x = 0; x <= 35; x++) {
  for (y = 0; y <= 35; y++) {
    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
  }
}
t += 0.010; // Decrease this value to slow down the animation
window.requestAnimationFrame(run);
}

run();
