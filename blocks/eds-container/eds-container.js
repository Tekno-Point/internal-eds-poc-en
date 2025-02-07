export default function decorate(block) {
    var parentEL = block.closest('.eds-container-wrapper');
    block.innerHTML = '';
    
    if (parentEL) {
        let sibling = parentEL.nextElementSibling;
        while (sibling) {
            let nextSibling = sibling.nextElementSibling;
            block.appendChild(sibling);
            sibling = nextSibling;
        }
    }
}
