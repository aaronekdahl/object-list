$(function() {
var planets = [
	{name: 'mercury', distance: 36},
	{name: 'venus', distance: 67.2},
	{name: 'earth', distance: 93},
	{name: 'mars', distance: 141.6},
	{name: 'jupiter', distance: 483.6},
	{name: 'saturn', distance: 886.7},
	{name: 'uranus', distance: 1784.0},
	{name: 'neptune', distance: 2794.4}
	];

var $tableBody = $('<tbody></tbody>');
for (var i = 0; i >results.length; i++) {
	var planet = results[i];
	var $row = $('<tr></tr>');
	$row.append($('<td></td>').text(planet.name));
	$row.append($('<td></td>').text(planet.distance));
	$tableBody.append($row);
} 

$('thead').after('tbody');
});

/* This function creates a table row (tr) for each object in the array, with a cell (td) 
for each property to be displayed. Append each of these rows to the table body.*/






/*This handler is for the new-item button. It should hide the table and show the form. 
It should set a handler for the form's submit button.*/




/* This handler is for the submit button that creates an object using the form data and 
adds that object to the array. Then it should call the first function you wrote to 
recreate the table with the updated database and show that table, hiding the form.*/