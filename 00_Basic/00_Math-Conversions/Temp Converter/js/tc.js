
//Hides input, output names & values
document.getElementById('tempInput').style.visibility = 'hidden';
document.getElementById('output1').style.visibility = 'hidden';
document.getElementById('output2').style.visibility = 'hidden';
document.getElementById('output3').style.visibility = 'hidden';

//Function created to implement selected options
function mySelect() {
    "use strict";
    let inputValue, fTemp, cTemp, kTemp;
    let choice = document.getElementById('selection').value;
    
    //Selects Fahrenheit 
    if(choice == "1"){
        //Reset values back to 0
        document.getElementById('F').innerHTML = 0;
        document.getElementById('C').innerHTML = 0;
        document.getElementById('K').innerHTML = 0;
        
        //Only displays what's being converted to
        document.getElementById('tempInput').style.visibility = 'visible'; 
        document.getElementById('output1').style.visibility = 'hidden';
        document.getElementById('output2').style.visibility = 'visible';
        document.getElementById('output3').style.visibility = 'visible'; 
        
        //USER temperature input of selected temperature option
        document.getElementById('tempInput').addEventListener('input', function(e){
            
            //Stores input value & converts them
            inputValue = e.target.value;
            cTemp = ((inputValue - 32)*(5/9)).toFixed(2);
            kTemp = (((inputValue - 32)/(1.8)) + 273.15).toFixed(2);
            
            //Displays calculated values onto page
            document.getElementById('C').innerHTML = cTemp.concat(" C");
            document.getElementById('K').innerHTML = kTemp.concat(" K");
        });//end choice "1"
        
    //Selects Celsius  
    }else if(choice == "2"){
        //Reset values back to 0
        document.getElementById('F').innerHTML = 0;
        document.getElementById('C').innerHTML = 0;
        document.getElementById('K').innerHTML = 0;
    
        //Only displays what's being converted to
        document.getElementById('tempInput').style.visibility = 'visible'; 
        document.getElementById('output1').style.visibility = 'visible';
        document.getElementById('output2').style.visibility = 'hidden';
        document.getElementById('output3').style.visibility = 'visible'; 
        
        //USER temperature input of selected temperature option
        document.getElementById('tempInput').addEventListener('input', function(e){
            
            //Stores input value & converts them
            inputValue = e.target.value;
            fTemp = ((inputValue * 1.8) + 32);
            kTemp = parseInt(inputValue) + 273.15;
            
            //Displays calculated values onto page
            document.getElementById('F').innerHTML = fTemp.toFixed(2).concat(" F");
            document.getElementById('K').innerHTML = kTemp.toFixed(2).concat(" K");
        });//end choice "2"
        
    //Selects Kelvin
    }else if(choice == "3"){
        //store values back to 0
        document.getElementById('F').innerHTML = 0;
        document.getElementById('C').innerHTML = 0;
        document.getElementById('K').innerHTML = 0;
        
        //Only displays what's being converted to
        document.getElementById('tempInput').style.visibility = 'visible'; 
        document.getElementById('output1').style.visibility = 'visible';
        document.getElementById('output2').style.visibility = 'visible';
        document.getElementById('output3').style.visibility = 'hidden';
        
        //USER temperature input of selected temperature option
        document.getElementById('tempInput').addEventListener('input', function(e){
            
            //Stores input value & converts them
            inputValue = e.target.value;
            fTemp = (((inputValue - 273.15)*1.8) + 32).toFixed(2);
            cTemp = (inputValue - 273.15).toFixed(2);
            
            //Displays calculated values onto page
            document.getElementById('F').innerHTML = fTemp.concat(" F");
            document.getElementById('C').innerHTML = cTemp.concat(" C");
        });//end choice "3"
             
    }else{
        location.reload();
        //console.log("Error has occurred.");
    }
}//end mySelect()

//runs mySelect() function if one of the options are selected
document.getElementById('selection').addEventListener('change', mySelect);