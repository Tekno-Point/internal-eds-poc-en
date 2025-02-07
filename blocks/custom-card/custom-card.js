export default function decorate() {
  const hdfc=document.querySelectorAll('.hdfc-detail');
  if(hdfc.length > 0){
    hdfc.forEach((element) => {
      // Add event listener to each .button inside the element
      element.querySelector('.button').addEventListener("click", (e) => {
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
  });
  }
  
}