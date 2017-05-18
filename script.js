$(function(event) {
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

/* This function creates a table row (tr) for each object in the array, with a cell (td) 
for each property to be displayed. Append each of these rows to the table body.*/

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

/*This handler is for the new-item button. It should hide the table and show the form. 
It should set a handler for the form's submit button.*/

$(document).ready(function() {
  $(".sec01").click(function() {
    if($("#sec02").is(":visible")) {
       $("#sec02").hide();
  } else {
       $("#sec02").show();
  }
    return false;
  });
});


/* This handler is for the submit button that creates an object using the form data and 
adds that object to the array. Then it should call the first function you wrote to 
recreate the table with the updated database and show that table, hiding the form.*/

console.clear();
$(document).ready(function () {
    $('#dataTable').sec01({
        "sPaginationType": "full_numbers"
    });
 
    var dt = $('#dataTable').sec01().api();
    $('#add').click(function () {
        var $table = $('#dataTable');
        var $tr = $('#sec01').find('tr').first();
        //$table.find("tbody").append($tr);
        dt.row.add($tr);
        dt.draw();
    });
});

/*HTML Example for above JS
 
<table id="templates" style="display:none">
    <tr>
        <td>Trident</td>
        <td>Internet Explorer 5.0</td>
        <td>Win 95+</td>
        <td>5</td>
        <td>C</td>
    </tr>
    <tr>
        <td>Trident</td>
        <td>Internet Explorer 5.5</td>
        <td>Win 95+</td>
        <td>5.5</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Trident</td>
        <td>Internet Explorer 6</td>
        <td>Win 98+</td>
        <td>6</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Trident</td>
        <td>Internet Explorer 7</td>
        <td>Win XP SP2+</td>
        <td>7</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Trident</td>
        <td>AOL browser (AOL desktop)</td>
        <td>Win XP</td>
        <td>6</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Firefox 1.0</td>
        <td>Win 98+ / OSX.2+</td>
        <td>1.7</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Firefox 1.5</td>
        <td>Win 98+ / OSX.2+</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Firefox 2.0</td>
        <td>Win 98+ / OSX.2+</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Firefox 3.0</td>
        <td>Win 2k+ / OSX.3+</td>
        <td>1.9</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Camino 1.0</td>
        <td>OSX.2+</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Camino 1.5</td>
        <td>OSX.3+</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
    <td>Gecko</td>
        <td>Netscape 7.2</td>
        <td>Win 95+ / Mac OS 8.6-9.2</td>
        <td>1.7</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Netscape Browser 8</td>
        <td>Win 98SE+</td>
        <td>1.7</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Netscape Navigator 9</td>
        <td>Win 98+ / OSX.2+</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.0</td>
        <td>Win 95+ / OSX.1+</td>
        <td>1</td>
        <td>A</td>
   </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.1</td>
        <td>Win 95+ / OSX.1+</td>
        <td>1.1</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.2</td>
        <td>Win 95+ / OSX.1+</td>
        <td>1.2</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.3</td>
        <td>Win 95+ / OSX.1+</td>
        <td>1.3</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.4</td>
        <td>Win 95+ / OSX.1+</td>
        <td>1.4</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.5</td>
        <td>Win 95+ / OSX.1+</td>
        <td>1.5</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.6</td>
        <td>Win 95+ / OSX.1+</td>
        <td>1.6</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.7</td>
        <td>Win 98+ / OSX.1+</td>
        <td>1.7</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Mozilla 1.8</td>
        <td>Win 98+ / OSX.1+</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Seamonkey 1.1</td>
        <td>Win 98+ / OSX.2+</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Gecko</td>
        <td>Epiphany 2.20</td>
        <td>Gnome</td>
        <td>1.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Webkit</td>
        <td>Safari 1.2</td>
        <td>OSX.3</td>
        <td>125.5</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Webkit</td>
        <td>Safari 1.3</td>
        <td>OSX.3</td>
        <td>312.8</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Webkit</td>
        <td>Safari 2.0</td>
        <td>OSX.4+</td>
        <td>419.3</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Webkit</td>
        <td>Safari 3.0</td>
        <td>OSX.4+</td>
        <td>522.1</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Webkit</td>
        <td>OmniWeb 5.5</td>
        <td>OSX.4+</td>
        <td>420</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Webkit</td>
        <td>iPod Touch / iPhone</td>
        <td>iPod</td>
        <td>420.1</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Webkit</td>
        <td>S60</td>
        <td>S60</td>
        <td>413</td>
        <td>A</td>
    </tr>
    <tr>
    <td>Presto</td>
        <td>Opera 7.0</td>
        <td>Win 95+ / OSX.1+</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Opera 7.5</td>
        <td>Win 95+ / OSX.2+</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Opera 8.0</td>
        <td>Win 95+ / OSX.2+</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Opera 8.5</td>
        <td>Win 95+ / OSX.2+</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Opera 9.0</td>
        <td>Win 95+ / OSX.3+</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Opera 9.2</td>
        <td>Win 88+ / OSX.3+</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Opera 9.5</td>
        <td>Win 88+ / OSX.3+</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Opera for Wii</td>
        <td>Wii</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Nokia N800</td>
        <td>N800</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Presto</td>
        <td>Nintendo DS browser</td>
        <td>Nintendo DS</td>
        <td>8.5</td>
        <td>C/A<sup>1</sup>
 
        </td>
    </tr>
    <tr>
        <td>KHTML</td>
        <td>Konqureror 3.1</td>
        <td>KDE 3.1</td>
        <td>3.1</td>
        <td>C</td>
    </tr>
    <tr>
        <td>KHTML</td>
        <td>Konqureror 3.3</td>
        <td>KDE 3.3</td>
        <td>3.3</td>
        <td>A</td>
    </tr>
    <tr>
        <td>KHTML</td>
        <td>Konqureror 3.5</td>
        <td>KDE 3.5</td>
        <td>3.5</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Tasman</td>
        <td>Internet Explorer 4.5</td>
        <td>Mac OS 8-9</td>
        <td>-</td>
        <td>X</td>
    </tr>
    <tr>
        <td>Tasman</td>
        <td>Internet Explorer 5.1</td>
        <td>Mac OS 7.6-9</td>
        <td>1</td>
        <td>C</td>
    </tr>
    <tr>
        <td>Tasman</td>
        <td>Internet Explorer 5.2</td>
        <td>Mac OS 8-X</td>
        <td>1</td>
        <td>C</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>NetFront 3.1</td>
        <td>Embedded devices</td>
        <td>-</td>
        <td>C</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>NetFront 3.4</td>
        <td>Embedded devices</td>
        <td>-</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>Dillo 0.8</td>
        <td>Embedded devices</td>
        <td>-</td>
        <td>X</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>Links</td>
        <td>Text only</td>
        <td>-</td>
        <td>X</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>Lynx</td>
        <td>Text only</td>
        <td>-</td>
        <td>X</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>IE Mobile</td>
        <td>Windows Mobile 6</td>
        <td>-</td>
        <td>C</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>PSP browser</td>
        <td>PSP</td>
        <td>-</td>
        <td>C</td>
    </tr>
    <tr>
        <td>Other browsers</td>
        <td>All others</td>
        <td>-</td>
        <td>-</td>
        <td>U</td>
   </tr>
</table>
<div class="container">
    <div>
        <input id="add" type="button" value="Add" />
    </div>
    <table cellpadding="0" cellspacing="0" border="0" class="dataTable" id="example">
        <thead>
            <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               <td>Trident</td>
                <td>Internet Explorer 4.0</td>
                <td>Win 95+</td>
                <td>4</td>
                <td>X</td>
            </tr>
        </tbody>
    </table>
</div>*/




