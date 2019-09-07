// dependencies
const express= require('express');
const app = express();
const PORT = 3000;

// data
function Reservation(name, phoneNumber, eMail, uniqueID) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.eMail = eMail;
  this.uniqueID = uniqueID;
};

let submit = document.getElementById(submit);
let name = document.getElementById(name);
let phoneNumber = document.getElementById(phoneNumber);
let eMail = document.getElementById(eMail);
let uniqueID = document.getElementById(uniqueID);

let newReservation = new Reservation(name.value, phoneNumber.value, eMail.value, uniqueID.value);

submit.onclick = () => {
  newReservation();
};


// open port
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});