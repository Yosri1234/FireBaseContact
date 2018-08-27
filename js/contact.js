// Initialize Firebase
var config = {
  apiKey: "AIzaSyDm2hIZ-V2ItweGiaH0Vm8DKu1PBDpUJTg",
  authDomain: "firstfire-1a755.firebaseapp.com",
  databaseURL: "https://firstfire-1a755.firebaseio.com",
  projectId: "firstfire-1a755",
  storageBucket: "firstfire-1a755.appspot.com",
  messagingSenderId: "24940648485"
};
firebase.initializeApp(config);

document.getElementById('contactform').addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var slide =getInputVal('slide');
    var message = getInputVal('message');
    var track = getInputVal('track');

    saveMessage(name,slide,message,track);

    document.getElementById('contactform').reset();
    document.getElementById('alert').style.display = "inline-block";
}


function getInputVal(id){
 return document.getElementById(id).value;
}


var messagesRef = firebase.database().ref('messages');

function saveMessage(contact_name,contact_slide,contact_message,contact_track){
 var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name   : contact_name,
      slide  : contact_slide,
      message: contact_message,
      track  : contact_track,
      state: 0
    });
}