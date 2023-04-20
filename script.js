const grid = document.querySelector('.grid')
const rmButton = document.querySelector('.button-1')
const rgbButton = document.querySelector('input[type="checkbox"]')

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  

let setSize = (size = 16, color = 1) =>{
    for (let i = 1; i <= (size * size); i++){
        //create div and add class
        const div = document.createElement('div')
        div.classList.add('cell')
        // size of the grid divided by number of squares 
        let squareSize =  800 / size
        //set size of each square
        div.style.width = `${squareSize}px`
        div.style.height = `${squareSize}px`
        //when mouse enters, change color
        div.addEventListener('mouseenter', (e) => {
            if(color == 1){
                e.target.style.background = 'black'
                div.style.outline = "white 1px  solid"    
            }else if(color == 2){
                e.target.style.background = `${getRandomRgb()}`
                div.style.outline = "white 1px  solid"  
            }
        })
        grid.appendChild(div) 
    }
}

//Loads squares when page loads
setSize();

//asks for new size, removes old divs and calls function to create new ones
function changeSize(){
const div = document.getElementsByClassName('cell')
    let newSize = window.prompt("New Size x Size? (Max 100)")
    if(newSize <= 100){
        while(div[0]){
            grid.removeChild(div[0])
        }
        
        if(rgbButton.checked){
            rgbButton.checked = !rgbButton.checked 
        }
        setSize(newSize);
    }else{
        window.alert("Invalid size")
    }
    
}

//calls function when new size button is clicked
rmButton.addEventListener("click", () =>{
    changeSize();
})

//deletes old divs and creates new ones that fill with new color
rgbButton.addEventListener("change", () => {
    const div = document.getElementsByClassName('cell')
    let divLength =  Math.sqrt(div.length)
    
    if (rgbButton.checked){
        while(div[0]){
            grid.removeChild(div[0]) 
        }
        setSize(divLength,2)
    }else{
        while(div[0]){
            grid.removeChild(div[0])
        }
        setSize(divLength,1)
    }

})



