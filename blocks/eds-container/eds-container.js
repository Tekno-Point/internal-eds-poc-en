export default function decorate(block) {
    const parentEL = block.closest('.eds-container-wrapper');
    block.innerHTML = '';
    
    if (parentEL) {
        let sibling = parentEL.nextElementSibling;
        while (sibling) {
            let nextSibling = sibling.nextElementSibling;
            block.appendChild(sibling);
            sibling = nextSibling;
        }
    }
    
    if (block.classList.contains("image-only-container")) {
        const images = block.querySelectorAll('img');
        if (images.length === 2) {
            const defaultWrapper = block.querySelector('.default-content-wrapper');
            if (defaultWrapper) {
                images[0].classList.add('desktop-only');
                images[1].classList.add('mobile-only');
                defaultWrapper.innerHTML = '';
                defaultWrapper.appendChild(images[0]);
                defaultWrapper.appendChild(images[1]);
            }
        }
    }
}
