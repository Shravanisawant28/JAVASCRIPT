function appendValue(value){
    const result= document.getElementById("result");
    result.value += value;
}
function clearPannel(){
    const result= document.getElementById('result')
    result.value =''

}

function clearPrevious(){
    const result= document.getElementById('result')
    result.value = result.value.slice(0,-1)
}

function calculate(){
    const result= document.getElementById('result')
    try{
        result.value = eval(result.value)

    }catch (e){
        result.value="Error"
    }
}