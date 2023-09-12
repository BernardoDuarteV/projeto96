const firebaseConfig = {
    apiKey: "AIzaSyDDYAfb1saXOyOV7wXK-nrnr1N7s-EWeEI",
    authDomain: "projeto93-e0b34.firebaseapp.com",
    databaseURL: "https://projeto93-e0b34-default-rtdb.firebaseio.com",
    projectId: "projeto93-e0b34",
    storageBucket: "projeto93-e0b34.appspot.com",
    messagingSenderId: "435458050396",
    appId: "1:435458050396:web:922f33555527affd02d999",
    measurementId: "G-XN895YWVXS"
  };

  const app = initializeApp(firebaseConfig);

  function addRoom()
{
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name); 
    
  window.location = "kwitter_page.html";
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });
  
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
