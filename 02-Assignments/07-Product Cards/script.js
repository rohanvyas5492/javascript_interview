  const container = document.getElementById('container');

if(data){
data.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
    verifyStarRating(card, Math.round(product.rating.rate));
});

}

  function verifyStarRating(card, expectedRating) {
  const allStars = card.querySelector('.all__star');
  const filledStars = allStars.querySelectorAll('.star__filled');
  const notFilledStars = allStars.querySelectorAll('.star__notfilled');

  const actualRating = filledStars.length;

  if (actualRating === expectedRating && notFilledStars.length === (5 - expectedRating)) {
    console.log('Star rating verified successfully!');
  } else {
    console.error('Star rating verification failed!');
  }
}

  function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const details = document.createElement('div');
    details.classList.add('details');

    const productName = document.createElement('span');
    productName.classList.add('product__name');
    productName.textContent = product.title;

    const productCategory = document.createElement('span');
    productCategory.classList.add('product__category');
    productCategory.textContent = product.category;

    const allStars = document.createElement('div');
    allStars.classList.add('all__star');
    const rating = Math.round(product.rating.rate);
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add(i <= rating ? 'star__filled' : 'star__notfilled');
      star.innerHTML = i <= rating ? '&#9733;' : '&#9734;';
      allStars.appendChild(star);
    }

    const ratingCount = document.createElement('div');
    ratingCount.classList.add('rating__count');
    ratingCount.innerHTML = `Rating Count : <span>${product.rating.count}</span>`;

    details.appendChild(productName);
    details.appendChild(document.createElement('br'));
    details.appendChild(productCategory);
    details.appendChild(allStars);
    details.appendChild(ratingCount);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn');

    const buyButton = document.createElement('button');
    buyButton.classList.add('btn__buy');
    buyButton.textContent = 'Buy Now';

    btnContainer.appendChild(buyButton);

    card.appendChild(details);
    card.appendChild(btnContainer);

    return card;
  }

