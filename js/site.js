function getValues() 
{
    let dripValue = document.getElementById("dripValue").value;
    //1. get value to test Fizz
    //DO:
    //Use "let" to declare a variable "fizzValue".  
    //Assign it the value that you find in the the Html element
    //with the id "fizzValue".  HINT: Use document.getElementById
    
    let dropValue = document.getElementById("dropValue").value;
    //2. get value to test Buzz
    //DO:
    //Use "let" to declare a variable "buzzValue".  
    //Assign it the value that you find in the the Html element
    //with the id "buzzValue".  HINT: Use document.getElementById
    
    dripValue = parseInt(dripValue);
    //3. check for numbers
    //DO:
    //Convert "fizzValue" to an integer using parseInt()

    dropValue = parseInt(dropValue);
    //4. check for numbers
    //DO:
    //Convert "buzzValue" to an integer using parseInt()

    //5. validate that "fizzValue" and "buzzValue" are actually Numbers.
    //DO:
    //Use an "if-else-statement" to test the logical conjunction (AND &&) 
    //of the Number.isInteger() of "fizzValue" and "buzzValue"
    if(Number.isInteger(dripValue) && Number.isInteger(dropValue)) {

        let ddData = generateNumbers(dripValue, dropValue);
        //6. we call generateNumbers
        //DO:
        //Use "let" to declare a variable "ddData".
        //Set it equal to the result of FizzBuzz(fizzValue, buzzValue)
        
        displayData(ddData);
        //7. we call displayNumbers
        //DO:
        //Call custom function "displayData()" with "ddData" as the parameter
        //displayData(ddData);

    } else {
        //DO:
        //Else if "fizzValue" and "buzzValue" are not Numbers
        //send an alert to the user with the message "You must enter integers"
        alert("You must enter integers.");

    }

}

//Traditional Solve Fizz Buzz with a for loop
function generateNumbers(value1, value2) {
    let returnArray = [];
    //DO:
    //Use "let" to declare an array variable "returnArray"
    //Set it equal to []

    //DO:
    //Use "for-loop" to count form 1 to 100 using
    //"i" as the loop control variable
    for (i = 0; i <= 100; i++)
    {
        //DO:
        //Use an "if-else-statement" to evaluate the parameters
        //DO:
        //Use an "if-else-statement" to test each number against the zero modulus(%)
        //of the parameters "value1" (fizz) and "value2" (buzz) . (ie. i % value1 == 0)
        //First test whether the case is true for both "value1" AND (&&) "value2"
        if (i % value1 == 0 && i % value2 == 0)
        {
            //DO:
            //If the AND case is true then "push" the value 'FizzBuzz'
            //onto the "returnArray"
            returnArray.push("DripDrop");
            
        } 
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value1" is true
        else if (1 % value1 == 0)
        {
            returnArray.push("Drip");
            //DO:
            //If true then "push" the value 'Fizz' onto the "returnArray"
            
        } 
        else if (1 % value2 == 0)
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value2" is true
        {
            returnArray.push("Drop");
            //DO:
            //If true then "push" the value 'Buzz' onto the "returnArray"
            
        } 
        else
        {
            returnArray.push(i);
            //DO:
            //Else just push the number "i" onto the "returnArray"
            
        } 
    }
    
    return returnArray;
    //DO:
    //Finally return the variable "returnArray"
    
}

//custom display function
function displayData(ddData) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("ddTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < ddData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(ddData[i]);
        rowCols[0].textContent = ddData[i];
       
        rowCols[1].classList.add(ddData[i+ 1]);
        rowCols[1].textContent = ddData[i + 1];
       
        rowCols[2].classList.add(ddData[i+2]);
        rowCols[2].textContent = ddData[i + 2];
       
        rowCols[3].classList.add(ddData[i+3]);
        rowCols[3].textContent = ddData[i + 3];
       
        rowCols[4].classList.add(ddData[i+4]);
        rowCols[4].textContent = ddData[i + 4];

        tableBody.appendChild(tableRow);
    }
}