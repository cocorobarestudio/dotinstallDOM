'use strict';

// {
// function update(){
//     document.querySelector('h1').textContent = 'changed!';
//     document.getElementById('target').textContent = 'changed!';
// }
// }
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

// {
// document.querySelector('button').addEventListener('click', () => {
//     const targetNode =  document.getElementById('target');  
//     targetNode.classList.add('my-color');
// });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const targetNode = document.getElementById('target'); 
//         if (targetNode.classList.contains('my-color') === true) {
//             targetNode.classList.remove('my-color');
//         } else {
//             targetNode.classList.add('my-color');
//         }
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () =>{
//         document.getElementById('target').classList.toggle('my-color');
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () =>{
//         document.getElementById('target').textContent = document.getElementById('target').dataset.translation;
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () =>{
//       const item2 = document.createElement('li');
//       item2.textContent = 'item2';

//       const ul = document.querySelector('ul');
//       ul.appendChild(item2);

//     });
// }

{
    document.querySelector('button').addEventListener('click', () =>{
      const item2 = document.createElement('li');
      item2.textContent = 'item2';

      const ul = document.querySelector('ul');
      ul.appendChild(item2);

    });
}
