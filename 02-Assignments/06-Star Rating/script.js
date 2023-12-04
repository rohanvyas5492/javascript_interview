  const stars = document.querySelectorAll('.star');
  const countElement = document.getElementById('count');

  let selectedStarIndex = 0;

  stars.forEach((star) => {
    star.addEventListener('mouseover',(e) => {
      const index = e.target.getAttribute('data-index');
      highlightStars(index);
    });

    star.addEventListener('mouseout',() => {
      removeFilledStars();
    });

    star.addEventListener('click',(e) => {
      const index = e.target.getAttribute('data-index');
      selectedStarIndex = index;
      countElement.textContent = index;
      highlightStars(index);
    });
  });

  function highlightStars(index) {
    stars.forEach((star) => {
      const starIndex = star.getAttribute('data-index');
      if (starIndex <= index) {
        star.classList.add('star-filled');
      } else {
        star.classList.remove('star-filled');
      }
    });
  }

  function removeFilledStars() {
    stars.forEach((star) => {
      const starIndex = star.getAttribute('data-index');
      if (starIndex > selectedStarIndex) {
        star.classList.remove('star-filled');
      }
    });
  }

