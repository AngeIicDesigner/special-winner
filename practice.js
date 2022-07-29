var firebaseConfig = {
    apiKey: "AIzaSyC3yLty_gVn2lLJpn76yx_5BdchAVRLOlk",
    authDomain: "kwitter-1bc0d.firebaseapp.com",
    databaseURL: "https://kwitter-1bc0d-default-rtdb.firebaseio.com",
    projectId: "kwitter-1bc0d",
    storageBucket: "kwitter-1bc0d.appspot.com",
    messagingSenderId: "995168700186",
    appId: "1:995168700186:web:d178966e32b6fdb323cea3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser(){
    username=document.getElementById("inputbox").value;
    firebase.database().ref("//").child(username).update({
        purpose:"adding user"
    });
}