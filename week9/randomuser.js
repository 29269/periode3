// Het resultaat van de JSON bestaat voor een user uit:
// // Let op, een property kan uit meerdere objecten bestaan.
// // De beschrijving kun je terugvinden op
// // https://randomuser.me/documentation#results
//
// // gender
// // name
// // location
// // email
// // login
// // dob
// // registered
// // phone
// // cell
// // id
// // picture
// // nat
function Id(item) {
    let idObj = this;
    idObj.name = item;
    idObj.vale = item;

}

function Gender(item) {
    let genderObj = this;
    genderObj.gender = item;

}

function Name(item) {
    nameObj = this;
    nameObj.title = item.title;
    nameObj.first = item.first;
    nameObj.last = item.last;
}

function Coordinates(item) {
    locationObject = this;
    locationObject.longitude = item.longitude;
    locationObject.latitude = item.latitude;
}

function Address(item) {
    let addressObj = this;
    addressObj.street = item.street;
    addressObj.city = item.city;
    addressObj.state = item.state;
    addressObj.country = item.country;
    addressObj.postcode = item.postcode;


    // TODO:    maak de constructor voor address af,
    //          het object bevat meerdere objecten.
    //          Het adres bestaat uit de onderdelen
    //          street, city, state, country, postcode

    addressObj.showStreet = function() {
        console.log(
            addressObj.street.name,
            addressObj.street.number
        );
    };

    addressObj.showAddress = function() {
        // TODO:    Maak de functie af zodat alle informatie
        //          van het adres getoond wordt. Dus street
        //          city, state, country, postcode
        console.log(
            addressObj.city,
            addressObj.state,
            addressObj.country,
            addressObj.postcode
        );
    };
}

function Coordinates(item) {
    let locationObject = this;
    locationObject.longitude = item.longitude;
    locationObject.latitude = item.latitude;
}

function Timezone(item) {
    let timezoneObject = this;
    timezoneObject.offset = item.offset;
    timezoneObject.description = item.description;
}

function Email(item) {
    let emailObject = this;
    emailObject.email = item;
}

function Login(item) {
    let loginObject = this;
    loginObject.uuid = item.uuid;
    loginObject.username = item.username;
    loginObject.password = item.password;
    loginObject.salt = item.salt;
    loginObject.md5 = item.md5;
    loginObject.sha1 = item.sha1;
    loginObject.sha256 = item.sha256;
}

function Dob(item) {
    let dobObject = this;
    dobObject.date = item.date;
    dobObject.age = item.age;
}

function Registered(item) {
    let registeredObject = this;
    registeredObject.date = item.date;
    registeredObject.age = item.age;
}

function Phone(item) {
    let phoneObject = this;
    phoneObject.phone = item;
}

function Cell(item) {
    let cellObject = this;
    cellObject.cell = item;
}

function Picture(item) {
    let pictureObject = this;
    pictureObject.large = item.large;
    pictureObject.medium = item.medium;
    pictureObject.thumbnail = item.thumbnail;
}

function Nat(item) {
    let natObject = this;
    natObject.nat = item;
}