
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
  let database = firebase.database();
  let signin = document.getElementById('sign-in')
  let button = document.getElementById('signup')
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let visible = document.getElementById('visible')

  button.addEventListener('click' ,()=>{
   
    let wow = email.value.replace("@gmail.com" , "")
    console.log(wow)
    
    auth.createUserWithEmailAndPassword(email.value , password.value).then((user)=>{
      console.log('Signed Up')
      console.log(user.user.email)
      database.ref().child('users').child(wow).child('email').set(user.user.email).then(function(){
        console.log('Success')
        window.location.href = 'sign-in.html'
      })
      .catch(function(){
        console.log("nope")
      })
    }).catch(function(){
      console.log('Failed')
    })
    console.log('wow')
  })
signin.addEventListener('click' , ()=>{
  console.log('clicked')
  window.location.href = "sign-in.html"
})


visible.addEventListener('click' , ()=>{
  if(password.type === 'password')
  {
    password.type = 'text'
    visible.innerHTML = cl
  }
  else{
    password.type = 'password'
  }
})