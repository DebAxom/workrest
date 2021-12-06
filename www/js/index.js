const mins30 = 30*60*1000;
const mins15 = 15*60*1000;
const greenColor = "rgb(25, 197, 25)";
const redColor = "red";

function start(_this){
    _this.disabled = true;
    work(_this);
}

function work(_this){
    _this.innerHTML = "Working ...";
    _this.style.backgroundColor = greenColor;
    speak('Start Working !');
    setTimeout(()=>rest(_this),mins30);
}

function rest(_this){
    _this.innerHTML = "Resting ...";
    _this.style.backgroundColor = redColor;
    speak('Take a Break !');
    setTimeout(()=>work(_this),mins15);
}

function speak(text){
    // const utterance = new SpeechSynthesisUtterance(text);
    // window.speechSynthesis.speak(utterance);
    TTS.speak(text);
}