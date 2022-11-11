function onAdd() {
	
	var empId = document.getElementById('empId').value;
	var empName = document.getElementById('empName').value;
	var empAge = document.getElementById('empAge').value;
	var empGender = document.getElementById("empGender").value;

	if (validateData(empId, empName, empAge)) {

		var table = document.getElementById('empList').getElementsByTagName('tbody')[0];
		var newRow = table.insertRow(-1);
		
		var cell1 = newRow.insertCell(0);
		cell1.innerHTML = empId;
		
		var cell2 = newRow.insertCell(1);
		cell2.innerHTML = empName;
		
		var cell3 = newRow.insertCell(2);
		cell3.innerHTML = empAge;
		
		var cell4 = newRow.insertCell(3);
		cell4.innerHTML = empGender;
		
		var cell5 = newRow.insertCell(4);
		cell5.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;

		resetForm();
	}
}

function validateData(empId, empName, empAge) {
	
	// to check if id field is empty
	if (empId == '') {
		alert('Employee ID field is empty')
		return false;
	}
	
	// to check if name field is empty
	if (empName == '') {
		alert('Employee Name field is empty')
		return false;
	}
	
	// to check if age field is empty
	if (empAge == '') {
		alert('Employee Age field is empty')
		return false;
	}
	
	// to check if ID is unique or not
	var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
	for (var i = 0, row; row = table.rows[i]; i++) {
		if (empId == row.cells[0].innerHTML) {
			alert('Employee with ID ' + empId + ' already present in list.');
			return false;
		}
	}
	
	// to check if name contains letter only
	if (/[^a-zA-Z]/.test(empName)) {
		alert('Name should contain only alphabets.')
		return false;
	}
	
	// to check if Age is number
	if (/[a-zA-Z]/.test(empAge)) {
		alert('Age should be a number.')
		return false;
	}
	
	// to check if Age is between 18 and 65
	if (Number(empAge) < 18 || Number(empAge) > 65) {
		alert('Age should be between 18 and 65.')
		return false;
	}

	return true;
}

function onDelete(td) {
	var row = td.parentElement.parentElement;
	document.getElementById('empList').deleteRow(row.rowIndex);
}

function resetForm() {
	document.getElementById('empId').value = '';
	document.getElementById('empName').value = '';
	document.getElementById('empAge').value = '';
}