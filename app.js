var num ;
function insert(num){
    document.forms.display.value = document.forms.display.value+num
}
function tentsuu(){
    var exp = document.forms.display.value
    if(exp){
        document.forms.display.value = eval(document.forms.display.value)
    }
   
}
function c(){
    document.forms.display.value = ""
}
function ba(){
    var exp = document.forms.display.value;
    document.forms.display.value = exp.substring(0,exp.length-1)
}
