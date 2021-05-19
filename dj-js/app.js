const box = document.getElementById("container")

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue"
})

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})

box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})

box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})

document.addEventListener("scroll", function(){
    box.style.backgroundColor = "orange"
})

document.addEventListener("keypress", function(event){
    if (event.code == "KeyR"){
        box.style.backgroundColor = "red"
    }
})

document.addEventListener("keypress", function(event){
    if (event.code == "KeyB"){
        box.style.backgroundColor = "blue"
    }
})
document.addEventListener("keypress", function(event){
    if (event.code == "KeyY"){
        box.style.backgroundColor = "yellow"
    }
})
document.addEventListener("keypress", function(event){
    if (event.code == "KeyG"){
        box.style.backgroundColor = "green"
    }
})
document.addEventListener("keypress", function(event){
    if (event.code == "KeyO"){
        box.style.backgroundColor = "orange"
    }
})

