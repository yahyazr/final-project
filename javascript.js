function num(number){
    let temp = document.getElementById('hasil')
    temp.value += number
}
function samadengan(){
    let temp = document.getElementById('hasil')
    if(temp.value){
        temp.value = eval(temp.value)
    }
}
function clean() {
    document.getElementById('hasil').value = ''
}
function del() {
    let temp = document.getElementById('hasil')
    temp.value = temp.value.substring(0, temp.value.length - 1);
}
function pangkat(){
    let temp = document.getElementById('hasil')
    temp.value = temp.value*temp.value
}
function persen(){
    let temp = document.getElementById('hasil')
    temp.value = temp.value/100
}
function sin(){
    let temp = document.getElementById('hasil')
    temp.value = Math.sin(temp.value)
}
function cosh(){
    let temp = document.getElementById('hasil')
    temp.value = Math.cos(temp.value)
}
function tan(){
    let temp = document.getElementById('hasil')
    temp.value = Math.tan(temp.value)
}
function akar(){
    let temp = document.getElementById('hasil')
    temp.value = Math.sqrt(temp.value)
}
function log(){
    let temp = document.getElementById('hasil')
    temp.value = Math.log(temp.value)
}
function exponen(){
    let temp = document.getElementById('hasil')
    temp.value = Math.exp(temp.value)
}