


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
let main = document.getElementById('main-container')
// let file = document.getElementById('file')
let plus = document.getElementById('plus')
let number_of_videos = 0


plus.addEventListener('click' , ()=>{
  window.location.href = 'plus.html'
})

database.ref().child('url').child('num').on('value' , function(snapshot){
  let num = snapshot.val()
  console.log(snapshot.val())
  while(num>0){
    database.ref().child('url').child(num).on('value' , function(snapshot2){
      let image = document.createElement("img")
      image.src = snapshot2.val()
      image.classList.add('class')
      main.appendChild(image)
    })
    num--
  }
})

database.ref().child("videos" + '/').child("videos").on('value' , (videosnum)=>{
console.log(videosnum.val())
number_of_videos = videosnum.val()
while(number_of_videos>0){
  database.ref().child("videos" + '/').child(number_of_videos).on('value', (link)=>{
    let video = document.createElement("video")
    main.appendChild(video)
    video.src = link.val()
    video.controls = 'true'
    console.log(link.val())
    video.classList.add("class")
  })
  
  number_of_videos--
}
})