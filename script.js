const bg = prompt(' body background Color');
const text = prompt(' text color')
const nameElement = document.createElement('div');

if (bg == 'black') {
    nameElement.style.background = 'black';
}else if (bg == 'white') {
    nameElement.style.background = 'white'
}else if (bg == 'blue') {
    nameElement.style.background = 'blue'
}else if (bg == 'yellow') {
    nameElement.style.background = 'yellow'
}else if (bg == 'orange') {
    nameElement.style.background = 'orange'
}else if (bg == 'violet') {
    nameElement.style.background = 'violet'
}else if (bg == 'purple') {
    nameElement.style.background = 'purple'
}else if (bg == 'brown') {
    nameElement.style.background = 'brown'
}else if (bg == 'red') {
    nameElement.style.background = 'red'
}else if (bg == 'green') {
    nameElement.style.background = 'green'
}

if (text == 'black') {
    nameElement.style.color = 'black';
}else if (text == 'white') {
    nameElement.style.color = 'white'
}else if (text == 'blue') {
    nameElement.style.color = 'blue'
}else if (text == 'yellow') {
    nameElement.style.color = 'yellow'
}else if (text == 'orange') {
    nameElement.style.color = 'orange'
}else if (text == 'violet') {
    nameElement.style.color = 'violet'
}else if (text == 'purple') {
    nameElement.style.color = 'purple'
}else if (text == 'brown') {
    nameElement.style.color = 'brown'
}else if (text == 'red') {
    nameElement.style.color = 'red'
}else if (text == 'green') {
    nameElement.style.color = 'green'
}


document.body.appendChild(nameElement);
