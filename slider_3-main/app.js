let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let itemDetails = document.querySelectorAll('.item .detail');

// Button functions
nextButton.onclick = function () {
    showSlider('next');
}
prevButton.onclick = function () {
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}

// Show product details on 'seeMore' button click
seeMoreButtons.forEach((button, index) => {
    button.onclick = function () {
        let currentItem = button.closest('.item'); // Find the closest parent item
        let detailSection = currentItem.querySelector('.detail');
        carousel.classList.add('showDetail');
        detailSection.style.display = 'block'; // Show the detail section of the clicked item
    }
});

// Back button functionality
backButton.onclick = function () {
    carousel.classList.remove('showDetail');
    itemDetails.forEach((detail) => {
        detail.style.display = 'none'; // Hide all detail sections
    });
}
