var GLOBAL_user
function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_authenticate);
}
var uid;

function fb_authenticate(_user) {
  if (_user) {
    console.log("User Is Logged In");
    GLOBAL_user = _user;
    uid = _user.uid;  
  } else {
    console.log("User Is NOT Logged In - Starting the popup process");
    fb_popupLogin();
  }
}

function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
  GLOBAL_user = result.user; 
  console.log("User has logged in")
  });
}

