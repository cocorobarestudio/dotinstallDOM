'use strict';

{
function update(){
    document.querySelector('h1').textContent = 'changed!';
    document.getElementById('target').textContent = 'changed!';
}

// setTimeout(update, 1000);

// }

// {
//     function update(){
//         document.querySelectorAll('p').forEach((p, index) => {
//             p.textContent = `${index}番目のpです。`;
//         });
//     }

//     setTimeout(update, 1000);

// }

// {
// document.querySelector('button').addEventListener('click', () => {
//     const targetNode =  document.getElementById('target')  
//     targetNode.textContent = 'changed!';
//     targetNode.title = 'this is title!';
//     targetNode.style.color = 'red';
//     targetNode.style.backgroundColor = 'skyblue';
// });

// }