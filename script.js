let word = document.getElementById("textArea");
let output = document.getElementById("output");
function check(){
    let flag = true;
    let i=0, j=word.value.length-1;
    while(i<j){
        if(word.value[i] != word.value[j]){
            flag = false;
            break;
        }
        i++;
        j--;
    }
    if(flag){
        word.style.backgroundColor = "Green";
        word.style.color = "white";
        output.innerText = "Pallindrome";
    }
    else{
        word.style.backgroundColor = "Red";
        word.style.color = "white";
        output.innerText = "Not Pallindrome";  
    }
}   