

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



  let auth = firebase.auth()

let button = document.getElementById('signup')
let visible = document.getElementById('visible')
let password = document.getElementById('password')
let email = document.getElementById('email')

button.addEventListener('click' , function(){
auth.signInWithEmailAndPassword(email.value , password.value).then(function(){
    console.log('sign ined')
    window.location.href = "main.html"
})
})

visible.addEventListener('click' , function(){
    if(password.type === 'password')
    {
        password.type = 'text'
    }

    else{
        password.type = 'password'
    }
})