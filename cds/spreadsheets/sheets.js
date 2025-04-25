
function initBlankSheet() {
  luckysheet.create({
      container: 'luckysheet',
      data: [
        {
          name: "Sheet1",
          color: "",
          status: "1",
          order: "0",
          celldata: [],
          config: {},
          index: 0
        }
      ],
      lang: 'en',
      allowEdit: true,
      showtoolbar: false,
      showinfobar: false,
      showsheetbar: false,
      showstatbar: false
    });
}

  function getCell(cell_string) {
    // cell_string is a string representing the cell, i.e., "B4"
    const match = cell_string.match(/^([A-Z]+)(\d+)$/i);
    const letters = match[1].toUpperCase();
    const number = parseInt(match[2], 10);

    // Convert letters to index (e.g., "A" -> 0, "B" -> 1, ..., "Z" -> 25)      
    // For multi-letter strings like "AB", treat like base-26
    // This really shouldn't ever be a thing for this small sheet though. 
    let letterIndex = 0;
    for (let i = 0; i < letters.length; i++) {
      letterIndex = letterIndex * 26 + (letters.charCodeAt(i) - 65);
    }
    const numberIndex = number - 1;
    return luckysheet.getCellValue(numberIndex, letterIndex)
  }

  function checkCell(cell_string, value) {
    return value == getCell(cell_string); 
  }

  function checkCellFunction(cell_string, function_expression) {
    // cell_string is a string representing the cell, i.e., "B4"
    const match = cell_string.match(/^([A-Z]+)(\d+)$/i);
    const letters = match[1].toUpperCase();
    const number = parseInt(match[2], 10);

    // Convert letters to index (e.g., "A" -> 0, "B" -> 1, ..., "Z" -> 25)      
    // For multi-letter strings like "AB", treat like base-26
    // This really shouldn't ever be a thing for this small sheet though. 
    let letterIndex = 0;
    for (let i = 0; i < letters.length; i++) {
      letterIndex = letterIndex * 26 + (letters.charCodeAt(i) - 65);
    }
    const numberIndex = number - 1;

    console.log( `Checking function at row ${numberIndex}, column ${letterIndex}` );

    let sheet = luckysheet.getluckysheetfile()[0];  // Get the sheet    
    if (!sheet.data[numberIndex][letterIndex]) { return false; }
    let function_in_cell = sheet.data[numberIndex][letterIndex].f; 
    return function_in_cell.toLowerCase() == function_expression.toLowerCase(); 
  }
  
  function checkSheet(expression, next_url) {
    const box = document.getElementById("feedback-box");     
    if (expression) { 
        box.style.color = "#00BB64";
        document.getElementById("check-button").style.display = "none"; 
        box.innerHTML = `Well done!<br><button onclick='document.location.href="${next_url}"'>Next Level</button>`;
    } else {
        box.style.color = "#BB0064";
        box.innerHTML = "Something is not quite right yet..."
    }
  }
