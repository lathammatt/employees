function Employee (){
	this.first = null;
	this.last = null;
	this.department = null;
};

function Clinician (){
	this.expertise = null;

};

function Operations (){
	this.duty = null;
};

Clinician.prototype = new Employee();

Operations.prototype = new Employee();



function Department (){
	this.name = null;
	this.employees = [];
};

function FieldOffice (){
	this.name = "The Craphouse";
	this.city = "Smyrna";
};

function Headquarters (){
	this.name = "The Crystal Tower";
	this.city = "Franklin;"
};


FieldOffice.prototype = new Department();

Headquarters.prototype = new Department();

var fieldOffice = new FieldOffice();
var HQ = new Headquarters();

var Amber = new Clinician();
Amber.first = "Amber";
Amber.last = "Kaley";
Amber.expertise = "surgery";
Amber.department = fieldOffice;
fieldOffice.employees.push(Amber.first);

var Sara = new Operations();
Sara.first = "Sara";
Sara.last = "Murray";
Sara.duty = "manager";
Sara.department = HQ;
HQ.employees.push(Sara.first);

var Matt = new Clinician();
Matt.first = "Matt";
Matt.last = "Latham";
Matt.expertise = "disposal";
Matt.department = fieldOffice;
fieldOffice.employees.push(Matt.first);

var Mavis = new Clinician();
Mavis.first = "Mavis";
Mavis.last = "Sellers";
Mavis.expertise = "reception";
Mavis.department = fieldOffice;
fieldOffice.employees.push(Mavis.first);

console.log(Amber.first, Amber.last, "works in", Amber.expertise, "at the", fieldOffice.name, "in", fieldOffice.city);
console.log(Matt.first, Matt.last, "works in", Matt.expertise, "at the", fieldOffice.name, "in", fieldOffice.city);
console.log(Mavis.first, Mavis.last, "works in", Mavis.expertise, "at the", fieldOffice.name, "in", fieldOffice.city);
console.log(Sara.first, Sara.last, "works as a", Sara.duty, "at the", HQ.name, "in", HQ.city);















