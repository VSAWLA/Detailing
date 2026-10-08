/*hero*/
const burger = document.querySelector('.burg');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        const isOpen = nav.classList.contains('active');
        burger.setAttribute('aria-expanded', isOpen);
        burger.setAttribute(
            'aria-label',
            isOpen ? 'Закрыть меню' : 'Открыть меню'
        );
    });
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Открыть меню');
        });
    });
/*about*/
/*services*/
/*gallery*/
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');

const slides = document.querySelectorAll('.gallery-pic img');

const number = document.querySelector('#current-number');

let currentSlide = 0;

function updateSlider() {
    slides.forEach(function(slide) {
        slide.classList.add('hidden');
        slide.classList.remove('active', 'prev', 'next');
    });

    slides[currentSlide].classList.add('active');
    slides[currentSlide].classList.remove('hidden');

    if (currentSlide === 0) {
        slides[slides.length - 1].classList.add('prev');
        slides[slides.length - 1].classList.remove('hidden');
    } else {
        slides[currentSlide - 1].classList.add('prev');
        slides[currentSlide - 1].classList.remove('hidden');
    }

    if (currentSlide === slides.length - 1) {
        slides[0].classList.add('next');
        slides[0].classList.remove('hidden');
    } else {
        slides[currentSlide + 1].classList.add('next');
        slides[currentSlide + 1].classList.remove('hidden');
    }

    number.textContent = (currentSlide + 1).toString().padStart(2, '0');

}

updateSlider();

next.addEventListener('click', function() {
    currentSlide++;

    if (currentSlide === slides.length) {
        currentSlide = 0;
    }

    updateSlider();
});

prev.addEventListener('click', function() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlider();
});

/*process*/
/*faq*/

/*contact*/
const phone = document.querySelector("#phone");

phone.addEventListener("input", function() {
    phone.value = phone.value.replace(/\D/g, "");
});

const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

questions.forEach(function(question, index) {
    question.addEventListener("click", function() {
        const answer = answers[index];
        if (answer.style.display === "none") {
            answer.style.display = "flex";
        } else {
            answer.style.display = "none";
        }
    });
});

const contact = document.querySelector("#contact");
const follow = document.querySelectorAll(".follow");

follow.forEach(button => {
  button.addEventListener('click', () => {
    contact.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const btnGallery = document.querySelector("#btn-right");
const gallery = document.querySelector("#gallery");

btnGallery.addEventListener('click', function() {
  gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});