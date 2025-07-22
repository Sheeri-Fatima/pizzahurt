// slider
const sliderContainer = document.getElementById("sliderContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

function updateSliderPosition() {
  const slideWidth = sliderContainer.children[0].offsetWidth + 20; // image width + gap
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < sliderContainer.children.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// menu card
const ratingGroups = document.querySelectorAll('.rating-stars');

ratingGroups.forEach(group => {
  const stars = group.querySelectorAll('i');

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      highlightStars(stars, index);
    });

    star.addEventListener('mouseout', () => {
      clearHighlight(stars);
    });

    star.addEventListener('click', () => {
      highlightStars(stars, index);
      alert(`Thanks! You rated ${index + 1} stars.`);
    });
  });
});

function highlightStars(stars, index) {
  stars.forEach((s, i) => {
    s.classList.toggle('highlighted', i <= index);
  });
}

function clearHighlight(stars) {
  stars.forEach((s) => {
    s.classList.remove('highlighted');
  });
}

// oder configuration
const orderForm = document.querySelector(".order-form");
const confirmationMessage = document.getElementById("orderConfirmation");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading page

  // Show confirmation message
  confirmationMessage.classList.remove("hidden");

  // Optional: Reset the form
  orderForm.reset();

  // Optional: Auto-hide the message after 3 seconds
  setTimeout(() => {
    confirmationMessage.classList.add("hidden");
  }, 5000);
});


