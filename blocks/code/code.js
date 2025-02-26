export default async function decorate(block) {
    block.innerHTML = (block.textContent);

    // const div= document.createElement('div');
    // block.innerHTML = block.querySelector('p').textContent;
}
// export default function decorate(block) {
//     debugger;

//     if (block.classList.contains('head')) {
//         document.querySelector('header').innerHTML = block.innerHTML;
//     }
    
//     if (block.classList.contains('footer')) {
//         document.querySelector('footer').innerHTML = block.innerHTML;
        
//     }

//     const links = block.querySelectorAll('link');
//     links.forEach(link => {
//         if (!document.head.querySelector(`link[href="${link.href}"]`)) {
//             document.head.appendChild(link);
//         }
//     });

//     const scripts = block.querySelectorAll('script');
//     scripts.forEach(script => {
//         if (!document.body.querySelector(`script[src="${script.src}"]`)) {
//             const newScript = document.createElement('script');
//             newScript.src = script.src;
//             newScript.async = script.async;
//             document.body.appendChild(newScript);
//         }
//     });

//     block.innerHTML = '';
// }
