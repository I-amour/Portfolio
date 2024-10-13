// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const typingEffect = document.getElementById('typing-effect');
const typingEffectIntro = document.getElementById('typing-effect-intro');

const mainText = "Hi, I'm Simi...";
const introText = "I am a passionate Software Engineer, currently enrolled at Loughborough University studying Computer Science, set to graduate in 2027.";

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
setTimeout(() => typeWriter(typingEffectIntro, introText, 100), mainText.length * 100 + 500); // Type intro text after a delay


document.getElementById('scroll-left').addEventListener('click', function() {
    document.querySelector('.projects-container').scrollBy({
        top: 0,
        left: -250, // Adjust this value based on how much you want to scroll
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.querySelector('.projects-container').scrollBy({
        top: 0,
        left: 250, // Adjust this value based on how much you want to scroll
        behavior: 'smooth'
    });
});
