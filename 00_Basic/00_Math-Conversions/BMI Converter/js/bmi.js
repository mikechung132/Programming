document.getElementById('output').style.visibility = 'hidden';

//FUNCTION THAT DETERMINES BMI STATUS
function bmi() {
    "use strict"
    let height = document.getElementById('hInput').value;
    let weight = document.getElementById('wInput').value;

    //CALCULATES BMI
    let result = (parseInt(weight)/Math.pow(parseInt(height), 2))*703;
    
    if(result <= 18.5){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('status').innerHTML = "BMI: " + result.toFixed(2) + "<br>Underweight";
        $('.bg').removeClass('bg').addClass('bg-primary');                                    
    }else if(result >= 18.6 && result <= 24.9){
        document.getElementById('output').style.visibility = 'visible';
         document.getElementById('status').innerHTML = "BMI: " + result.toFixed(2) + "<br>Normal";
        $('.bg').removeClass('bg').addClass('bg-success');
            
    }else if(result >= 25 && result <= 29.9){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('status').innerHTML = "BMI: " + result.toFixed(2) + "<br>Overweight";
        $('.bg').removeClass('bg').addClass('bg-warning');
        
    }else if(result >= 30 && result <= 39.9){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('status').innerHTML = "BMI: " + result.toFixed(2) + "<br>Obesity";
        $('.bg').removeClass('bg').addClass('bg-danger');
        
    }else if(result >= 40){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('status').innerHTML = "BMI: " + result.toFixed(2) + "<br>Morbid Obesity";
        $('.bg').removeClass('bg').addClass('bg-danger');
    }else{
        //IF NO VALUES ARE ENTERED, ALERT IS EXECUTED
        alert("Please enter height & weight.");   
    }
}

//RELOADS THE PAGE
function startOver(){
    location.reload();
}