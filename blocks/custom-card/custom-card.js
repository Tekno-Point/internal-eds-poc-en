export default function decorate(block) {
  [...block.children].forEach((card, index) => {
    if (block.classList.contains('hdfc-card-number')) {
      card.classList.add('number-card');
      card.firstElementChild.classList.add('blue-number');
      card.firstElementChild.textContent = index + 1;

      const readMoreButton = card.querySelector('.button');
      if (readMoreButton) {
        readMoreButton.addEventListener("click", (e) => {
          e.preventDefault();
          const parentElement = e.target.parentElement;
          const previousSibling = parentElement.previousElementSibling;

          previousSibling.classList.toggle('active');
          if (e.target.textContent.includes('more') || e.target.textContent.includes('More')) {
            e.target.textContent = 'Read Less';
          } else {
            e.target.textContent = 'Read More';
          }
        });
      }
    }

    if (block.classList.contains('hdfc-detail')) {
      const button = card.querySelector('.button');
      if (button) {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const parentElement = e.target.parentElement;
          const previousSibling = parentElement.previousElementSibling;

          previousSibling.classList.toggle('active');
          if (e.target.textContent === 'Readmore') {
            e.target.textContent = '...Readmore';
          } else {
            e.target.textContent = 'Readmore';
          }
        });
      }
    }
    
    if (block.classList.contains('hdfc-plan-card')) {
      const picture = card.querySelector('picture');
      const button = card.querySelector('.button-container a');

      if (picture && button) {
        const img = picture.querySelector('img');
        const newWrapper = document.createElement('div');
        const newLink = document.createElement('a');
        
        newLink.href = button.href;
        newLink.appendChild(img.cloneNode(true));
        newWrapper.appendChild(newLink);
        
        card.innerHTML = '';
        card.appendChild(newWrapper);
      }
    }
  });
}
