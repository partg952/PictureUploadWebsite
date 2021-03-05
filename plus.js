
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


let array = []
let database = firebase.database()  
let auth = firebase.storage()
let good = document.getElementById("files")
let div = document.getElementById("image-or-video")

let wow = 0
let videos = 0
let file =  '' 
let upload = document.getElementById('upload')



good.addEventListener('change' , () => {
    let files = good.files[0]
     file = files
    if(file.name.includes(".wav")||file.name.includes(".mp4")||file.name.includes(".mkv")||file.name.includes(".avi"))
       {
 let node = document.createElement("video")
 node.style.height = "300px"
 node.style.width = "300px"
 node.controls = 'true'
//  node.addEventListener("click" , ()=>{
//      node.play()
//  })
        div.appendChild(node)
     console.log("changed")
     
     let url = URL.createObjectURL(files)   
     console.log(url)
     node.src = url
       }
       else{
        let image = document.createElement("img")
        div.appendChild(image)
     console.log("changed")
     image.style.height = "300px"
     image.style.width = "300px"
     let files = good.files[0]
     file = files
     let url = URL.createObjectURL(files)
     console.log(url)
     image.src = url
       }
       
})

database.ref().child("url").child("num").on('value' , (snapshot)=>{
    wow = snapshot.val()
        console.log(snapshot.val())
})

database.ref().child("videos").child("videos").on('value' , (video)=>{
    videos = video.val()
        console.log(video.val())
})



upload.addEventListener('click' , function(){
    let rand = Math.floor(Math.random()*10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
    console.log(file.name)
    console.log(rand)
    
    if(file.name.includes(".wav")||file.name.includes(".mp4")||file.name.includes(".avi")){
        videos++
        console.log(wow)
        console.log("wow")
        console.log(videos)
        auth.ref().child(rand + '/').put(file).then(function(){
            auth.ref().child(rand + '/').getDownloadURL().then(function(link){
                database.ref().child("videos").child(videos).set(link)
                database.ref().child("videos").child('videos').set(videos)
                console.log("done")
            })
        })
    }
    else{
        wow++
    auth.ref().child(rand + '/').put(file).then(function(){
        auth.ref().child(rand + '/').getDownloadURL().then(function(url){
            database.ref().child("url").child(wow).set(url)
            database.ref().child("url").child("num").set(wow)
            console.log("done")
        })
    })
    console.log('clicked') 
    }
   
})






