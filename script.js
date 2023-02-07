function calc(){
    let input1=document.getElementById("number1").value;
    let inputValue1=parseInt(input1);

    let input2=document.getElementById("number2").value;
    let inputValue2=parseInt(input2);


    let operator=document.getElementById("operator").value;


    if(inputValue1==' '|| inputValue2==' '|| operator=='undefined '){
        console.log("invalid");
    }

    else{

        let calculate;
        if(operator=='add')
        calculate=inputValue1+inputValue2;
        else if(operator=='min')
        calculate=inputValue1-inputValue2;
        else if(operator=='mul')
        calculate=inputValue1*inputValue2;
        else
        calculate=inputValue1 / inputValue2;
        document.getElementById('final-result').innerHTML=calculate;
    }

    
}


function resetBtn(){
    document.getElementById("final-result").innerHTML='';
    document.getElementById("number1").innerHTML='';
    document.getElementById("number1").innerHTML='';
    document.getElementById("operator").value='undefined';
}