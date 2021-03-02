


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


let database = firebase.database()
let storage = firebase.storage()
// let file = document.getElementById('file')

// file.addEventListener('change' , function(e){
//     let files = e.target.files[0]
//    let url =  storage.ref().child('images').child('pic')
//     url.put(files).then(function(){
//         url.getDownloadURL().then((link)=>{
//             database.ref().child("url").child("img").set(link)
//         })    
//     })
    
    
// })

// database.ref().child('url').child('img').on('value' , function(snapshot){
//     let img = document.createElement('img')
//     document.body.appendChild(img)
//     img.src = snapshot.val()
//     console.log(snapshot.val())
// })