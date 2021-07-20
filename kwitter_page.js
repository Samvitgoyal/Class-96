var firebaseConfig = {
    apiKey: "AIzaSyB60E3Y-sI2a-Z59UnOMBcYc3zvtKXPcHI",
    authDomain: "kwitter-4dfd2.firebaseapp.com",
    databaseURL: "https://kwitter-4dfd2-default-rtdb.firebaseio.com",
    projectId: "kwitter-4dfd2",
    storageBucket: "kwitter-4dfd2.appspot.com",
    messagingSenderId: "845707074213",
    appId: "1:845707074213:web:e82382d97a64d68b730b4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function Send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,message:msg,
        like:0
    });
    document.getElementById("msg").value="";

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Starte

//End code
      } });  }); }
getData();


function Logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter_room.html";
    }
