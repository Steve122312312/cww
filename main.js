webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
    webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>'
    })
}

console.log("ml5 Version: ",ml5.version)
classifier =ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/Y8nOWQzXX/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model loaded succeddfully")
}

function check(){
    img = document.getElementById("image_captured")
    classifier.classify(img,gotresults)
}


function gotresults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("objectName").innerHTML = results[0].label
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}