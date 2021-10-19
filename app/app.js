
let initialInput = () => {
    display = document.getElementById("screen-io");
    display.addEventListener("click",()=>{
        if (display.value == 0 || display.value=="I can't solve this :("){
            display.value = "";
        }
    })
}

//faulty
let calcInput = () => {
    button = document.getElementsByClassName("btn")
    button.addEventListener("click",() => {
        display = document.querySelector("#screen-io").value;
        

    })
}

inputCheck = () =>{
    displayInput = document.getElementById("screen-io");
    let re = /^[0-9]{1,}(\.[0-9]{1,})?([x\+\/\-][0-9]{1,}(\.[0-9]{1,})?){1,}$/;
    let input = displayInput.value;
    
    if(re.exec(input) == null){
        return false;
    }
    return true;
}

let deleteCalc = () =>{
    
    del = document.getElementById("delete")
    del.addEventListener("click",()=>{
        display = document.getElementById("screen-io");
        if(display.value=="I can't solve this :("){
            display.value = 0;
        }
        else{
            display.value = display.value.substr(0,display.value.length - 1);
        }
        
    })
}
let resetCalc = () =>{
    reset = document.getElementById("reset")
    reset.addEventListener("click",() => {
        document.getElementById("screen-io").value = 0;
    })
}




let solveCalc = () => {
    solve = document.getElementById("equals");
    solve.addEventListener("click",()=>{

        displayInput = document.getElementById("screen-io");
        input = displayInput.value;

        let calc = /[0-9]{1,}(\.[0-9]{1,})?/g;
        let op = /[\+\-x/]/g;

        if(inputCheck()){
            
            //console.log(input)

            let calculate = [...input.matchAll(calc)];
            let operations = [...input.matchAll(op)];
            //console.log(calculate);
            //console.log(operations);
            let calculation = 0;
            calculation = Number(calculate[0][0]);
            //console.log(calculation);
            for(let i=0;i<operations.length;i++){
                if(operations[i][0] == "+") calculation += Number(calculate[i+1][0]);
                if(operations[i][0] == "-") calculation -= Number(calculate[i+1][0]);
                if(operations[i][0] == "x") calculation *= Number(calculate[i+1][0]);
                if(operations[i][0] == "/") calculation /= Number(calculate[i+1][0]);
            }

            if(calculation % 1 == 0){
                displayInput.value = calculation;
            }
            else{
                displayInput.value = calculation.toFixed(2);
            }
            //console.log(calculation);

            
        }
        else{
            displayInput.value = "I can't solve this :(";
        }
        
    })
}


let numpadInput = () =>{
    numpad = document.getElementById("numpad");
    document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            text = target.innerText; 
            text = text.replace(" ", "");
            //console.log(text);
            if((target.className == "btn num") || target.parentElement.className == "btn num"){
                display = document.getElementById("screen-io");
                if((display.value==0) || display.value == "I can't solve this :(") display.value = "";
                display.value += text;
            } 
        
    }, false);

}

console.log("Nothing to see here :)");
initialInput();
numpadInput()
inputCheck();
solveCalc();
deleteCalc();
resetCalc();
