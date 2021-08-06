function getValues() 
{
    let dripValue = document.getElementById('dripValue');
    //1. get value to test Fizz
    //DO:
    //Use "let" to declare a variable "fizzValue".  
    //Assign it the value that you find in the the Html element
    //with the id "fizzValue".  HINT: Use document.getElementById
    
    let dropValue = document.getElementById('dropValue');
    //2. get value to test Buzz
    //DO:
    //Use "let" to declare a variable "buzzValue".  
    //Assign it the value that you find in the the Html element
    //with the id "buzzValue".  HINT: Use document.getElementById
    
    let dripValue = parseInt(dripValue);
    //3. check for numbers
    //DO:
    //Convert "fizzValue" to an integer using parseInt()

    let dropValue = parseInt(dropValue);
    //4. check for numbers
    //DO:
    //Convert "buzzValue" to an integer using parseInt()

    //5. validate that "fizzValue" and "buzzValue" are actually Numbers.
    //DO:
    //Use an "if-else-statement" to test the logical conjunction (AND &&) 
    //of the Number.isInteger() of "fizzValue" and "buzzValue"
    {
        //6. we call generateNumbers
        //DO:
        //Use "let" to declare a variable "fbData".
        //Set it equal to the result of FizzBuzz(fizzValue, buzzValue)
        
        //7. we call displayNumbers
        //DO:
        //Call custom function "displayData()" with "fbData" as the parameter
        //displayData(fbData);

    } else {
        //DO:
        //Else if "fizzValue" and "buzzValue" are not Numbers
        //send an alert to the user with the message "You must enter integers"

    }

}

//Traditional Solve Fizz Buzz with a for loop
function FizzBuzz(value1, value2) {
    //DO:
    //Use "let" to declare an array variable "returnArray"
    //Set it equal to []

    //DO:
    //Use "for-loop" to count form 1 to 100 using
    //"i" as the loop control variable
    {
        //DO:
        //Use an "if-else-statement" to evaluate the parameters
        //DO:
        //Use an "if-else-statement" to test each number against the zero modulus(%)
        //of the parameters "value1" (fizz) and "value2" (buzz) . (ie. i % value1 == 0)
        //First test whether the case is true for both "value1" AND (&&) "value2"
        {
            //DO:
            //If the AND case is true then "push" the value 'FizzBuzz'
            //onto the "returnArray"
            
        } 
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value1" is true
        {
            //DO:
            //If true then "push" the value 'Fizz' onto the "returnArray"
            
        } 
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value2" is true
        {
            //DO:
            //If true then "push" the value 'Buzz' onto the "returnArray"
            
        } 
        else
        {
            //DO:
            //Else just push the number "i" onto the "returnArray"
            
        } 
    }
    
    //DO:
    //Finally return the variable "returnArray"
    
}

//custom display function
function displayData(fbData) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
}