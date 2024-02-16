let row = 6;
let col = 8;
let seatNumList = []
let screen = document.querySelectorAll('.screen')
let seatContainer = document.getElementsByClassName('seatContainer')

let booking =(event,i,j)=>{
if(event.target.classList.contains("seat")){
    event.target.classList.replace('seat','occupied')
    seatNumList.push(i*8+j+1)
}else{
    event.target.classList.replace("occupied","seat")
    seatNumList.splice(0,1)
}
let movieTitle = movie.value
let num = seatNumList.length;
total.innerHTML = `You have selected ${num} seats for a price of $ ${movieTitle*num}`
}
for(let i =0; i<row; i++){
    let div = document.createElement('div')
    div.classList.add('row')
    for (let j=0; j<col; j++){
        let span = document.createElement('span')
        span.classList.add('seat')
        div.appendChild(span)
        span.addEventListener('click',(event)=>booking(event,i,j))
    }
    seatContainer[0].insertBefore(div, screen[0].nextSibling)
    //screen[0].parentNode.insertBefore(div, screen[0].nextSibling)
}



let movie = document.getElementById('movie2')
let total = document.getElementById('total')

let getMovie = (event)=>{
    let occupied = document.querySelectorAll('.occupied')
    for(let i=0; i<occupied.length; i++){
        occupied[i].setAttribute('class','seat')
    }
 total.innerHTML = ''
 seatNumList = []

    
//    let movieTitle = event.target.value
//    let num = seatNumList.length
//    total.innerHTML = `You have selected ${num} seats for a price of $ ${movieTitle*num}`
   
}
movie.addEventListener('change',getMovie)

