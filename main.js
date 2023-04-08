var SpeechRecoginition = window.webkitSpeechRecognition;
var recognition = new SpeechRecoginition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        console.log("taking selfie!");
        speak();
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 4 3 2 1 SAY CHEEEEEEEEEEEEEEEEEEEEESE I MAKE ROBOT NOISES";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout (function() 
    {
        takesnapshot();
save();
    },5000);
}

Webcam.set({
    width:400,
    height:350,
    image_format:'png',
    png_quality: 100
});
camera = document.getElementById("camera");

function takesnapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie_img" src="'+ data_uri +'">';

    });
}

function save() {
    link = document.getElementById("link");
    img = document.getElementById("selfie_img").src;

    link.href = img;
    link.click();


}