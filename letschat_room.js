var firebaseConfig = {
    apiKey: "AIzaSyAZtXRfVlCHsajnU3S62npJT7jO1NPQlaU",
    authDomain: "letschat-efc62.firebaseapp.com",
    databaseURL: "https://letschat-efc62-default-rtdb.firebaseio.com",
    projectId: "letschat-efc62",
    storageBucket: "letschat-efc62.appspot.com",
    messagingSenderId: "520919921178",
    appId: "1:520919921178:web:b74432ba4532e2cb5497a3",
    measurementId: "G-C8M07KHLLK"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("add_room").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding add_room"
      });
    
        localStorage.setItem("add_room", room_name);
        
        window.location = "letschat_page.html";
    }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;

});});}
getData();

function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("add_room", name);
        window.location = "letschat_page.html";
    }
    function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("add_room");
            window.location = "index.html";
        }