function btnPress(key){
    document.getElementById("input").value += key
}

function calculate(){
    let input = document.getElementById("input").value
    document.getElementById("input").value = eval(input)
}

function backspace(){
    let input = document.getElementById("input").value
    document.getElementById("input").value = input.substring(0,input.length-1)
}

function clearAll(){
    document.getElementById("input").value = ""
}