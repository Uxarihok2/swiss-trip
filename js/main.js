function showImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
  }
  
  document.getElementById("lightbox").onclick = function () {
    this.style.display = "none";
  };

  function speak(text, lang = "de-DE") {

    const speech = new SpeechSynthesisUtterance(text);
  
    const voices = window.speechSynthesis.getVoices();
  
    // 找對應語言 voice
    const selectedVoice = voices.find(
      voice => voice.lang === lang
    );
  
    if (selectedVoice) {
      speech.voice = selectedVoice;
    }
  
    speech.lang = lang;
    speech.rate = 0.8;
  
    window.speechSynthesis.speak(speech);
  }