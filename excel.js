var arrHead = ['Checkbox', 'S.No', 'Emp. Name', 'Designation', 'Age']; // table headers.

// first create a TABLE structure by adding few headers.
function createTable(tableID, headCount) {
    var table = document.getElementById(tableID);
    let k =1;
    var tr = table.insertRow(-1);
    
    for (var h = 0; h < headCount; h++) {
        var th = document.createElement('th'); // the header object.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
    table.appendChild(tr);    // add tr to a table.
}

/* Function to add the row */
function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.innerHTML = rowCount + 1;

    for(let i=2; i<=4; i++) {
        var cell = row.insertCell(i);
        var element = document.createElement("input");
        element.type = "text";
        element.name = "txtbox[]";
        cell.appendChild(element);
    }
}

/* Function to delete the row */
function deleteRow(tableID) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
    }catch(e) {
        alert(e);
    }
}
