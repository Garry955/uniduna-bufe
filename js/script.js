// --- 1. Mobil menu handler ---
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// --- 2. Hero Slider ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let slideInterval;

function updateSlider() {
    slides.forEach((slide, index) => {
        if(index === currentSlide) {
            slide.classList.add('active');
            slide.classList.remove('hidden-slide');
            dots[index].classList.remove('bg-white', 'opacity-50');
            dots[index].classList.add('bg-[#E6C387]');
        } else {
            slide.classList.remove('active');
            slide.classList.add('hidden-slide');
            dots[index].classList.add('bg-white', 'opacity-50');
            dots[index].classList.remove('bg-[#E6C387]');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
    resetInterval();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
    resetInterval();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); // 5 másodpercenként lapoz
}
resetInterval();

// --- 3. Gallery slider ---
function scrollMenu(amount) {
    const container = document.getElementById('menu-container');
    container.scrollBy({ left: amount, behavior: 'smooth' });
}

// --- 4. Modal open ---
const modal = document.getElementById('itemModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

function openModal(imageSrc, title) {
    modalImg.src = imageSrc;
    modalTitle.innerText = title;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 200);
}

// Modal close
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Modal close onclick
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Modal close escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// --- Dark Mode ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    if (htmlElement.classList.contains('dark')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});