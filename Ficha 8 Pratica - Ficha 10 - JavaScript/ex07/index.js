
/*
    USAR LET E CONST
    usar sempre que possivel === em vez de ==
    
*/

function readUserInput() {
    let num;
    num = prompt("")
}
function calculate(operator,num1,num2) {
    let cal = float(num1)+operator+float(num2);
    console.log(cal);
    
}

function main() {
    let num1;
    let num2;
    let operator;
    alert("Insira o numero 1:")
    num1=parseInt(readUserInput())
    if(num1 !== 'number'){
        alert("TEM QUE INSERIR UM NUMERO!")
    }
    alert("Insira o numero 2:")
    num2=parseInt(readUserInput())
    if(num2 !== 'number'){
        alert("TEM QUE INSERIR UM NUMERO!")
    }
    alert("Insira o Operador:")
    operator=readUserInput()
    switch (operator) {
        case "+":
            calculate(operator,num1,num2)
            break;
        case "-":
            calculate(operator,num1,num2)
            break;
        case "*":
            calculate(operator,num1,num2)
            break;
        case "/":
            calculate(operator,num1,num2)
            break;
        default:
            alert("Operador não reconhecido")
            break;
    }        
}


main()