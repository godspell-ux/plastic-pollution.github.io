//Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});



const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    burger.classList.toggle('toggle');
    
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
        }
    });
});


navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        navLinksItems.forEach(link => {
            link.style.animation = '';
        });
    });
});


// Plastic Footprint Calculator
const calculateBtn = document.getElementById('calculate-btn');
const calcResult = document.getElementById('calc-result');

calculateBtn.addEventListener('click', () => {
    console.log('Calculate button clicked'); 
    const bottles = parseInt(document.getElementById('bottles').value) || 0;
    const bags = parseInt(document.getElementById('bags').value) || 0;
    const containers = parseInt(document.getElementById('containers').value) || 0;

    console.log('Bottles:', bottles, 'Bags:', bags, 'Containers:', containers); 

    const total = (bottles * 4) + (bags * 4) + (containers * 4);
    const annualTotal = total * 12;

    let message;
    if (annualTotal < 1000) {
        message = `Your annual plastic footprint is ${annualTotal} items. Great job! Keep reducing.`;
    } else if (annualTotal < 3000) {
        message = `Your annual plastic footprint is ${annualTotal} items. Try some of our reduction tips.`;
    } else {
        message = `Your annual plastic footprint is ${annualTotal} items. Consider making some changes using our suggestions.`;
    }

    console.log('Message:', message);
    calcResult.textContent = message;
});


// Pledge Form Submission
const pledgeForm = document.getElementById('pledge-form');
const pledgeThankYou = document.getElementById('pledge-thankyou');

pledgeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pledges = Array.from(document.querySelectorAll('input[name="pledge"]:checked')).map(el => el.value);
    
    console.log('Pledge submitted:', { name, email, pledges });
    

    pledgeForm.style.display = 'none';
    pledgeThankYou.style.display = 'block';
    
  
    pledgeForm.reset();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});