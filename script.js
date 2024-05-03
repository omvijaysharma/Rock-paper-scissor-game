//variable 
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let u = document.querySelector("#u")
let c = document.querySelector("#c")
let ann = document.querySelector("#ann")
let coom = document.querySelector("#coom")
//rock
rock.onclick = () => {
    paper.style.opacity = "0.5"
    scissors.style.opacity = "0.5"
    rock.style.opacity = "1"
    
        choice = ["rock","paper","scissor"]
    let computer = choice[Math.floor(Math.random() * 3)]
    coom.innerText = ("computer choice is ",computer)
    
    let user = "rock"
    
    if (user === "rock" && computer === "scissor" || user === "paper" && computer === "rock" || user === "scissor" && computer === "paper") {
    
        console.log("you win")
        u.innerText = eval(u.innerText) + 1 
        ann.innerText = "you win"
        ann.style.backgroundColor = "green"
        
    }else if (computer === "rock" && user === "scissor" || computer === "paper" && user === "rock" || computer === "scissor" && user === "paper"){
    
        console.log("you loss")
        
        c.innerText = eval(c.innerText) + 1
        ann.innerText = "you loss"
        ann.style.backgroundColor = "red"
        
    } else {
    
        console.log("drow")
        ann.innerText = "draw"
        ann.style.backgroundColor = "black"
        
    }
}
//paper
paper.onclick = () => {
    paper.style.opacity = "1"
    scissors.style.opacity = "0.5"
    rock.style.opacity = "0.5"
    
        choice = ["rock","paper","scissor"]
    let computer = choice[Math.floor(Math.random() * 3)]
    coom.innerText = ("computer choice is ",computer)
    
    let user = "paper"
    
    if (user === "rock" && computer === "scissor" || user === "paper" && computer === "rock" || user === "scissor" && computer === "paper") {
    
        console.log("you win")
        u.innerText = eval(u.innerText) + 1 
        ann.innerText = "you win"
        ann.style.backgroundColor = "green"
        
    }else if (computer === "rock" && user === "scissor" || computer === "paper" && user === "rock" || computer === "scissor" && user === "paper"){
    
        console.log("you loss")
        c.innerText = eval(c.innerText) + 1
        ann.innerText = "you loss"
        ann.style.backgroundColor = "red"
        
    } else {
    
        console.log("draw")
        ann.innerText = "draw"
        ann.style.backgroundColor = "black"
        
    }
}
//scissor 
scissors.onclick = () => {
    paper.style.opacity = "0.5"
    scissors.style.opacity = "1"
    rock.style.opacity = "0.5"
        choice = ["rock","paper","scissor"]
        
    let computer = choice[Math.floor(Math.random() * 3)]
    coom.innerText = ("computer choice is ",computer)
    
    let user = "scissor"
    
    if (user === "rock" && computer === "scissor" || user === "paper" && computer === "rock" || user === "scissor" && computer === "paper") {
    
        console.log("you win")
        u.innerText = eval(u.innerText) + 1 
        ann.innerText = "you win"
        ann.style.backgroundColor = "green"
        
    }else if (computer === "rock" && user === "scissor" || computer === "paper" && user === "rock" || computer === "scissor" && user === "paper"){
    
        console.log("you loss")
        c.innerText = eval(c.innerText) + 1 
        ann.innerText = "you loss"
        ann.style.backgroundColor = "red"
        
    } else {
    
        console.log("draw")
        ann.innerText = "draw"
        ann.style.backgroundColor = "black"
        
    }
}
