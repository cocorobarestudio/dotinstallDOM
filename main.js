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

// {
//     document.querySelector('button').addEventListener('click', () =>{
//       const item2 = document.createElement('li');
//       item2.textContent = 'item2';

//       const ul = document.querySelector('ul');
//       ul.appendChild(item2);

//     });
// }
// {
//     document.querySelector('button').addEventListener('click', () => {
//         const item0 = document.querySelectorAll('li')[0];
//         const copy = item0.cloneNode(true);

//         const ul = document.querySelector('ul');
//         const item2 = document.querySelectorAll('li')[2];

//         ul.insertBefore(copy, item2);

//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const item0 = document.querySelectorAll('li')[0];
//         const copy = item0.cloneNode(true);

//         const ul = document.querySelector('ul');
//         const item2 = document.querySelectorAll('li')[2];

//         ul.insertBefore(copy, item2);
//     });
// }

// {
//     document.querySelector('button').addEventListener('click',  () => {
//         const item1 = document.querySelectorAll('li')[1];

//         // item1.remove();
//         document.querySelector('ul').removeChild(item1)
//     }); 
// }


// {
//     document.querySelector('button').addEventListener('click', () => {
//         const li = document.createElement('li');
//         const text = document.querySelector('input');
//         li.textContent = text.value;
//         document.querySelector('ul').appendChild(li);

//         text.value = '';
     
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const li = document.createElement('li');
//         const color = document.querySelector('select');
//         li.textContent = `${color.value} - ${color.selectedIndex}`;
//         document.querySelector('ul').appendChild(li);
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const li = document.createElement('li');
//         const color = document.querySelector('select');

//         li.textContent = `${color.value} - ${color.selectedIndex}`;
//         document.querySelector('ul').appendChild(li);
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//         const colors = document.querySelectorAll('input');

//         let selectedColor;
        
//         colors.forEach(color => {
//             if (color.checked === true){
//                 selectedColor = color.value;
//             }
//         });

//         const li = document.createElement('li');
//         li.textContent = selectedColor;
//         document.querySelector('ul').appendChild(li);
//     });
// }

// {
//     document.querySelector('button').addEventListener('dblclick', () => {
//         console.log('double clicked!');
//     });
// }
// {
// document.addEventListener('mousemove', e => {
//     console.log(e.clientX, e.clientY);
// });
// }

// {
//     document.addEventListener('keydown' e => {
//         console.log(e.key);
//     });
// }

{
    const text = document.querySelector('textarea');

    text.addEventListener
}