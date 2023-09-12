var userName;
var roomName;

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
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

    function send (){
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomName).push({
                name:userName,
                message:msg,
                like:0
          })
          document.getElementById("msg").value="";
          }
          