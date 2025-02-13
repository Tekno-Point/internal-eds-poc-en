import { isDesktop } from '../header/header.js';

export default function decorate(block) {
  const accordionItems = [];

  // Decorate each row
  [...block.children].forEach((row, index) => {
    // Decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    
    if(block.classList.contains('hdfc-blue-faq')) {
      const pointer = document.createElement('span');
      pointer.classList.add("number");
      let formattedNumber = String(index).padStart(2, '0');
      pointer.textContent = formattedNumber;
      summary.append(pointer)
    }
    
    if(block.classList.contains('hdfc-red-faq')) {
      const pointer = document.createElement('span');
      pointer.classList.add("number");
      pointer.textContent = index + ".";
      summary.append(pointer)
    }
    summary.append(...label.childNodes);

    if(block.classList.contains('hdfc-red-faq')) {
      const arrow = document.createElement('span');
      arrow.classList.add("red-arrow");
      summary.append(arrow);
    }

    // Decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';

    // Decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);

    // Store references to accordion items
    accordionItems.open = true;
    accordionItems.push(details);
  });

  // Add event listeners to manage open state
  accordionItems.forEach((item, index) => {
    if (isDesktop.matches && block.classList.contains('only-mobile-expandable')) {
      item.disabled = true;
      item.open = true;
      item.ariaDisabled = true;
    } else {
      item.addEventListener('toggle', () => {
        // If the accordion item is being opened
        if (item.open) {
          // Close all other accordion items
          accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.open = false;
            }
          });
        }
      });
    }

    if(block.classList.contains('hdfc-blue-faq') || block.classList.contains('hdfc-red-faq')) {
      if(index == 1) {
        item.open = true;
      }
    }
  });
}
