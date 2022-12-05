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

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("add_room");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4> "+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innnerHTML+=row;

//End code
} });  }); }

getData();

function updateLike(message_id){
  console.log("Clicked on like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });console.log("Clicked on like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });

}

function logout(){

  localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html"); 
  
}
