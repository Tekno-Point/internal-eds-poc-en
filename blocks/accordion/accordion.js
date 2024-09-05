import { isDesktop } from "../header/header.js";

export default function decorate(block) {
  const accordionItems = [];

  // Decorate each row
  [...block.children].forEach((row) => {
    // Decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);

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
  accordionItems.forEach((item) => {
    if (isDesktop.matches && block.className.contains('only-mobile-expandable')) {
      item.disabled = true;
      item.open = true;
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
  });
}
