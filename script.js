const grid = document.querySelector('.grid')
let size = 32
//create div
for (let i = 1; i <= (size * size); i++){
    const div = document.createElement('div')
    div.classList.add('cell')
    div.textContent = ``
    // size of the grid divided by number of squares - 3(of the border)
    let squareSize =  800 / size - 3
    console.log(squareSize)
    div.style.width = `${squareSize}px`
    div.style.height = `${squareSize}px`
    
    div.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'black'
        div.style.border = "white 0.5px solid"
       
    })
    grid.appendChild(div) 
}

