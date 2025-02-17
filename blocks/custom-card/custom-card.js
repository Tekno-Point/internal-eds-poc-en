export default function decorate(block) {
  [...block.children].forEach((card, index) =>{
    if (block.classList.contains('hdfc-card-number')) {
      card.classList.add('number-card');
      card.firstElementChild.classList.add('blue-number');
      card.firstElementChild.textContent = index+1;

      const readMoreButton = card.querySelector('.button')
      
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

      // Add event listener to each .button inside the element
      const button = card.querySelector('.button')
      debugger;
      if (button) {
        button.addEventListener("click", (e) => {
          e.preventDefault();
            // Find the parent element of the button
            const parentElement = e.target.parentElement;
            // Find the previous sibling of the parent
            const previousSibling = parentElement.previousElementSibling;
            
            // Toggle the 'active' class on the previous sibling
            previousSibling.classList.toggle('active');
            console.log(e.target.textContent === 'Readmore')
            if (e.target.textContent === 'Readmore') {
                e.target.textContent = '...Readmore';  // Change to '...Readmore' when clicked
            } else {
                e.target.textContent = 'Readmore';  // Change back to 'Readmore'
            }
      
        });
      }
    }
  });

  // const hdfc=document.querySelectorAll('.hdfc-detail');
  // if(hdfc.length > 0){
  //   hdfc.forEach((element) => {
  //     // Add event listener to each .button inside the element
  //     element.querySelector('.button').addEventListener("click", (e) => {
  //       e.preventDefault();
  //         // Find the parent element of the button
  //         const parentElement = e.target.parentElement;
  //         // Find the previous sibling of the parent
  //         const previousSibling = parentElement.previousElementSibling;
          
  //         // Toggle the 'active' class on the previous sibling
  //         previousSibling.classList.toggle('active');
  //         console.log(e.target.textContent === 'Readmore')
  //         if (e.target.textContent === 'Readmore') {
  //             e.target.textContent = '...Readmore';  // Change to '...Readmore' when clicked
  //         } else {
  //             e.target.textContent = 'Readmore';  // Change back to 'Readmore'
  //         }
   
  //     });
  // });
  // }
  
}