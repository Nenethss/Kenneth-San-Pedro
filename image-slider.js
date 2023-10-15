const title = document.querySelector('h2');

const hayu = ["Kenneth", "Ian", "Aaron","Ken", "Ian", "b","c", "d", "a"];

let randomIndex = Math.floor( Math.random() * hayu.length);


for (i = 0; i < 100000; i++) {

    let hay = hayu[randomIndex];

    title.textContent = hay;
    
}