class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    // to validate first name should start with captital character

    get firstName() { return this.firstName; }
    set firstName(firstName) {
        let firstNameRegex = /'^[A-Z]{1}[a-z]{2,}+$'/;
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

     //to validate last name should start with captital character
     

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = /^[A-Za-z]+$/;
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    // to validate address should start with captital letters or small letters
    

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }

     // to validate city should start with captital letters or small letters
    

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
    }

    // to validate state should start with captital letters or small letters
     

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    // to validate zip  should start with numbers 
     

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
    }

    //  to validate phone number should start with numbers to allow max 10 digit
     

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    // to validate email id  should start with small letter to allow one number and one
  

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName
            + "\nAddress: " + this.address
            + ", City: " + this.city + ", State: "
            + this.state + "\nZip: " + this.zip
            + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
    }
}

try {
    let detailsArray = new Array();
    detailsArray.push(new Contact("Tushal", "Kumar", "Patna", "City", "Bihar", "8000007",
        "91 9852527734", "tushalkashyap11@gmail.com"));
        detailsArray.push(new Contact("Matla", "Kumar", "Patna", "City", "Bihar", "8000007",
        "91 6287456123", "matla@gmail.com"));
        detailsArray.push(new Contact('Rakesh', 'RR', 'Gaya', 'Gya', 'Bihar', '801506',
        '91 7564231988', 'rkRR@gmail.com'));

        console.log('contacts before being updated \n');
        detailsArray.forEach((contact) => console.log(contact.toString()));

        detailsArray.filter(contact => contact.firstName == 'Tushal').map(contact => contact.firstName = "RKO");
        console.log('contacts after being updated \n');
    detailsArray.forEach((contact) => console.log(contact.toString()));

    let index = detailsArray.findIndex(contact => contact.firstName = 'Rakesh');
    detailsArray.slice(index, 1);
    console.log('address book after deleting contact ');
    detailsArray.forEach((contact) => console.log(contact.toString()));

    //declare function nd by using reduce method find the number of contacts
    
    let count = 0;
    function findNumberOfContacts(contact) {
        if (contact != null)
            return count++;
    }
    detailsArray.reduce(findNumberOfContacts, 0);
    console.log(' Total number of contacts in array  : ' + count);

    let newContact = new Contact("Amit", 'Kumar', "City", 'Patna', 'Bihar',
    "903 678", "91 805456456", "assvk7@gmail.com");


    //checking there is no duplicate entry of same person
    
function checkDuplicates(count, contact) {
    if (contact != null)
        count++;
    return count;
}

function addContact() {
    if (countDuplicate == 0) detailsArray.push(newContact);
    else console.log("\nContact not added in the address book. Duplicate Entry found.\n");
}

let countDuplicate = detailsArray.filter(contact => contact.firstName == newContact.firstName)
.map(contact => contact).reduce(checkDuplicates, 0);

addContact();

console.log('Checking duplicate while adding new contact in the address book ');
detailsArray.forEach((contact) => console.log(contact.toString()));
}
catch (e) {
    console.log('Regex test is fail \n' + e);
}
