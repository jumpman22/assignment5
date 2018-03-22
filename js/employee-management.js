/*eslint-env browser*/

var employees = [
	{name: "Mike Jones", title: "CEO", extension: "3574"},
	{name: "Sally Rogers", title: "Marketing", extension: "5451"},
	{name: "Paul Handle", title: "Finance", extension: "4847"},
	{name: "Betty Childs", title: "Human Resources", extension: "3586"},
	{name: "Colby Lovell", title: "Janitor", extension: "6985"}
];

https://jsfiddle.net/gvanderberg/cwmzyjf4/
for(var i = 0; i < employees.length; i++) {
  document.write("<tr><td>Number " + i + " is:</td>");
  document.write("<td>" + employees[i].name + "</td></tr>");
}



