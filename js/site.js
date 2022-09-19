function getValues() 
{
    //Get the user values from the page.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    
    //Parse for numbers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //Check that the numbers are integers.
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //Call fizzBuzz.
        let fbArray = fizzBuzz(fizzValue,buzzValue);
        //Call displayData and write the values to the screen.
        
        displayData(fbArray);

    } else {
        alert("You must enter integers.");
    }

}

//Do drip drop.
function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];

    //Loop from 1 to 100.
    for (let i = 1; i <= 100; i++) {

        //Check to see if the value is divisible by both 3 and 5.
        if (i % fizzValue == 0 && i % buzzValue == 0) {            
            returnArray.push('FizzBuzz');      
        //Check to see if the value is divisible by 3.      
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
        //Check to see if the value is divisible by 5.
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);            
        } 
    }
    
    return returnArray;
    
}

//Loop over the array and create a tablerow for each item.
function displayData(fbArray) {

    //Get the table body element from the page.
    let tableBody = document.getElementById("results");

    //Get the template row.
    let templateRow = document.getElementById("fbTemplate");

    //Clear the table first.
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //Grab use the td's and put them into the array.
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }

}