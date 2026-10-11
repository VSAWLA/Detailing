const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', function(event) {
    cursorGlow.style.left = event.clientX + 'px';
    cursorGlow.style.top = event.clientY + 'px';
});
/*hero*/
const burger = document.querySelector('.burg');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

burger.addEventListener('click', function () {
    nav.classList.toggle('active-burg');
    const isOpen = nav.classList.contains('active-burg');
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute(
        'aria-label',
        isOpen ? 'Закрыть меню' : 'Открыть меню'
    );
});
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('active-burg');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
    });
});
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
/*faq*/
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

questions.forEach(function(question, index) {
    question.addEventListener("click", function() {
        const answer = answers[index];

        if (getComputedStyle(answer).display === "none") {
            answer.style.display = "flex";
        } else {
            answer.style.display = "none";
        }
    });
});
/*contact*/
const feedback = document.getElementById('feedback');
const inputs = document.querySelectorAll('.validatable');

feedback.addEventListener('click', () => {
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('input-error');
    } else {
      input.classList.remove('input-error');
    }
  });
});

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.classList.remove('input-error');
    }
  });
});

const phone = document.querySelector("#phone");

phone.addEventListener("input", function() {
    phone.value = phone.value.replace(/\D/g, "");
});

const inputName = document.querySelector("#input-name");

inputName.addEventListener("input", function() {
    inputName.value = inputName.value.replace(/[0-9]/g, '');
});


const inp = [
        inputName,
        phone,
        document.querySelector("#service")
];
const form = document.querySelector('#form');
const wrong = document.querySelector(".wrong");
feedback.addEventListener('click', function() {
    const Filled = inp.every(input => input.value.trim() !== "");
    if (Filled) {
        alert('Форма успешно отправлена, мы с Вами свяжемся!');
        wrong.style.display = "none"
        form.reset(); 
    } else {
        wrong.style.display = "block"
    }
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

