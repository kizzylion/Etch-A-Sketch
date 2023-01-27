let container = document.querySelector(".container")
let containerWidth = container.clientWidth;
let divWidth = containerWidth / 16;
let divHeight = divWidth;
console.log(containerWidth)

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        let div = document.createElement('div');
        div.style.width = divWidth + 'px';
        div.style.height = divHeight + 'px';
        div.style.display = 'inline-block';
        div.style.border = '1px solid red';
        
        container.appendChild(div);
        
    }
    let br = document.createElement("br")
    container.appendChild(br)
}

