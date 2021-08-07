function getValues() 
{
    //Get the user values from the page.
    let dripValue = document.getElementById("dripValue").value;
    let dropValue = document.getElementById("dropValue").value;
    
    //Parse for numbers.
    dripValue = parseInt(dripValue);
    dropValue = parseInt(dropValue);

    //Check that the numbers are integers.
    if(Number.isInteger(dripValue) && Number.isInteger(dropValue)) {

        //Call dripDrop.
        let ddArray = dripDrop(dripValue,dropValue);
        //Call displayData and write the values to the screen.
        
        displayData(ddArray);

    } else {
        alert("You must enter integers.");
    }

}

//Do drip drop.
function dripDrop(dripValue, dropValue) {
    let returnArray = [];

    //Loop from 1 to 100.
    for (let i = 1; i <= 100; i++) {

        //Check to see if the value is divisible by both 3 and 5.
        if (i % dripValue == 0 && i % dropValue == 0) {            
            returnArray.push('DripDrop');      
        //Check to see if the value is divisible by 3.      
        } else if (i % dripValue == 0) {
            returnArray.push('Drip');
        //Check to see if the value is divisible by 5.
        } else if (i % dropValue == 0) {
            returnArray.push('Drop');
        } else {
            returnArray.push(i);            
        } 
    }
    
    return returnArray;
    
}

//Loop over the array and create a tablerow for each item.
function displayData(ddArray) {

    //Get the table body element from the page.
    let tableBody = document.getElementById("results");

    //Get the template row.
    let templateRow = document.getElementById("ddTemplate");

    //Clear the table first.
    tableBody.innerHTML = "";

    for (let index = 0; index < ddArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //Grab use the td's and put them into the array.
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(ddArray[index]);
        rowCols[0].textContent = ddArray[index];

        rowCols[1].classList.add(ddArray[index + 1]);
        rowCols[1].textContent = ddArray[index+1];

        rowCols[2].classList.add(ddArray[index + 2]);
        rowCols[2].textContent = ddArray[index+2];

        rowCols[3].classList.add(ddArray[index + 3]);
        rowCols[3].textContent = ddArray[index+3];

        rowCols[4].classList.add(ddArray[index + 4]);
        rowCols[4].textContent = ddArray[index+4];

        tableBody.appendChild(tableRow);
    }

}