//TASK background color

const colors = ['Red','Blue', 'Green', 'Yellow', 'Pink', 'Violet', 'Magenta', 'Lightgray', 'Skyblue', 'Gray', 'Orange', 'Purple ']
console.log(colors.length)


var colorName = document.querySelector('span')
console.log(colors)

function colorHandler() {
    const randomGeneratedNumber = Math.floor(Math.random() * 11)
    colorName.textContent = colors[randomGeneratedNumber]
    document.body.style.backgroundColor = colors[randomGeneratedNumber]
}