var employees  = [{name: "Mike Jones", title: "CEO", extension: "3574"},
	{name: "Sally Rogers", title: "Marketing", extension: "5451"},
	{name: "Paul Handle", title: "Finance", extension: "4847"},
	{name: "Betty Childs", title: "Human Resources", extension: "3586"},
	{name: "Colby Lovell", title: "Janitor", extension: "6985"}];

var titleInput  = document.getElementById("title");
var nameInput   = document.getElementById("name");
var extInput = document.getElementById("extension");
var messageBox  = document.getElementById("display");

function insert(){
  var title = titleInput.value;
  var name = nameInput.value;
  var extension = extInput.value;

	employees.push({
  	title: title,
    name: name,
    extension: extension
  });

  clearAndShow();
}

function clearAndShow () {
  // Clear fields
  titleInput.value = "";
  nameInput.value = "";
  extInput.value = "";

  var html = "";

  // Show output
  html += "Showing " + employees.length + " employees";
  html += "<tr>";
  html += "<td>Name</td>";
  html += "<td>Title</td>";
  html += "<td>Extension</td>";
  html += "<td></td>";
  html += "</tr>";
  for(i = 0; i < employees.length; i++)
  {
    html += "<tr>";
    html += "<td>" + employees[i].name + "</td>";
    html += "<td>" + employees[i].title + "</td>";    
    html += "<td>" + employees[i].extension + "</td>";
    html += "<td>" + "<button type='button' id='delete'>Delete</button>" + "</td>";
    html += "</tr>";
  }
  messageBox.innerHTML = html;
  
  //Delete Entry
}



