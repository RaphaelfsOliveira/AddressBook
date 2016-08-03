var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

//array of the contacts
var contacts = [bob, mary];

//print user
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
};

//list all contacts
function list() {
	for (var i = 0; i < contacts.length; i++) {
		printPerson(contacts[i]);
	}
};

/*Search function*/
function search(lastName){
    	for (var i = 0; i < contacts.length; i++) {
    	    if(contacts[i].lastName === lastName){
    	        printPerson(contacts[i]);
    	    }
    	}
};

//add contact
function add(firstName,lastName,email,phoneNumber){
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    }
};

add("Raph","Oliver","raph@email.com","(650) 999-8888");
list();
