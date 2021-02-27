


var firebaseConfig = {
    apiKey: "AIzaSyD6y1gtSAK-uysQOAxITJmxpJ-3UXPWTXo",
    authDomain: "pictureuploadapp.firebaseapp.com",
    projectId: "pictureuploadapp",
    storageBucket: "pictureuploadapp.appspot.com",
    messagingSenderId: "201049266982",
    appId: "1:201049266982:web:e82c362a26256d4072bfe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let auth = firebase.auth();
  let database = firebase.database()